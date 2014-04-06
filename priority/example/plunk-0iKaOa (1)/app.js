var app = angular.module('plunker', []);

app.controller('MainCtrl', function ($scope) {
    $scope.items = [
        {id: 1},
        {id: 2},
        {id: 3}
    ]
});

app.directive('compareButton', function ($compile) {
    return{
        terminal: true,
        priority: 999,//less than ng-repeat priority
        compile: function (element, attrs) {
            element.attr('ng-mouseenter', 'showButton()');
            element.attr('ng-mouseleave', 'hideButton()');
            element.removeAttr("compare-button");
            element.removeAttr("ng-repeat"); //remove ng-repeate so it want be compiled fwe times
            return {
                post: function (scope, iElement, iAttrs) {
                    $compile(iElement)(scope);

                    var button;
                    scope.showButton = function () {
                        button = angular.element('<button>Selected</button>');
                        $compile(button)(scope);
                        iElement.append(button);
                    };

                    scope.hideButton = function () {
                        if (button) {
                            button.remove();
                        }
                    };

                }
            };
        }
    }
});
