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
      .state('randomCat', {
        url: '/randomCat',
        controller: 'catDirCtrl',
        templateUrl: 'catDir/catDir.html'
      })
      .state('beer', {
        url: '/beer',
        controller: 'beerCtrl',
        templateUrl: 'beer/beer.html'
      })
      .state('randomBeer', {
        url: '/randomBeer',
        controller: 'beerDirCtrl',
        templateUrl: 'beerDir/beerDir.html'
      })



  })
