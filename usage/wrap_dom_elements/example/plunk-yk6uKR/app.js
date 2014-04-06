var app = angular.module('plunker', []);

app.controller('MainCtrl', function ($scope) {
});

app.directive("panel", function () {
    return {
        restrict: "E",
        transclude: true,
        template: '<div class="panel panel-primary">' +
            ' <div class="panel-heading">' +
            '  <h4>Panel title</h4>' +
            '</div>' +
            '  <div class="panel-body" ng-transclude>This is a invisible panel coontent</div>' +
            '   <div class="panel-footer">Panel footer</div>' +
            '</div>'
    };
});

