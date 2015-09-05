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
  'moo-v.common',
  'akoenig.deckgrid',
  'angular-input-stars'
])
  .constant('OMDB_API', {
    "URI": "http://www.omdbapi.com",
    "SEARCH_BY_TITLE_URI_PATH": "/?t={TITLE}&y={YEAR}&plot=full&r=json&callback=JSON_CALLBACK",
    "SEARCH_BY_ID_URI_PATH": "/?i={ID}&plot=full&r=json&callback=JSON_CALLBACK"
  })
  .constant('ROTTEN_TOMATOES_API', {
    "URI": "http://api.rottentomatoes.com/api/public/v1.0",
    "IN_THEATERS_LIST_URI_PATH": "/lists/movies/in_theaters.json?apikey=gjx4ndzskz5zku8quke796re&page_limit=50&callback=JSON_CALLBACK"
  })
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/movies');

    $stateProvider
      .state('movies', {
        url:'/movies',
        templateUrl: 'app/movies/movies.tmpl.html',
        controller: 'MoviesCtrl',
        controllerAs: 'ctrl'
      })
      .state('movie', {
        url: '/movie/:title/:year',
        templateUrl: 'app/movies/movie.tmpl.html',
        controller: 'MovieCtrl',
        controllerAs: 'ctrl'
      });
  })
  .run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      event.preventDefault();
    });
  });