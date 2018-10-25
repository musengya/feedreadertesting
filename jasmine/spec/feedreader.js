/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {

    // this suite is all about the RSS feeds definitions, the allFeeds variable in our application
    describe('RSS Feeds', function () {

        //it tests to make sure that the allFeeds variable has been defined and that it is not empty
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // a test that loops through each feed in the allFeeds object and ensures it has a URL defined
        //and that the URL is not empty.
        it("each feed url is defined and is not empty", function () {
            allFeeds.forEach(Feed => {
                expect(Feed.url).toBeDefined();
                expect(Feed.url.length).not.toBe(0);
            });
        });

        // a test that loops through each feed in the allFeeds object and ensures it has a name defined
        // and that the name is not empty
        it("each feed has a defined name and is not empty", function () {
            allFeeds.forEach(Feed => {
                expect(Feed.name).toBeDefined();
                expect(Feed.name.length).not.toBe(0);
            });
        });
    });

    // a new test suite name "The menu"
    describe("The menu", function () {

        // Ensures the menu element is hidden by default

        it("is hidden by default", function () {
            const checkClass = $("body").hasClass("menu-hidden");
            expect(checkClass).toBe(true);
        });

        // Ensures the menu changes visibility when the menu icon is clicked

        it("changes visibility when menu icon is clicked", function () {
            // first click
            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(false);

            //second click
            $(".menu-icon-link").click();
            expect($("body").hasClass("menu-hidden")).toBe(true);

        });

    });

    // A test suite named "Initial Entries"
    decsribe("Initial Entries", function () {

        // ensures when the loadFeed function is called and completes its work, there is at least
        // a single .entry element within the .feed container
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });

            it("a single entry is present when LoadFeed is called", function () {
                expect($(",feed .entry").length).toBeGreaterThan(0);
            });
        });
    });

    // a test suite named "New Feed Selection" 
    describe("New Feed Selection", function () {

        // Ensures hen a new feed is loaded by the loadFeed function that the content actually changes 
        let initialFeed;
        let newFeed;

        beforeEach(function (done) {
            loadFeed(1, function () {
                initialFeed = $(".feed").html();
                done();
            });
        });

        it("load new feed", function (done) {
            loadFeed(2, function () {
                secondFeed = $(".feed").html();
                expect(newFeed).not.toEqual(initialFeed);
                done();
            });
        });

    });
}());
