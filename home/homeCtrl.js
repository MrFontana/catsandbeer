angular.module('catsAndBeer')
    .controller('homeCtrl', function($scope) {
        // do more reading on .animate, srollTop, and .offset().top and href in use with anchors

        $(function() {
            $('#anchor1').click(function() {
                $('html, body').animate({
                    scrollTop: $('#part-two').offset().top
                }, 1000);
                return false;
            });
        });
        $(function() {
            $('#anchor2').click(function() {
                $('html, body').animate({
                    scrollTop: $('#part-three').offset().top
                }, 1000);
                return false;
            });
        });
        $(function() {
            $('#anchor3').click(function() {
                $('html, body').animate({
                    scrollTop: $('#part-one').offset().top
                }, 200);
                return false;
            })
        })
    });
