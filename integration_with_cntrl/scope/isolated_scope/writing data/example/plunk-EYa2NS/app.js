var app = angular.module('plunker', []);
app.directive('hello',function(){
  return {
    restrict: 'E',
    scope:{name:'=name'},
    template: '<input type="text" ng-model="name">'
  };
  });

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});
