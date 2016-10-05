angular.module('catsAndBeer')
  .service('catService', function($http){
    var baseUrl = 'https://thecatapi.com';

    this.getCats = function() {
      return $http({
        method: 'GET',
        url: baseUrl + '/api/images/get?results_per_page=6&format=xml&size=medium'
      })
    }
  })
