//services
weatherApp.service('cityService', function() {
  this.city = 'Minsk,BY';
});

weatherApp.service('weatherService', ['$resource', function($resource) {
  this.getWeather = function(city, days) {
    var weatherAPI = $resource(`http://api.openweathermap.org/data/2.5/forecast?APPID=${appID}`, { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    return weatherAPI.get( { q: city, cnt: days, units: 'metric' });
  };
}]);