/*globals angular, console */

var app = angular.module('bowlApp', []);

app.controller('bowlController', ['$scope', function ($scope) {

    var frames = 10,
        pins = 10,
        rolls = 21;

    $scope.superBowl = {
        numRoll: 0,
        numUserSubmission: 0,
        arrScore: [],
        arrFrames: [],
        rollsPerFrame: 2,
        rollsLastFrame: 3,

        rollAdd: function () {
            if (!this.arrScore[this.numRoll] && this.numRoll < 21) {
                this.arrScore[this.numRoll] = this.numUserSubmission;
                console.log("Pressed a button.");
            }
            this.numRoll++;
        }
    };

    $scope.superBowl.arrFrames.length = frames;
    $scope.superBowl.arrScore.length = rolls;


}]);