(function(myApp) {
    describe("Content", function() {
        var instance;
        
        beforeEach(function() {
            instance = new myApp.Content();
        });

        it("should contain a default name", function() {
            expect(instance.name()).toEqual("MyApp");
        });

        it("should contain a default author", function() {
            expect(instance.author()).toEqual("MyName");
        });

        it("should return a proper title", function() {
            expect(instance.title()).toEqual("This is MyApp by MyName");
        });
    });


})(window.myApp);