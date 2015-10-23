/*globals angular */

var app = angular.module('bowlApp', []);

app.controller('bowlController', ['$scope', function ($scope) {

    $scope.score = 0;

    $scope.sub = 0;
    $scope.aScore = [];

    $scope.rollAdd = function () {
        if ($scope.aScore.length < 21) {

            $scope.aScore.push($scope.sub);
            console.log("Pressed a button.");
        }

    };

}]);