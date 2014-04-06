angular.module('hello-directives', [])
    .directive('hello',function () {
        return {
            template: '<h1>Hello world from directive</h1>'
        };

    }).directive('bye', function () {
        return {
            template: '<h1>Bye world from directive</h1>'
        };

    });