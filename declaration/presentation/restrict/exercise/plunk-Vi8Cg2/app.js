var app = angular.module('plunker', []);

app.directive('hello', function () {
    return {
        template: '<h1>Hello world</h1>'
    };
});

