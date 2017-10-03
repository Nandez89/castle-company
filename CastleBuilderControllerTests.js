'use strict';

describe('Castle Company Test suit', function () {

    describe('Castle Builder Controller Tests', function () {
        var $scope;

        beforeEach(module('CastleCompany'));

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('CastleBuilderController', {
                $scope: $scope
            });
        }));

        it('should return the array without consecutive duplicate values', function () {
            var array = [1, 2, 2, 3, 4, 4];
            expect($scope.removeConsecutiveDuplicates(array)).toEqual([1, 2, 3, 4]);
        });

        describe('Build Castles', function () {

            it('should set castles to 0 if no data is defined', function () {
                $scope.buildCastles();

                expect($scope.castles).toEqual(0);
            });

            it('should set castles to 1 if the input array is length 1', function () {
                $scope.heights = [999];
                $scope.buildCastles();

                expect($scope.castles).toEqual(1);
            });

            it('should set castles to 2 if the input array has only one peak or valley', function () {
                $scope.heights = [1, 2, 1];
                $scope.buildCastles();

                expect($scope.castles).toEqual(2);

                $scope.heights = [2, 1, 2];
                $scope.buildCastles();

                expect($scope.castles).toEqual(2);
            });

            it('should only count a peak or a valley once when its represented by consecutive equal integers', function () {
                $scope.heights = [1, 2, 2, 2, 2, 1];
                $scope.buildCastles();

                expect($scope.castles).toEqual(2);

                $scope.heights = [2, 1, 1, 1, 1, 2];
                $scope.buildCastles();

                expect($scope.castles).toEqual(2);
            });
        });

    });
});