var app = angular.module('plunker', []);

app.controller('MainCtrl', function ($scope) {
    $scope.providedName = "John";
});

app.directive("hello", function () {
    return {
        link: function ($scope, element, attrs) {

            element.text('Hello ' + $scope.providedName);

        }

    };
});

