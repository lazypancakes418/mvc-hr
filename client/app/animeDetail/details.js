angular.module('app.details', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.controller('DetailsCtrl', function ($scope ) {
    $scope.fetch = function() {
        
    }
}).config(function($mdThemingProvider){
   $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
})
//'ngMaterial'