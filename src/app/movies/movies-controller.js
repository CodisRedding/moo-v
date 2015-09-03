/**
 * Created by fourq on 9/3/15.
 */
'use strict';

angular.module('moo-v')
  .controller('MoviesCtrl', function (MoviesModel) {
    var ctrl = this;

    ctrl.loading = false;

    ctrl.getBoards = function () {
      BoardsModel.all()
        .then(function (result) {
          ctrl.boards = (result !== 'null') ? result : {};
        }, function () {
          // derp
        });
    };

    ctrl.getBoards();
  });
