angular.module("catsAndBeer")
    .controller("beerImgCtrl", function($scope) {
        $scope.beerImg = function randomize() {

var urlArr =
['http://philly.thedrinknation.com/uploads/images/beercats/beer-cat-9.jpg','https://s-media-cache-ak0.pinimg.com/originals/3e/fc/2b/3efc2b076c8b33a667d45ff4c547e3d0.jpg','http://3.bp.blogspot.com/-aY3IwsCXztM/VVM_W45eitI/AAAAAAAADl0/gIod1A4MPiY/s640/08-Cats-Who-LOVE-Beer-The-Sopranos.jpg','http://philly.thedrinknation.com/uploads/images/beercats/beer-cat-6.jpg','https://pbs.twimg.com/profile_images/716090086278832128/1AOxmnmR.jpg','http://66.media.tumblr.com/b8eda1e149fcc86729f3603b4ba40a77/tumblr_nvrc8vodlq1ur7mdeo7_500.jpg','http://www.sloshspot.com/wp-content/uploads/2014/01/12-Cats-Who-LOVE-Beer-Magic-Mike.jpg','http://1funny.com/wp-content/uploads/2011/06/beer-can-cat.jpg','http://uploads.neatorama.com/images/posts/179/66/66179/1382078143-0.jpg','http://philly.thedrinknation.com/uploads/images/beercats/beer-cat-5.jpg','http://philly.thedrinknation.com/uploads/images/beercats/beer-cat-1.jpg','http://i.imgur.com/098jfDS.jpg','https://s-media-cache-ak0.pinimg.com/736x/28/e3/f5/28e3f5d3dcf8ca17c5a04c115e38c65e.jpg','https://s-media-cache-ak0.pinimg.com/236x/f7/1a/56/f71a564854be44dd63d656f7599d9808.jpg','http://www.catster.com/wp-content/uploads/2015/03/Cat-with-Beer.jpg','http://uploads.neatorama.com/images/posts/251/85/85251/1444052383-0.jpg','http://25.media.tumblr.com/45284d2e39130979cf75a1098459c7f2/tumblr_n32ajjbvSs1qh66wqo1_1280.jpg','http://2.bp.blogspot.com/_gfXupHOEhH0/S5V6E2djA7I/AAAAAAAAPFI/30hk47rVa-k/s640/beer-cat-9.png','http://orig13.deviantart.net/a85f/f/2015/085/a/6/beautiful_beer_cat_cute_heineken_kitten_favim_com__by_saulemori-d8n8y2m.jpg','http://cdn.acidcow.com/pics/20100311/cats_beer_01.jpg','http://www.sloshspot.com/wp-content/uploads/2014/01/18-Cats-Who-LOVE-Beer-Beer-Belly.jpg','http://www.sloshspot.com/wp-content/uploads/2014/01/19-Cats-Who-LOVE-Beer-All-Mine.jpg','http://66.media.tumblr.com/2cf5325f67a5882c978c18741c3b5885/tumblr_muxxdw8TZe1qhwmnpo1_500.jpg'];

  var randomCat = urlArr[Math.floor(urlArr.length * Math.random())];
  console.log(randomCat);
    return randomCat;
  }()
          })
