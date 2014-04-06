var app = angular.module('plunker', []);

  
app.directive('angular', function() {
  return {
    compile: function( element ) {
      var img = document.createElement('img');
      img.src = 'http://goo.gl/ceZGf';
      element.append(img); 
      element.attr('align','middle');
    }
  };
});

