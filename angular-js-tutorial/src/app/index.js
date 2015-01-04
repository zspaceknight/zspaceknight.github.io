'use strict';

angular.module('angularjsTutorial', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 
'firebase'])
  .constant('firebaseUrl', 'https://zangulartutorial.firebaseio.com/')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl as mainCtrl',
		resolve : {
			  'user' : ['AuthService', function(AuthService){
				  return AuthService.requireUser();
			  }]
		  }
      })
	  .state('login', {
		  url: '/login?redirect',
		  templateUrl: 'app/login/login.html',
		  controller: 'LoginCtrl as loginCtrl'
	  })
	  .state('contact', {
		  url: '/contact',
		  templateUrl: 'app/contact/contact.html',
		  controller: 'ContactCtrl as contactCtrl'
      });
	  

    $urlRouterProvider.otherwise('/');
  })
  .run(['$rootScope', '$log', '$state',
		function($rootScope, $log, $state) {
		
		$rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
		$log.log('$stateChangeError', event, toState, toParams, fromState, fromParams, error);

		if( error === 'AUTH_REQUIRED' ) {
			$log.log('$stateChangeError, redirecting to login', toState.name);
			$state.go('login', { redirect : toState.name });
			}
		});
	}
])
  
  .controller('GlobalCtrl', ['AuthService', '$log', '$state', function(AuthService, $log, $state){
	var self = this;
	
	AuthService.onAuth(function(user){
		$log.log('AuthService.onAuth', user);
		self.user = user;
	});

	$log.log('User is ', this.user);

	self.logout = function(){
		AuthService.logout().then(function(){
			$log.log('GlobalCtrl AuthService.logout');
			$state.go('home');
		});
	};

	self.globalObject = {
		message : 'Global'
	};
	}]
	)
  
  
;
