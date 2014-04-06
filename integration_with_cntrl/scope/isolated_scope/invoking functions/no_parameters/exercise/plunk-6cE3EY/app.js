var app = angular.module('plunker', []);
app.directive('hello', function () {
    return {
        restrict: 'E',
        scope: {},
        template: '<button ng-click="sayHello()">Say hello</button>'
    };
});

app.controller('MainCtrl', function ($scope) {
    $scope.name = 'World';
    $scope.sayHello = function () {
        alert('Hello');
    };
});
