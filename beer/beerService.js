angular.module('catsAndBeer')
  .service('beerService', function($http){
    var baseUrl = 'http://api.brewerydb.com/v2';
    var apiKey = "key=0872ffd7c454567d49339d33907a4aaa"

    this.getBeers = function() {
      return $http.jsonp({
        method: 'GET',
        url: baseUrl + '/beers/?' + apiKey
      })
    }
  })
