/**
 * Created by fourq on 9/3/15.
 */
'use strict';

describe('Controller: MoviesCtrl', function () {
  beforeEach(module('moo-v'));

  var MoviesCtrl, mockMoviesModel;

  beforeEach(inject(function ($templateCache, $controller, $q) {

    var createPromise = function(returnData) {
      var deferred = $q.defer();
      deferred.resolve(returnData);
      return deferred.promise;
    };

    mockMoviesModel = {
      fetchList: function () {
        return createPromise({data: 'All movies'})
      }
    };

    MoviesCtrl = $controller('MoviesCtrl', {
      MoviesModel: mockMoviesModel
    });
  }));

  it('should be defined', function () {
    expect(MoviesCtrl).toBeDefined();
  });
});
