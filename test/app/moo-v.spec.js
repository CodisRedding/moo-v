'use strict';

describe('Moo-v: configuration', function () {

  beforeEach(module('moo-v'));

  describe('Constant: moo-v OMDB endpoint', function () {

    var omdbAPI;

    beforeEach(inject(function (_OMDB_API_) {
      omdbAPI = _OMDB_API_;
    }));

    it('should be defined', function () {
      expect(omdbAPI).toBeDefined();
    });

    it('should be insecure', function () {
      expect(omdbAPI.URI).toContain("http://");
    });

  });
});