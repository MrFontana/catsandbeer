// INITILIZE DIRECTIVE
// ============================================================
angular.module("catsAndBeer").directive('catDir', function() {
  return {
    restrict: 'EA',
    templateUrl: 'catDir/catDir.html',
    controller: 'catDirCtrl'
  };
});
