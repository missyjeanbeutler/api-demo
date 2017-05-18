angular.module('app').controller('mainCtrl', function($scope, mainSvc) {

$scope.getData = function(num) {
  mainSvc.getData(num).then(function(res){
    console.log(res)
    $scope.planets = res.data
  })
}

$scope.numbers = [
  {id: 1, name: 'ONE'},
  {id: 2, name: 'TWO'},
  {id: 3, name: 'THREE'}
]

$scope.lookImHere


})