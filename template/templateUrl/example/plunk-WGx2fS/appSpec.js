describe('Movie directive', function() {
  var scope;

  //you need to indicate your module in a test
  beforeEach(module('plunker'));

  beforeEach(inject(function($rootScope, $compile, $templateCache) {
    scope = $rootScope.$new();
    compile = $compile;
    cacheTemplate($templateCache);
  }));

  it('should display movie', function() {
    scope.name = 'Titanic';
    
    var element = digest('<movie></movie>');
    
    expect(element.html()).toContain("Titanic");
  });
  
   var digest = function(html) {
        // Step 1: parse HTML into DOM element
        var element = angular.element(html);
        // Step 2: compile the template
        var linkFn = compile(element);
        // Step 3: link the compiled template with the scope.
        linkFn(scope)
        //Step 4: Processes all of the watchers of the current scope and its children
        scope.$digest()
        return element;
    };
    
    function cacheTemplate($templateCache){
      //wee need this workaround to serve template to angular
      //this can be done properly by: karma's html2js pre-processor
      $templateCache.put("movie.html",'<div class="well">'+
                                        '<span>{{name}}</span>'+
                                        ' <button class="btn btn-small btn-primary" type="button">order</button></div>' );
    }
    
    
});