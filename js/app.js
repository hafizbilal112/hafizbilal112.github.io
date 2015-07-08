angular.module('app', ['ngSanitize', 'ui.router'])
    .directive('toggleMenu', function () {
        return {
            link: function ($scope, $element, $attr) {
                $element.bind('click', function () {
                    $('.navbar-toggle:visible').click();
                })
            }
        }
    })
    .directive('pageScroll', function () {
        return {
            link: function ($scope, $element, $attr) {
                $element.bind('click', function () {
                    var $anchor = $element;
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1500, 'easeInOutExpo');
                    event.preventDefault();
                })
            }
        }
    })
    .directive('scrollSpy', function () {
        return {
            link: function ($scope, $element, $attr) {
                $element.scrollspy({
                    target: '.navbar-fixed-top'
                });
            }
        }
    })
    .directive('headerShrink', function () {
        return {
            link: function ($scope, $element, $attr) {
                var docElem = document.documentElement,
                    header = document.querySelector('.navbar-default'),
                    didScroll = false,
                    changeHeaderOn = 300;

                function init() {
                    window.addEventListener('scroll', function (event) {
                        if (!didScroll) {
                            didScroll = true;
                            setTimeout(scrollPage, 250);
                        }
                    }, false);
                }

                function scrollPage() {
                    var sy = scrollY();
                    if (sy >= changeHeaderOn) {
                        classie.add(header, 'navbar-shrink');
                    }
                    else {
                        classie.remove(header, 'navbar-shrink');
                    }
                    didScroll = false;
                }

                function scrollY() {
                    return window.pageYOffset || docElem.scrollTop;
                }

                init();
            }
        }
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            })
            .state('home.project', {
                url: 'project/{id}',
                views: {
                    "project-view": {
                        templateUrl: 'templates/project.html',
                        controller: 'projectCtrl'
                    }
                }
            })
            .state('home.contribution', {
                url: 'contribution/{id}',
                views: {
                    "contribution-view": {
                        templateUrl: 'templates/contribution.html',
                        controller: 'contributionCtrl'
                    }
                }
            })
    })
    .
    service('mainService', function () {
        this.projects = [
            {
                title: "Nativelie",
                short_desc: "Mobile Application",
                desc: "A lingual app designed to help in improving Grammar & Pronunciation",
                thumb: "img/projects/nativelie/thumb.png",
                resPath: "img/projects/nativelie/",
                length: 6
            },
            {
                title: "Hepmd",
                short_desc: "Mobile Application",
                desc: "<p>App helps healthcare professionals manage their patients on the combination drug regimens associated with HCV treatment.</p>" +
                "<a href='https://hepmd.com/' target='_blank'>www.hepmd.com</a>",
                thumb: "img/projects/meshmd/thumb.png",
                resPath: "img/projects/meshmd/",
                length: 22
            },
            /*{
                title: "Feel Share",
                short_desc: "Web Application",
                desc: "",
                thumb: "img/projects/feelshare/thumb.png",
                resPath: "img/projects/feelshare/",
                length: 2
            },*/
            {
                title: "On Call central",
                short_desc: "Mobile Application",
                desc: "<p>Doctor's appointment Management Mobile App built with PhoneGap/AngularJS/Ionic/Parse.</p>" +
                "<a href='http://www.oncallcentral.com/' target='_blank'>www.oncallcentral.com</a>",
                thumb: "img/projects/oncallcentral/thumb.png",
                resPath: "img/projects/oncallcentral/",
                length: 10
            },
            {
                title: "CbToons",
                short_desc: "Mobile Application",
                desc: "<p>CBToons.com allows you to understand,analyze and shape both thoughts and feelings in order to make better decisions.</p>" +
                "<a href='http://www.cbtoons.com' target='_blank'>www.cbtoons.com</a>",
                thumb: "img/projects/cbtoons/thumb.png",
                resPath: "img/projects/cbtoons/",
                length: 13
            },
            {
                title: "Nobly",
                short_desc: "Mobile Application",
                desc: "<p>Nobly a platform for connecting people through good deeds using AngularJS, Ionic, Phonegap.</p>" +
                "<a href='http://www.nobly.com/' target='_blank'>www.nobly.com</a><br/>"+
                "<a href='https://play.google.com/store/apps/details?id=com.ionicframework.noblyapp270588' target='_blank'>Play Store</a>",
                thumb: "img/projects/nobly/thumb.png",
                resPath: "img/projects/nobly/",
                length: 10
            },
            {
                title: "Ghostmail",
                short_desc: "Mobile Application",
                desc: "<p>GhostMail App is new secure email & chat platform, with great features like self destruction, two factor login and much more...</p>" +
                "<a href='https://www.ghostmail.com/' target='_blank'>www.ghostmail.com</a>",
                thumb: "img/projects/ghostmail/thumb.png",
                resPath: "img/projects/ghostmail/",
                length: 12
            }
        ];
        this.contributions = [
            {
                title: "cordova-send-menu",
                type: "images",
                images: ['https://camo.githubusercontent.com/894fbfffc0f589e790dddcb011c28b4985e5f645/68747470733a2f2f7261772e6769746875622e636f6d2f686166697a62696c616c3131322f636f72646f76612d73656e642d6d656e752d616e64726f69642f6d61737465722f73637265656e73686f74732f6465766963652d312e706e67', 'https://camo.githubusercontent.com/e845b3d391d6be5d88060235f37e8d9ea5d27bbf/68747470733a2f2f7261772e6769746875622e636f6d2f686166697a62696c616c3131322f636f72646f76612d73656e642d6d656e752d616e64726f69642f6d61737465722f73637265656e73686f74732f6465766963652d322e706e67'],
                short_desc: "Plugin",
                desc: "org.cordova.sendmenu - The <strong>Send Menu</strong> plugin to receiving data from Other Apps via send menu",
                thumb: "img/contribution/menuPlugin-thumb.png",
                url: "https://github.com/hafizbilal112/cordova-send-menu-android"
            },
            {
                title: "ion-fab-button", short_desc: "Component",
                type: "embed",
                slug: "zxWJGd",
                frameUrl: "http://s.codepen.io/hafizbilal112/debug/zxWJGd",
                desc: "Android <a href='http://www.google.com/design/spec/components/buttons.html#buttons-floating-action-button'>floating action button</a> which reacts on scrolling events. Becomes visible when an attached target is scrolled up and invisible when scrolled down.",
                thumb: "img/contribution/fabButton-thumb.png",
                url: "https://github.com/hafizbilal112/ion-fab-button"
            }
        ];
    })
    .run(function ($rootScope, $sce, mainService) {
        $rootScope.year = (new Date()).getUTCFullYear();
        $rootScope.resUrl = function (url) {
            return $sce.trustAsResourceUrl(url);
        }
    })
    .controller('homeCtrl', function ($scope, $rootScope, mainService) {
        $scope.projects = mainService.projects;
        $scope.contributions = mainService.contributions;
    })
    .controller('projectCtrl', function ($scope, $rootScope, mainService, $stateParams, $element, $timeout, $state) {
        angular.element('body').addClass('modal-open');
        $timeout($element.addClass.bind($element, 'in'));
        $scope.close = function () {
            $element.removeClass('in');
            angular.element('body').removeClass('modal-open');
            $timeout(function () {
                $state.go('home')
            });
        };
        $scope.portfolio = mainService.projects[$stateParams.id - 1];
        $scope.portfolio.images = [];
        $scope.portfolio.images.length = $scope.portfolio.length;
        setTimeout(function () {
            $('.slider_block').scrollLeft(0);
        }, 200)
    })
    .controller('contributionCtrl', function ($scope, $rootScope, mainService, $stateParams, $element, $timeout, $state) {
        angular.element('body').addClass('modal-open');
        $timeout($element.addClass.bind($element, 'in'));
        $scope.close = function () {
            $element.removeClass('in');
            angular.element('body').removeClass('modal-open');
            $timeout(function () {
                $state.go('home')
            });
        };
        $scope.contribution = mainService.contributions[$stateParams.id - 1];
    });