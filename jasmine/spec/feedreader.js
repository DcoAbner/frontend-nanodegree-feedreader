/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /**
         * This function loops through allFeeds and checks to make sure that each
         * has a URL that is defined based on truthiness and RegExp expression for HTTP validation;
         * Uses RegExp provided by Diego Perini https://gist.github.com/dperini/729294, which is compressed into one
         * line for Jasmine .toMatch
         */
        it('all have a URL that is not empty', function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeTruthy();
                expect(feed.url).toMatch(/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i);
            }
        });

        /**
         * loops through allFeeds and checks to ensure the name is present and not an
         * empty string
         */

        it('all have a defined name that is not empty', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBeNull();
                expect(feed.name).not.toBe('');
            }
        });
    });

    /**
     * testing suite for the menu element
     */
    describe("The menu", function() {

        let body = $("body");

        /**
         * menu is hidden by applying "menu-hidden" class to body;
         * checks to make sure this class is present on <body>
         */

        it("element is hidden by default", function() {
            expect(body.hasClass("menu-hidden")).toBe(true);
        });

        /**
         * checks to see if the menu-hidden class is removed and
         * then replaced on clicks of the menu-icon-link
         */

        it("toggles display when clicked", function() {

            let menuIcon = $('.menu-icon-link');

            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });
    });

    // /* TODO: Write a new test suite named "Initial Entries" */
    //
    // describe('Initial Entries', function() {
    //
    //     /* TODO: Write a test that ensures when the loadFeed
    //      * function is called and completes its work, there is at least
    //      * a single .entry element within the .feed container.
    //      * Remember, loadFeed() is asynchronous so this test will require
    //      * the use of Jasmine's beforeEach and asynchronous done() function.
    //      */
    //
    //     /**
    //      * asynch test to ensure there is at least one child with the .entry class
    //      * in the feed
    //      */
    //
    //     let feed = $(".feed")[0];
    //     beforeEach(function(done) {
    //         loadFeed(1, done);
    //     });
    //     it("has at least one entry element", function(done) {
    //         expect($(feed).find('.entry').length).toBeGreaterThan(0);
    //         done();
    //     });
    //
    // });
    //
    // /* TODO: Write a new test suite named "New Feed Selection" */
    //
    // describe('New Feed Selection', function() {
    //
    //     /* TODO: Write a test that ensures when a new feed is loaded
    //      * by the loadFeed function that the content actually changes.
    //      * Remember, loadFeed() is asynchronous.
    //      */
    //
    //     /**
    //      * loads 2 different feeds and compares the text of the first child element
    //      * to see if identical
    //      */
    //
    //     let originalFeed;
    //     let newFeed;
    //     beforeEach(function(done) {
    //         $(".feed").empty();
    //        loadFeed(0, function() {
    //            originalFeed = $($(".feed")[0]).children()[0];
    //            console.log(originalFeed.text);
    //        });
    //
    //        loadFeed(1, function() {
    //            newFeed = $($(".feed")[0]).children()[0];
    //            console.log(newFeed.text);
    //            done();
    //
    //        });
    //     });
    //
    //     it ('loads a new feed when clicked', function() {
    //
    //         expect(newFeed.text).not.toBe(originalFeed.text);
    //
    //     });
    //
    // });

}());
