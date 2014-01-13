This is a copy of our ModernUI project from November, but with some new Javascript and test files included.

You do not need to do an `npm install` to use this project, though if you want to add our custom jQuery plugin in a "real world" app then you will have to do so.

Inside the `public/javascripts` folder you will see a newly added file called `jquery.analytics.js`. This is the skeleton of our jQuery plugin. Yes, its already started, and there is a tiny bit of code. 

You will also notice a `tests` folder. Inside of this you should open qunit.analytics.html in your browser. You'll see the test suite run (probably too fast to see the details, only the results) and notice that there are a few passing tests and a few failing tests.

Our goal is to make the failing tests pass. You can review the tests in the file `test.analytics.js`.

You probably don't need to modify the tests, but you are welcome to do so. If you are going to add new features to the jQuery plugin, then you certainly should add tests to verify this functionality.

Currently, the tests could be more robust to deal with additional file types that should be tracked as downloads, and possibly other types of links (rather than just http/https) that should be logged as external resources.