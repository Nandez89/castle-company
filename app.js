var app = angular.module('CastleCompany', ['ngMockE2E']);

app.controller('CastleBuilderController', function ($scope) {

    $scope.landHeights = [];

    $scope.removeConsecutiveDuplicates = function (array) {
        return array.filter(function (value, position, array) {
            var previousValue = array[position - 1];
            return position === 0 || value !== previousValue;
        });
    };

    function countBuildingPlaces(landHeights) {

        var buildingPlaces = 0;

        if (landHeights.length > 0) {

            buildingPlaces++;

            for (var i = 1; i < landHeights.length; i++) {

                var isPeak = landHeights[i] > landHeights[i - 1] && landHeights[i] > landHeights[i + 1];
                var isValley = landHeights[i] < landHeights[i - 1] && landHeights[i] < landHeights[i + 1];

                if (isPeak || isValley) {
                    buildingPlaces++;
                }
            }
        }
        return buildingPlaces;
    }

    $scope.buildCastles = function () {
        $scope.landHeights = $scope.landHeights.map(Number);
        $scope.landHeights = $scope.removeConsecutiveDuplicates($scope.landHeights);

        $scope.castles = countBuildingPlaces($scope.landHeights);
    };

});