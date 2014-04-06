var app = angular.module('plunker', []);

app.controller('MainCtrl', function ($scope) {
});

app.directive("hello", function () {
    return {
        link: function ($scope, element, attrs) {

            $scope.$watch(attrs.name, function (val) {
                console.log('watch triggerd with value =' + val);
                element.text('Hello ' + val);
            });

            attrs.$observe('name', function (val) {
                console.log('observe triggerd with value =' + val);
                element.text('Hello ' + val);
            })

        }

    };
});

