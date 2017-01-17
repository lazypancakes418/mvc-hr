angular.module('anime', ['anime.signin','ngRoute'])
.config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'index/signin.html',
          controller: 'SigninCtrl'
      })
})