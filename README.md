#### Project Overview
The goal of this Udacity project is to become familiar with the Jasmine development framework by applying it to a pre-existing application. It also introduces the concept of "test driven development" where test suites are created first, then the application is coded until it no longer fails the tests. Following this approach ensures that future function additions to the application do not break existing features.

#### Project structure

	|-- css
	|-- fonts
	|-- jasmine (includes Jamine test library files and our "spec" folder)
		|-- lib (Jasmine 2.2 library)
		|-- spec (Our spec folder)
			|-- feedReader.js (main test file includes all specs)
	|-- js
		|-- app.js (Javascript application file)
	|-- index.html
	|--	README.md

#### How to run?
	* view online here :
	 		OR
	* Open "index.html" file in your browser

#### Test Suites
	* RSS Feeds
		* should be defined - GREEN
		* should have associated url - GREEN
		* should have associated name - GREEN
	* The menu
		* should be hidden by default - GREEN
		* should change visibility when menu button is clicked - GREEN
	* Initial Entries
		* should have 1 or more entries after loadFeed completes - GREEN
	* New Feed Selection
		* should changes the data when feed is successfully loaded - GREEN
	* Entry-link
		* should have a tag with feed-list class - GREEN
		* should have a button to readMore - RED / FUTURE DEVELOPMENT
	* Menu-item
		* should change background color on hover - RED / FUTURE DEVELOPMENT