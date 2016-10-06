angular.module('catsAndBeer')
  .service('catService', function($http){
    var baseUrl = 'https://thecatapi.com';

    this.getCats = function() {
      return $http({
        method: 'GET',
        url: baseUrl + '/api/images/get?results_per_page=48&format=xml&size=medium'
      })
    }
    this.getRandomCat = function() {
      return $http({
        method: 'GET',
        url: baseUrl + '/api/images/get?format=xml&results_per_page=1'
      })
    }
  })
