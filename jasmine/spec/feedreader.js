/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {

    var feed_index = 0, // defaults to first feed at index 0
        feed_list = $('.feed-list a'),
        feed_entries = $('.feed');
    describe('RSS Feeds', function() {

        /* It ensures that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('should be defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* It ensures it has a URL defined
         * and that the URL is not empty in allFeeds
         */
         it('should have associated url', function(){
             _.each(allFeeds, function(feed){
                 expect(feed.url).toBeDefined();
             });
         });


        /* It ensures allFeeds has a name defined
         * and that the name is not empty.
         */
         it('should have associated name', function(){
             _.each(allFeeds, function(feed){
                 expect(feed.name).toBeDefined();
                 expect(feed.name.length).not.toBeLessThan(1);
                 expect(feed.name).not.toBeNull();
				 expect(feed.name).not.toEqual('');
             });
         });
    });


    /* Menu related test suite */
    describe('The menu', function() {

         var body = $('body'),
			 hamIcon = $('.menu-icon-link');

         /* It ensures the menu element is
         * hidden by default.
         */
         it('should be hidden by default', function(){
             expect(body.hasClass('menu-hidden')).toBe(true);
         });

         /* It ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('should change visibility when menu button is clicked', function(){
            hamIcon.click();
            expect(body.hasClass('menu-hidden')).toEqual(false);
            hamIcon.click();
            expect(body.hasClass('menu-hidden')).toEqual(true);
         });
    });

    /* "Initial Entries" test suite*/
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            // load a random feed from allFeeds
            feed_index = Math.floor(Math.random() * feed_list.length);
            // loadFeed has an optional 2nd param for callback
            loadFeed(feed_index, done);
        });

        /* It ensure when the loadFeed function is called and
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

       // Holds texts from each loaded feed entry
		var textsArray = [];

		// First, we load two feeds and store their data in the textsArray
		beforeEach(function(done) {
			var data;

			loadFeed(0, function() {
				$entryNode = $('.entry');
				data = $entryNode.text();
				textsArray.push(data);

				loadFeed(1, function() {
					$entryNode = $('.entry');
					data = $entryNode.text();
					textsArray.push(data);
					done();
				});
			});
		});

		// Restores the default feed after the test is done
		afterEach(function() {
			loadFeed(0);
		});

		/* It ensures data actually changes when a new feed is
		 * loaded by the loadFeed function
		 */
		it ('should changes the data when feed is successfully loaded', function(done) {

			// Checks that the data of the selected feeds are different
			expect(textsArray[0]).not.toEqual(textsArray[1]);
			done();
		});
     });


     /******* Additional & Future test suites *******/

      /* "Entry link" test suite */
    describe('Entry-link', function() {

        /**
         * It ensures all entry links have "entry-link" class
         */
        it('should have a tag with feed-list class', function() {
            expect($('.feed > a').hasClass('entry-link')).toBe(true);
        });

        it('should have a button to readMore', function(){
            expect($('.entry > button').text()).ToEqual('readMore');
        });
    });


      /* "Menu item" test suite */
      describe('Menu-item', function() {

          /**
           * It ensure the menu background color
           * will change on hover
           */
          it('should change background color on hover', function(){
              var hovered = $($('.feed-list > li')[0].trigger('mouseover').html());
              expect(hovered).toHaveCss({"background-color": "#008B1E"})
          });
      });





}());
