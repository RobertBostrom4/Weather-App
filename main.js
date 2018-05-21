$(document).ready(function () {
  navigator.geolocation.getCurrentPosition(success, error);
/**
 * This function gets your position
 * @param {any} pos 
 */
function success(pos) {
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    weather(lat, long);
  }

  function error() {
    console.log('There was an error');
  }

 /**
  * This function calls the weather
  * @param {any} lat
  * @param {any} long
  */
 function weather(lat, long) {
    var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

    $.getJSON(URL, function(data) {
      updateDOM(data);
    });
  }

  /**
   * This function updates the DOM depending on the data
   * @param {any} data 
   */
  function updateDOM(data) {
    var city = data.name;
    var temp = Math.round(data.main.temp_max);
    var desc = data.weather[0].description;
    var icon = data.weather[0].icon;

    $('#city').html(city);
    $('#temp').html(temp);
    $('#desc').html(desc);
    $('#icon').attr('src', icon);
  }
});
