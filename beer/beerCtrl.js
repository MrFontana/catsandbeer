angular.module('catsAndBeer')
  .controller('beerCtrl', function($scope, beerService){
    beerService.getBeers().then(function(response){
      $scope.beers = response.data;
      console.log(response.data)
    })
    $scope.beerSlogan = 'Get that cali creamin bruh'
  });
