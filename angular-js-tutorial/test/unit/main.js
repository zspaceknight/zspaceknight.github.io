'use strict';

describe('controllers', function(){
  beforeEach(module('angularjsTutorial'));
  
  beforeEach(inject(function($rootScope){
  }));
  
  it('should define more than 5 awesome things', inject(function($controller) {
    var mainCtrl = $controller('MainCtrl', {});
	
    expect(angular.isArray(mainCtrl.awesomeThings)).toBeTruthy();
    expect(mainCtrl.awesomeThings.length > 5).toBeTruthy();
  }));
  
  it('should have exactly 9 things',inject(function($controller){
	var ctrl = $controller('MainCtrl',{});
	expect(ctrl.awesomeThings.length === 9).toBeTruthy();
  }));
	  
  it('should display items in expected position',inject(function($controller){
	  var ctrl = $controller('MainCtrl',{});
	  expect(ctrl.awesomeThings[0].key).toMatch('angular');
	  /*
	  'key': 'angular',
	  'title': 'AngularJS',
	  'url': 'https://angularjs.org/',
	  'description': 'HTML enhanced for web apps!',
	  'logo': 'angular.png'*/
	  
  }));
  
  it('should have all expected properties on each item',inject(function($controller){
	  var ctrl = $controller('MainCtrl',{});
	  var target = ctrl.awesomeThings[0];
	  
	  expect(target.key).toBeDefined();
	  expect(target.title).toBeDefined();
	  expect(target.url).toBeDefined();
	  expect(target.logo).toBeDefined();
	  expect(target.description).toBeDefined();	
	  
	  
  })); 
  
});