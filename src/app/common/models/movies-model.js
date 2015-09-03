/**
 * Created by fourq on 9/3/15.
 */
'use strict';

angular.module('moo-v.common')
  .service('MoviesModel', function ($http, ROTTEN_TOMATOES_API) {
    var service = this;

    function extract(result) {
      return result.data;
    }

    function getUrl() {
      return ROTTEN_TOMATOES_API.URI;
    }

    function getUrlForId(movieId) {
      return ENDPOINT_URI + 'users/' + UserModel.getCurrentUser() + '/boards/' + boardId + '.json';
    }

    service.all = function () {
      return $http.get(getUrl()).then(extract);
    };

    service.fetch = function (boardId) {
      return $http.get(getUrlForId(boardId)).then(extract);
    };

    service.create = function (board) {
      return $http.post(getUrl(), board).then(extract);
    };

    service.update = function (boardId, board) {
      return $http.put(getUrlForId(boardId), board).then(extract);
    };

    service.destroy = function (boardId) {
      return $http.delete(getUrlForId(boardId)).then(extract);
    };
  });