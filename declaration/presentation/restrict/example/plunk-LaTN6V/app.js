var app = angular.module('plunker', []);

app.directive('hello', function () {
    return {
        restrict: 'AEC',
        template: '<h1>Hello world</h1>'
    };
});

