/*globals angular */

var app = angular.module('bowlApp', []);

app.controller('bowlController', ['$scope', function ($scope) {

    $scope.score = 0;

    $scope.sub = 0;

    $scope.scoreAdd = function () {
        $scope.score += $scope.sub;
        console.log("Pressed a button.");
    };

}]);