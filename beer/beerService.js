angular.module('catsAndBeer')
  .service('beerService', function($http){
    var baseUrl = 'http://prost.herokuapp.com/api/v1';
    // var apiKey = "key=0872ffd7c454567d49339d33907a4aaa"

    this.getBeers = function() {
      return $http({
        method: 'GET',
        url: baseUrl + '/beer/rand'
      })
    }
  })
