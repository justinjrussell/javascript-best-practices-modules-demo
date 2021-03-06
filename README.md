# DEMO
# [Javascript Best Practices: Modules](https://justinjrussell.wordpress.com/2015/04/10/javascript-best-practices-modules/)
This Demo is a simple application that Formats and Trims a String.

The Demo starts with a non-module application, then breaks down that application into each type of Module.

Demos can be ran by opening the *index.html* in the browser.

To run the CommonJS Demo you will need to do the following:

1. Install [Node.js](https://nodejs.org/)
2. Download the demo
3. Open Command Prompt/Terminal
4. From the command line, change to the downloaded demo directory
5. Run the following commands
```
cd '4 CommonJS'
```
```
npm install
```
```
grunt
```

The *npm install* command installs required dependencies

The *grunt* command performs the following:

1. Runs [JSHint](https://www.npmjs.com/package/grunt-contrib-jshint)
2. Runs [Mocha](https://www.npmjs.com/package/grunt-mocha) Unit Test
3. Runs [Istanbul](https://www.npmjs.com/package/grunt-mocha-istanbul) Code Coverage
4. Bundles to Native Javascript with [Browserify](https://www.npmjs.com/package/grunt-browserify)
5. [Minifies](https://www.npmjs.com/package/grunt-contrib-uglify) the Bundle
6. Runs [QUnit](https://www.npmjs.com/package/grunt-contrib-qunit) Test in [PhantomJS](http://phantomjs.org/) browser (headless browser)
7. [Watches](https://www.npmjs.com/package/grunt-contrib-watch) files for changes
