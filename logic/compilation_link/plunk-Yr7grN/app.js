var app = angular.module('plunker', []);

app.directive('hello', function () {
    return {
        restrict: 'E',
        template: '<h1>Hello world</h1>',
        compile: function (compileElement) {
            console.log('compile');
            compileElement.addClass('compiled');

            return function (scope, linkElement) {
                console.log('link');
                console.log(compileElement == linkElement);
            };
        }
    };
});

