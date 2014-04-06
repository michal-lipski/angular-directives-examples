var app = angular.module('plunker', []);

app.controller('MainCtrl', function ($scope) {
    $scope.primitive = "primitive value";
    $scope.object = {value: "object value"};
});

app.directive('hello', function () {
    return {
        scope: true,
        template: '<button ng-click="change()">Change from directive</button>',
        link: function (scope) {
            scope.change = function () {
                scope.primitive = 'primitive value changed';
                scope.object.value = 'object value changed';
            };
        }
    };
});

