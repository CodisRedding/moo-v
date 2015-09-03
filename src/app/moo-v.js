/**
 * Created by fourq on 9/2/15.
 */
'use strict';

angular.module('underscore', [])
  .factory('_', function () {
    return window._;
  });

angular.module('moo-v', [
  'ui.router',
  'moo-v.common'
])
  .constant('OMDB_API', {
    "URI": "http://www.omdbapi.com",
    "SEARCH_BY_TITLE_URI_PATH": "/?t={TITLE}&y={YEAR}&plot=full&r=json",
    "SEARCH_BY_ID_URI_PATH": "/?i={ID}&plot=full&r=json"
  })
  .constant('ROTTEN_TOMATOES_API', {
    "URI": "http://api.rottentomatoes.com/api/public/v1.0",
    "IN_THEATERS_LIST_URI_PATH": "/lists/movies/in_theaters.json?apikey=gjx4ndzskz5zku8quke796re&page_limit=50"
  })
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('movies', {
        url:'/movies',
        templateUrl: 'app/movies/movies-mdv.tmpl.html',
        controller: 'MoviesCtrl',
        controllerAs: 'ctrl'
      });
  });