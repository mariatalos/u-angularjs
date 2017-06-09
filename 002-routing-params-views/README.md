# 002 - Routing, Params and Views 

The Purpose of this example it's to understand a more depth routing system, involving params and views, those are the following concepts that we want to cover:

* Routes one file or many? `$stateProvider`
* Abstract states `abstract:true`
* Views `ui-view`
* Sending params `$stateParams`

There is information about [Multiple Named Views][1] and [Parent and Abstract States][2], take a look of this documentation to get a clearer concept about views and routes.

### To Do
Perform the following in the current example:
* Create an `abstract` state for the `dashboard` module, with the following states:
  * Config, use `resolve` in this state to load a `configuration.json` file.
  * Detail, use `params` to send the detail component wanted.
  * Main, dashboard state.

* Create a `navbar` to navigate in the pages:
   * Show the current user name.
   * Show a logout button.
   * Use authFactory to get the login data.
   * Use `ui-view` to show, depending of the `dashboard` state.

* If the user is already logged in page should not allow him to see login or signin page.

### Solution

If you want to see the solution, click [here][3].

### Next
* 003 - Communicating with servers.

[1]:https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views
[2]:https://github.com/angular-ui/ui-router/wiki/Nested-States-and-Nested-Views
[3]:https://github.com/talosdigital/u-angularjs/tree/solved/002-routing-params-views/002-routing-params-views