/**
 * Created by fourq on 9/4/15.
 */
'use strict';

angular.module('moo-v')
  .controller('MovieCtrl', function (MoviesModel, $stateParams, $state) {
    var ctrl = this,
      movieTitle = encodeURIComponent($stateParams.title),
      movieYear = encodeURIComponent($stateParams.year);

    console.log('movieTitle', movieTitle);
    console.log('movieYear', movieYear);

    ctrl.goBack = function () {
      $state.go('movies');
    };

    ctrl.getMovie = function () {
      MoviesModel.fetchByTitleAndYear(movieTitle, movieYear)
        .then(function (movie) {
          ctrl.movie = (movie !== 'null') ? movie : {};
        }, function (reason) {
          console.log('error in getMovie():', reason);
        });
    };

    ctrl.getMovie();
  });