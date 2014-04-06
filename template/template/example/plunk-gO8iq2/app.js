var app = angular.module('plunker', []);

app.directive('someStuff', function () {
    return {
        template: '<h1 class="well">some importatnt stuff</h1>'
    };
});

