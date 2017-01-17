angular.module('app', ['app.signin',
    'app.services',
    'app.details',
    'ngRoute'])
.config(function ($routeProvider, $httpProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
          templateUrl: '/app/index/signin.html',
          controller: 'SigninCtrl'
      }).when('/details', {
          templateUrl: '/app/animeDetail/details.html',
          controller: 'DetailsCtrl'
      })
})