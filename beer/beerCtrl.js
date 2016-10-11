angular.module('catsAndBeer')
  .controller('beerCtrl', function($scope, $window, beerService){
    beerService.getBeers().then(function(response){
      $scope.beer = response.data;
      console.log(response.data)
    })
    $scope.reloadRoute = function() {
        $window.location.reload();
    }
  });
