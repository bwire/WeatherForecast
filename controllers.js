// controllers
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {

  $scope.city = cityService.city;
  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  });

  $scope.submit = function() {
    $location.path('/forecast/2');
  }

}]);

weatherApp.controller('forecastController', 
  ['$scope', '$resource', '$routeParams', 'cityService', 'weatherService', 
  function($scope, $resource, $routeParams, cityService, weatherService) {

  $scope.city = cityService.city;
  $scope.days = $routeParams.days || 2;
  $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);

  $scope.roundTemp = (temp) => { 
    return Math.round(temp); 
  };

  $scope.convertDate = (date) => {
    return date * 1000;
  };

}]);