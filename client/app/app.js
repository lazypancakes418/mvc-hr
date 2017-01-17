angular.module('app', ['anime.signin', 'anime.details','ngRoute'])
.config(function ($routeProvider, $httpProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
          templateUrl: '/app/index/signin.html',
          controller: 'SigninCtrl'
      }).when('/details', {
          templateUrl: '/app/details/details.html',
          controller: 'DetailsCtrl'
      })
})