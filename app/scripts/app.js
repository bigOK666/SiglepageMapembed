'use strict';
/*golbal Google*/
angular.module('generateApp', [ui-router])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
                    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    },
                    'content': {
                        templateUrl : 'views/generate.html',
                        controller  : 'inputController'
                    }
                    
                }
            })
                    // route for the aboutus page
            .state('app.feedback', {
                url:'feedback',
                views: {
                    'content@': {
                        templateUrl: 'views/feedback.html'
                   }
                }
            });
            $urlRouterProvider.otherwise('/');
    })
;

    