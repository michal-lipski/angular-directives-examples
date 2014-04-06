var app = angular.module('plunker', []);

app.directive('hello',function(){
  return {
    template: '<h1>Hello world {{name}}</h1>',
    link: function(scope,element){
        scope.name = 'People!';
        
        element.bind('click', function(){
          scope.$apply(function(){
            console.log('click');
            scope.name = 'All';
          });
        });
    }
  };
});

