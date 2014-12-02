'use strict';

describe('controllers', function(){
	
	var scope;
	
	beforeEach(module('angularjsTutorial'));

	beforeEach(inject(function($rootScope){
		scope= $rootScope.$new();
	}));

	it('should have an array of todos',inject(function($controller){
		var ctrl = $controller('MainCtrl',{
			$scope: scope
		});
		expect(angular.isArray(ctrl.todos)).toBeTruthy();
	}));


	it('should be able to add todo',inject(function($controller){
		var ctrl = $controller('MainCtrl',{
			$scope: scope
		});
		
		ctrl.addTodo({
			'title' : 'test title'
		});
		
		expect(ctrl.todos.length ===1).toBeTruthy();
	}));
	
	it('should be able to add todo and return a reference to the newly created todo',inject(function($controller){
		var ctrl = $controller('MainCtrl',{
			$scope: scope
		});
		
		var newTodo = ctrl.addTodo({
			'title' : 'test title'
		});
		
		expect(newTodo).toBeDefined();
	}));
	
	
	it('should be able to remove a todo by reference',inject(function($controller){
		var ctrl = $controller('MainCtrl',{
			$scope: scope
		});
		
		var newTodo = ctrl.addTodo({
			'title' : 'test  title'
		});
		
		expect(ctrl.getTodos().length ===1).toBeTruthy();
		ctrl.removeTodo(newTodo);
		expect(ctrl.getTodos().length ===0).toBeTruthy();
	}));
	
});