angular.module('app.services', [])
.factory('Anime', function($http) {
    return ({
    getData: function () {
    return $http({
        method: 'GET',
        url: '/anime'
    }).then(function (resp) {
        return resp.data
    })
    }
})
})