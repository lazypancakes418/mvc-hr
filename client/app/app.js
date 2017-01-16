angular.modules('anime', ['anime.index','ngroute'])
.confif(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'app/index/index.html',
          controller: 'IndexCtrl'
      })
})