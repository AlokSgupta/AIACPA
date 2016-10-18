(function () {
    'use strict';

angular.module('app', [
            'app.aboutus',
     		'app.sponser',
     		'app.events',
     		'ui.router',
        'ui.mask',
        'ui.bootstrap'
         ])
  .config(['$stateProvider','$urlRouterProvider','$httpProvider', '$compileProvider', '$locationProvider',
  	function($stateProvider,$urlRouterProvider,$httpProvider, $compileProvider, $locationProvider){
      $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache'
     
      $locationProvider.html5Mode(false)
 			$urlRouterProvider.otherwise('/')
                $stateProvider
                .state('welcome',{
                    url: '/',
                    templateUrl:'apps/partials/WelcomePartial.html',
                    onEnter: function() {
                      


                     }
                })
                 .state('portfolio',{
                    url: '/portfolio',
                    templateUrl:'apps/partials/portfolioPartial.html'
                })
                .state('contact',{
                    url: '/',
                    templateUrl:'apps/partials/contactPartial.html'
                })
                 .state('about',{
                    url: '/about',
                    templateUrl:'apps/Aboutus/aboutuspartial.html'
                })
                  .state('ID',{
                    url: '/ID',
                    templateUrl:'apps/Events/IDEventspartial.html'
                })
                   .state('AG',{
                    url: '/AG',
                    templateUrl:'apps/Events/AGEventspartial.html'
                })
                    .state('ES',{
                    abstract: true,
                    url: '/ES',
                    templateUrl:'apps/Events/ESEventspartial.html'
                    })
                     .state('OE', {
                         url: '/OE',
                         templateUrl: 'apps/Events/OEEventspartial.html'
                     })
                    .state('ES.MiniSeminar',{
                   
                    url: '/MView',
                    templateUrl:'apps/Events/MiniSeminar.html'
                })
                    .state('ES.View',{
                   
                    url: '/View',
                    templateUrl:'apps/Events/ESView.html'
                })
                    .state('ES.Registraion',{
                    
                    url: '/Registraion',
                    templateUrl:'apps/Registration/Registration.html'
                })



  	}

  	]);

})();
