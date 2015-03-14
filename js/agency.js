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

angular.module('app', ['ngSanitize'])
    .run(function ($rootScope,$sce) {
        $rootScope.year=(new Date()).getUTCFullYear();
        $rootScope.portfolio = {};
        $rootScope.contribution = {};
        $rootScope.resUrl=function(url){
            return $sce.trustAsResourceUrl(url);
        }
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
    })
    .controller('contributionCtrl', function ($scope, $rootScope) {
        $scope.contributions = [
            {
                title: "cordova-send-menu",
                type: "images",
                images:['https://camo.githubusercontent.com/894fbfffc0f589e790dddcb011c28b4985e5f645/68747470733a2f2f7261772e6769746875622e636f6d2f686166697a62696c616c3131322f636f72646f76612d73656e642d6d656e752d616e64726f69642f6d61737465722f73637265656e73686f74732f6465766963652d312e706e67','https://camo.githubusercontent.com/e845b3d391d6be5d88060235f37e8d9ea5d27bbf/68747470733a2f2f7261772e6769746875622e636f6d2f686166697a62696c616c3131322f636f72646f76612d73656e642d6d656e752d616e64726f69642f6d61737465722f73637265656e73686f74732f6465766963652d322e706e67'],
                short_desc: "Plugin",
                desc: "org.cordova.sendmenu - The <strong>Send Menu</strong> plugin to receiving data from Other Apps via send menu",
                thumb: "img/contribution/menuPlugin-thumb.png",
                url:"https://github.com/hafizbilal112/cordova-send-menu-android"
            },
            {
                title: "ion-fab-button",short_desc: "Component",
                type: "embed",
                slug: "zxWJGd",
                frameUrl:"http://s.codepen.io/hafizbilal112/debug/zxWJGd",
                desc: "Android <a href='http://www.google.com/design/spec/components/buttons.html#buttons-floating-action-button'>floating action button</a> which reacts on scrolling events. Becomes visible when an attached target is scrolled up and invisible when scrolled down.",
                thumb: "img/contribution/fabButton-thumb.png",
                url: "https://github.com/hafizbilal112/ion-fab-button"
            }
        ];
        $scope.selectContribution=function(i){
            $rootScope.contribution=$scope.contributions[i];
        };
    });