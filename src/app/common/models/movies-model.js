/**
 * Created by fourq on 9/3/15.
 */
'use strict';

angular.module('moo-v.common')
  .service('MoviesModel', function ($http, ROTTEN_TOMATOES_API, OMDB_API, _) {
    var service = this;

    function extractListData(result) {

      var ret = _.map(result.movies, function (movie) {
        return {
          id: movie.id,
          title: movie.title,
          year: movie.year,
          rating: movie.mpaa_rating,
          image: movie.posters.thumbnail
        };
      });

      console.log('ret:', ret);
      return ret;
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
      return $http.get(getMoviesListUrl()).then(extractListData);
    };

    service.fetchById = function (movieId) {
      return $http.get(getUrlForId(movieId)).then(extract);
    };

    service.fetchByTitle = function (movieTitle) {
      return $http.get(getUrlForTitle(movieTitle)).then(extract);
    };

    service.fetchByTitleAndYear = function (movieTitle, movieYear) {
      return $http.get(getUrlForTitle(movieTitle, movieYear)).then(extract);
    }
  });