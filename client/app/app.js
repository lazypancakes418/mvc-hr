angular.modules('anime', ['anime.Index','ngroute'])
.confif(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'app/index/Index.html',
          controller: 'IndexController'
      })
})