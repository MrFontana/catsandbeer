angular.module('catsAndBeer', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('home', {
        url: '/',
        controller: 'homeCtrl',
        templateUrl: 'home/home.html'
      })
      .state('cat', {
        url: '/cat',
        controller: 'catCtrl',
        templateUrl: 'cat/cat.html'
      })
      .state('beer', {
        url: '/beer',
        controller: 'beerCtrl',
        templateUrl: 'beer/beer.html'
      })




  })
