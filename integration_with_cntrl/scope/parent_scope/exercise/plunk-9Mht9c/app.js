var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.person = {name :"World"};
});

app.directive("hello", function () {
  return {
    scope:false,
    template:'<div class="well"><button ng-click="sayHello()">say hello</button> name in directive = {{person.name}}</div>',
      link: function($scope){
       
      }
  };
});

