# 003 - Servers and Maps

The Purpose of this example it's to understand how to interact with servers in a real life application, we will work with a [Open Wheater API][1] to retrive our data, also a little introduction about [ui-leaflet][2] and [Angular Materials][3], and we are going to cover the following subjects: 

*  Data Services and Factories
* `$http` and `$resource`
* `ui-leaflet`
* `$mdDialog`

### To Do

You have to create a page that shows a map where you can see information about weather, UV or pollution, of the location selected when you click on some point of the map.

### Goals

Perform the following in the current example:
* Capture the map click [event][4], and get the [lat,lng].
* Bring the [Weather][5], [UV][8] or [Pollution][9] of the location selected.
* Place a [marker][6] in the locaton selected.
* Promp a modal using `$mdDialog` [service][7], to show the weather data.

### Solution

You might noticed that the example it's not completed, that's part of the challenge figure out, don't forget the good practices!, if you already completed it, take a look of the solution, click [here][3].

[1]:https://openweathermap.org/api
[2]: http://angular-ui.github.io/ui-leaflet/#!/
[3]: https://material.angularjs.org/latest/
[4]: http://angular-ui.github.io/ui-leaflet/#!/examples/events
[5]: https://openweathermap.org/current
[6]: http://angular-ui.github.io/ui-leaflet/#!/examples/marker
[7]: https://material.angularjs.org/latest/api/service/$mdDialog
[8]: https://openweathermap.org/api/uvi
[9]: https://openweathermap.org/api/pollution/co