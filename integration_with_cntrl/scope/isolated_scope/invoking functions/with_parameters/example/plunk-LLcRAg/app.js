var app = angular.module('plunker', []);
app.directive('hello', function () {
    return {
        restrict: 'E',
        scope: {sayFunction: '&sayFunction'},
        template: '<button class="btn" ng-click="say()">Say hello</button>',
        link: function (scope) {
            scope.say = function () {
                scope.sayFunction({message: 'World!'});
            }
        }
    };
});

app.controller('MainCtrl', function ($scope) {
    $scope.sayHello = function (message) {
        alert('Hello ' + message);
    };
});
