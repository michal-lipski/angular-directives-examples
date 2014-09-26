var app = angular.module('plunker', []);
app.directive('hello', function () {
    return {
        restrict: 'E',
        template: '<button ng-click="sayHello()">Hello {{name}}</button>',
	compile:function(element){
		//element.attr('ng-click','sayHello()')
	}
    };
});

app.controller('MainCtrl', function ($scope) {
    $scope.name = 'World';
    $scope.sayHello = function(){
	console.log('dsdsd');
	alert('hello');	
    }
});
