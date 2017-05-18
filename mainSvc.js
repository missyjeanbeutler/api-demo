angular.module('app').service('mainSvc', function($http) {


this.getData = function(num) {
  return $http.get('http://swapi.co/api/planets/' + num)
}

  
})