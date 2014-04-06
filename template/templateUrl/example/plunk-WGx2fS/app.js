var app = angular.module('plunker', []);
app.directive('movie',function(){
  return {
    restrict: 'E',
    templateUrl: 'movie.html'
  };
});

app.controller('MainCtrl', function($scope) {
  $scope.name = 'Titanic';
});