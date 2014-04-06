var app = angular.module('plunker', []);
app.directive('hello', function () {
    return {
        restrict: 'E',
        template: '<div>Hello {{name}}</div>'
    };
});

app.controller('MainCtrl', function ($scope) {
    $scope.name = 'World';
});