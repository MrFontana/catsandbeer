// INITILIZE CONTROLLER
// ============================================================
angular.module("catsAndBeer").controller("catDirCtrl", function($scope, $window, catService) {

  // VARIABLES
  // ============================================================

  // FUNCTIONS
  // ============================================================
  $scope.getCat = function(){
    catService.getRandomCat().then(function(response) {
      console.log(response);
      $scope.cat = response.data;

      // Find URL's based on url tags and using REGEX
      $scope.cat = $scope.cat.match(/<url>.*<\/url>/ig);

      // For each URL in cats array,
      $scope.cat = $scope.cat.map(function(url) {
        // Get specific URL and closing < eg: https://cats.com/asdf<
        var newUrl = url.match(/http.*</ig);

        // seperate the closing < tag
        var evenNewerUrl = newUrl[0].split('').splice(0, newUrl[0].length-1).join('');

        // Return finished String
        return evenNewerUrl;
      })[0];
    });
  }
  $scope.getCat();

});
