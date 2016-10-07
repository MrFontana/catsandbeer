// INITILIZE DIRECTIVE
// ============================================================
angular.module("catsAndBeer").directive('beerImgDir', function() {
  return {
    restrict: 'E',
    templateUrl: './beerImg/beerImg.html',
    controller: 'beerImgCtrl'
  };
});
