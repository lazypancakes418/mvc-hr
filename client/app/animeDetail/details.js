angular.module('app.details', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.controller('DetailsCtrl', function ($scope, Anime ) {
    $scope.dataArray = []
    $scope.fetch = function() {
        Anime.getData().then(function (data) {
             $scope.dataArray = data.data
        })
    }
    $scope.fetch();
}).config(function($mdThemingProvider){
   $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
})
//'ngMaterial'