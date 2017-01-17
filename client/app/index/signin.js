angular.module('app.signin', ['ngMaterial',"ng","ngAnimate","ngAria"])
.controller('SigninCtrl', function ($scope, $location) {
    $scope.signin = function () {
        console.log('here')
        $location.path('/details')
    }
})
