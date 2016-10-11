angular.module('catsAndBeer')
    .controller('catCtrl', function($scope, catService, $window) {

        catService.getCats().then(function(response) {
            // Gets back promise and set cats
            $scope.cats = response.data;
            console.log(response.data)

            // Find URL's based on url tags and using REGEX
            $scope.cats = $scope.cats.match(/<url>.*<\/url>/ig);

            // For each URL in cats array,
            $scope.cats = $scope.cats.map(function(url) {
                // Get specific URL and closing < eg: https://cats.com/asdf<
                var newUrl = url.match(/http.*</ig);

                // seperate the closing < tag
                var evenNewerUrl = newUrl[0].split('').splice(0, newUrl[0].length - 1).join('');

                // Return finished String
                return evenNewerUrl;
            })
        })

        $scope.reloadRoute = function() {
            $window.location.reload();
        }

    })
