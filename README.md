# DEMO
# Javascript Best Practices: Modules
This Demo is a simple application that Formats and Trims a String.

I start with a non-module application, then demo each type of module

You run each Demo by opening the index.html in the browser

*The CommonJS project must be compiled first*

You will need to do the following:

1. Install [Node.js](https://nodejs.org/)
2. Download the demo
3. Open Command Prompt/Terminal
4. From the command line, change to the downloaded demo directory
5. Run the following commands
```
cd 4 CommonJS
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
