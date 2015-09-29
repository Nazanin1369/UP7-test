/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    var feed_index = 0, // defaults to first feed at index 0
        feed_list = $('.feed-list a'),
        feed_entries = $('.feed');
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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('should have associated url', function(){
             _.each(allFeeds, function(feed){
                 expect(feed.url).toBeDefined();
             });
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('should have a name', function(){
             _.each(allFeeds, function(feed){
                 expect(feed.name).toBeDefined();
                 expect(feed.name.length).not.toBeLessThan(1);
             });
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         var body = $('body'),
			 hamIcon = $('.menu-icon-link');

         it('should be hidden by default', function(){
             expect(body.hasClass('menu-hidden')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('should change visibility when menu button is clicked', function(){
            hamIcon.click();
            expect(body.hasClass('menu-hidden')).toEqual(false);
            hamIcon.click();
            expect(body.hasClass('menu-hidden')).toEqual(true);
         });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            // load a random feed from allFeeds
            feed_index = Math.floor(Math.random() * feed_list.length);
            // loadFeed has an optional 2nd param for callback
            loadFeed(feed_index, done);
        });

        /* ensure when the loadFeed function is called and
        * completes its work, there is at least 1 entry
        */
        it('should have 1 or more entries after loadFeed completes', function(done) {
            var entries = $('.entry');
            expect(entries.length).toBeGreaterThan(0);
            done();
        });
    });

     /* "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* getting the previous content to make sure it changes */
         var prev_title,
             prev_entry,
             prev_color;

        beforeAll(function(done) {
            // cache then call loadFeed on a subsequent feed
            prev_title = $('.header-title').text(),
            prev_entry = $('.entry').first().find('h2').text();
            prev_color = $('.header').css('backgroundColor');

            feed_index = (feed_index + 1 >= allFeeds.length)? 0 : feed_index + 1;
            loadFeed(feed_index, done);
        });

        /* ensure when a new feed is loaded by the loadFeed
        * function that the content actually changes.
        */
        it('should change feed content when a new feed is loaded', function() {
            // check that the feed title has changed
            expect($('.header-title').text()).not.toBe(prev_title);
            // check that first feed entry changed
            var new_entry = $('.entry').first().find('h2').text();
            expect(new_entry).not.toBe(prev_entry);
        });
     });
}());
