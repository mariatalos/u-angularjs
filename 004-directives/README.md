# 004 - DIRECTIVES

This example has the purpose of understand how to create and work with directives in AngularJS.

We are going to use for the layout [Angular Materials][1] and this project wants to cover the following subjects:

*  Directive types
*  Isolated scope
*  Prefixes to bind the parent scope’s methods and properties to the directive scope.

If you want more information about directives take a look of [Binding a Directive to a Controller][2].

### To Do
We want to create a bussines presentation card, so we want to see the preview of the card and see how it changes when the user inputs some custom fields.
* Create a `card` directive and bind the following variables
	* Icon
	* `background`
	* `color`
	* Title
	* Description
	* Hardcoded message
* Create two panels, one to edit the card and the other one to see the result of the card
* When user modify any field on the left panel the result should be seen automaticly in the right card panel
* Create a `&` atribute in the `scope` of the directive.
    * `bind` the callback of this attribute to the view controller
    * This should allow the user to mark the card as favorite from the right card panel
    * The result of the callback is a list in the view controller with the list of favorites cards

### Solution

You might noticed that the example it's not completed, that's part of the challenge figure out, don't forget the good practices!, if you already completed it, take a look of the solution, click [here][3].

[1]: https://material.angularjs.org/latest/
[2]: https://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html