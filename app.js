var app = angular.module('CastleCompany', ['ngMockE2E']);

app.controller('CastleBuilderController', function ($scope) {

    $scope.heights = [];

    $scope.removeConsecutiveDuplicates = function (array) {
        return array.filter(function (value, position, array) {
            var previousValue = array[position - 1];
            return position === 0 || value !== previousValue;
        });
    };

    function countBuildingPlaces(landHeights) {

        var buildingPlaces = 0;

        if (heights.length > 0) {

            buildingPlaces++;

            for (var i = 1; i < heights.length; i++) {

                var isPeak = heights[i] > heights[i - 1] && heights[i] > heights[i + 1];
                var isValley = heights[i] < heights[i - 1] && heights[i] < heights[i + 1];

                if (isPeak || isValley) {
                    buildingPlaces++;
                }
            }
        }
        return buildingPlaces;
    }

    $scope.buildCastles = function () {
        $scope.heights = $scope.heights.map(Number);
        $scope.heights = $scope.removeConsecutiveDuplicates($scope.heights);

        $scope.castles = countBuildingPlaces($scope.heights);
    };
});