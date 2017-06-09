# 006 - Basic Testing

The Purpose of this example it's to help you understand the basic concepts about unit testing, in this example we are going to work with [`karma`][1] as our test runner and [`jasmine`][2] to write our tests, using our previous example [003 - Servers and Maps][3] as starting point we are going to cover:

*  Testing Services
*  Testing Controllers
*  Setup Jasmine with Karma
*  Coverage Report

### To Run Tests

* `gulp test` will build the tests of the app.
* coverage test result can be found in: `/coverage/PhantomJs***/index.html`

### To Do
Before of getting started please take a look of jasmine [documentantion][4] if you don't have previous expirence with tests:
* Create a test for the Service `WeatherFactory`
* Create a test for the Controller `WeatherController`
* We need 100% of covarage test result

### Solution

Take a look of the solution  [here][5].

[1]:https://karma-runner.github.io/1.0/index.html
[2]:https://jasmine.github.io/pages/docs_home.html
[3]:https://github.com/talosdigital/u-angularjs/tree/master/003-servers-and-maps
[4]:https://jasmine.github.io/2.5/introduction
[5]:https://github.com/talosdigital/u-angularjs/tree/solved/006-basic-testing/006-basic-testing