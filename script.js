/*globals angular */

var app = angular.module('bowlApp', []);

app.controller('bowlController', ['$scope', function ($scope) {

    $scope.numUserSubmission = 0;
    $scope.arrScore = [];
    $scope.arrScore.length = 21;
    var numRoll = 0;

    $scope.rollAdd = function () {
        if (!$scope.arrScore[numRoll] && numRoll < 21) {
            $scope.arrScore[numRoll] = $scope.numUserSubmission;
            console.log("Pressed a button.");
        }
        numRoll++;
    };

}]);