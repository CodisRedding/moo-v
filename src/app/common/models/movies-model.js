/**
 * Created by fourq on 9/3/15.
 */
'use strict';

angular.module('moo-v.common')
  .service('MoviesModel', function ($http, ROTTEN_TOMATOES_API, OMDB_API) {
    var service = this;

    function extractMovieListData(result) {

      console.log('result:', result.data.movies);

      var ret = _.map(result.data.movies, function (movie) {
        return {
          title: movie.title,
          year: movie.year,
          rating: movie.mpaa_rating,
          image: movie.posters.thumbnail
        };
      });

      console.log('extractMovieListData:', ret);
      return ret;
    }

    function extractMovieData(result) {
      console.log('extractMovieData:', result);
      return result;
    }

    function getMoviesListUrl() {
      return ROTTEN_TOMATOES_API.URI + ROTTEN_TOMATOES_API.IN_THEATERS_LIST_URI_PATH;
    }

    function getUrlForId(movieId) {
      return (OMDB_API.URI + OMDB_API.SEARCH_BY_ID_URI_PATH)
        .replace('ID', movieId);
    }

    function getUrlForTitle(movieTitle, movieYear) {
      if (!movieYear) {
        movieYear = '';
      }

      return (OMDB_API.URI + OMDB_API.SEARCH_BY_TITLE_URI_PATH)
        .replace('TITLE', movieTitle)
        .replace('YEAR', movieYear);
    }

    service.fetchList = function () {
      return $http.jsonp(getMoviesListUrl()).then(extractMovieListData);
    };

    service.fetchById = function (movieId) {
      return $http.get(getUrlForId(movieId)).then(extract);
    };

    service.fetchByTitle = function (movieTitle) {
      return $http.get(getUrlForTitle(movieTitle)).then(extract);
    };

    service.fetchByTitleAndYear = function (movieTitle, movieYear) {
      return $http.get(getUrlForTitle(movieTitle, movieYear)).then(extract);
    };
  });