'use strict';

describe("Service: MoviesModel", function() {
  beforeEach(module('moo-v'));

  var MoviesModel;

  beforeEach(inject(function(_MoviesModel_) {
    MoviesModel = _MoviesModel_;
  }));

  it('should be defined', function() {
    expect(MoviesModel).toBeDefined();
  });
});