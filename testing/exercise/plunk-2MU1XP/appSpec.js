describe('Hello directive', function () {
    var scope;

    //you need to indicate your module in a test
    beforeEach(module('plunker'));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        compile = $compile;
    }));

    it('should say hallo to the World', function () {
        scope.name = 'World';

        var element = digest('<hello></hello>');

        expect(element.html()).toContain("Hello World");
    });

    var digest = function (html) {
        // Step 1: parse HTML into DOM element
        var element = angular.element(html);

        // Step 2: compile the template

        // Step 3: link the compiled template with the scope.

        //Step 4: Processes all of the watchers of the current scope and its children

        return element;
    };

});