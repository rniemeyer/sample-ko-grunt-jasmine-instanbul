(function(global, ko) {

    var myApp = global.myApp = {};


    var Content = function() {
        this.name = ko.observable("MyApp");
        this.author = ko.observable("MyName");

        this.title = ko.computed(this.getTitle, this);
    };

    ko.utils.extend(Content.prototype, {
        getTitle: function() {
            var name = this.name(),
                author = this.author();

            if (name && author) {
                return "This is " + name + " by " + author;
            } else {
                //code coverage should show that this is not hit
                return "Nothing to see here"
            }
        }
    });

    myApp.Content = Content;

})(window, window.ko);