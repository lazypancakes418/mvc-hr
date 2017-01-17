angular.module('app.details', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.controller('DetailsCtrl', function ($scope, Anime ) {
    var count = 0;
    $scope.dataArray = []
    $scope.fetch = function() {
        Anime.getData().then(function (data) {
            var len = data.data.length / 2;
            var arr1 = data.data.slice(0,len);
            var arr2= data.data.slice(len);
             $scope.dataArray.push(arr1);
             $scope.dataArray.push(arr2);
        })
    }
    $scope.fetch();
}).config(function($mdThemingProvider){
   $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
})
//'ngMaterial'