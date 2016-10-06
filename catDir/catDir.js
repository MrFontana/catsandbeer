// INITILIZE DIRECTIVE
// ============================================================
angular.module("catsAndBeer").directive('catDir', function() {
  return {
    templateUrl: 'catDir/catDir.html',
    controller: 'catDirCtrl',
    scope: {
      randomCat: '&'
    }
  }
})
