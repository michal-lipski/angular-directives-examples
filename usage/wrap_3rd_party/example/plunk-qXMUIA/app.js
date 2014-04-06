var app = angular.module('plunker', []);

app.controller('MainCtrl', function ($scope) {

    $scope.values = [
        {id: 1, name: 'aaa'},
        {id: 2, name: 'abb'},
        {id: 3, name: 'acc'},
        {id: 4, name: 'add'}
    ];
    $scope.selected = "";

});

app.directive('tokenInput', function () {
    return {
        replace: true,
        template: '<input type="text" />',
        link: function (scope, element, attrs) {

            var onChange = function (val) {
                scope.$apply(function () {
                    scope.selected = val.name;
                });
            };

            element.tokenInput(scope.$eval(attrs.data), {
                minChars: 0,
                animateDropdown: false,
                preventDuplicates: true,
                onAdd: onChange,
                onDelete: onChange,
                hintText: null
            });
        }
    };
});
