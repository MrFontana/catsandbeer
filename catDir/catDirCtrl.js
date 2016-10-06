// INITILIZE CONTROLLER
// ============================================================
angular.module("catsAndBeer").controller("catDirCtrl", function($scope, catService) {

  // VARIABLES
  // ============================================================
  $scope.catMessage = "hey cat buddy"

  // FUNCTIONS
  // ============================================================
  $scope.getCat = function(){
    catService.getRandomCat().then(function(response) {
      console.log(response);
      $scope.cat = response.data;
    });
  }
  $scope.getCat();

});
