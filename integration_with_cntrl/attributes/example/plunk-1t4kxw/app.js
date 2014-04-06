var app = angular.module('plunker', []);

app.controller('MainCtrl', function ($scope) {
});

app.directive("hello", function () {
    return {
        link: function ($scope, element, attrs) {
            element.text('Hello ' + attrs.name);
        }

    };
});

