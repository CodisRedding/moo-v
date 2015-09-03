/**
 * Created by fourq on 9/3/15.
 */
'use strict';

angular.module('moo-v')
  .controller('MoviesCtrl', function (MoviesModel) {
    var ctrl = this;

    ctrl.loading = false;

    ctrl.getMovies = function () {
      MoviesModel.fetchList()
        .then(function (result) {
          ctrl.movies = (result !== 'null') ? result : {};
        }, function () {
          // derp
        });
    };

    ctrl.getMovies();
  });
