var app = angular.module('plunker', []);

app.controller('MainCtrl', function ($scope) {
});

app.directive("panel", function () {
    return {
        restrict: "E",
        template: '<div class="panel panel-primary">' +
            ' <div class="panel-heading">' +
            '  <h4>Panel title</h4>' +
            '</div>' +
            '  <div class="panel-body" >[DEFAULT CONTENT]</div>' +
            '   <div class="panel-footer">Panel footer</div>' +
            '</div>'
    };
});

