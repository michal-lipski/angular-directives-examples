var app = angular.module('plunker', []);

  
app.directive('angular', function() {
  return {
    compile: function( ) {
      var img = document.createElement('img');
      img.src = 'http://goo.gl/ceZGf';
    }
  };
});

