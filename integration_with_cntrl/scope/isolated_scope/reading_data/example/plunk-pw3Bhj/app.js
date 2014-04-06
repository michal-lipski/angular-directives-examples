var app = angular.module('plunker', []);
app.directive('hello',function(){
  return {
    restrict: 'E',
    scope:{name:'@name'},
    template: '<div ng-click="change()">Hello {{name}} from directive!</div>',
    link:function(scope,element){
      scope.change = function(){
        scope.name="New Name";
      };
    }
  };
  });

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.person = {
    name:'John'
  };
});
