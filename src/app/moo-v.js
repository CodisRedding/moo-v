/**
 * Created by fourq on 9/2/15.
 */
'use strict';

angular.module('moo-v', [
  'ui.router',
  'moo-v.common'
])
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('movies', {
        url:'/movies',
        templateUrl: 'app/movies/movies-mdv.tmpl.html',
        controller: 'MoviesCtrl',
        controllerAs: 'ctrl'
      });
  });