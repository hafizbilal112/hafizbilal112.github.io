/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

angular.module('app', [])
    .run(function ($rootScope) {
        $rootScope.year=(new Date()).getUTCFullYear();
        $rootScope.portfolio = {};
    })
    .controller('portfolioCtrl', function ($scope, $rootScope) {
        $scope.projects = [
            {title:"Nativelie",short_desc:"Mobile App",desc:"",thumb:"img/projects/nativelie/thumb.png",resPath:"img/projects/nativelie/",length:6},
            {title:"Meshmd",short_desc:"Mobile App",desc:"",thumb:"img/projects/meshmd/thumb.png",resPath:"img/projects/meshmd/",length:22},
            {title:"Feel Share",short_desc:"Web App",desc:"",thumb:"img/projects/feelshare/thumb.png",resPath:"img/projects/feelshare/",length:2}
        ];
        $scope.selectProject=function(i){
            $rootScope.portfolio=$scope.projects[i];
            $rootScope.portfolio.images=[];
            $rootScope.portfolio.images.length=$rootScope.portfolio.length;
            setTimeout(function(){
                $('.slider_block').scrollLeft(0);
            },200)
        };
    });