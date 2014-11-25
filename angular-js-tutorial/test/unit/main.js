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
	
	
	it('should be able to remove a todo',inject(function($controller){
		var ctrl = $controller('MainCtrl',{
			$scope: scope
		});
		
		var title = 'test title';
		ctrl.addTodo({
			'title' : title
		});
		
		expect(ctrl.todos.length ===1).toBeTruthy();
		ctrl.removeTodo(title);
		expect(ctrl.todos.length ===0).toBeTruthy();
	}));
	
	it('should be able to remove a todo by reference',inject(function($controller){
		var ctrl = $controller('MainCtrl',{
			$scope: scope
		});
		
		var newTodo = ctrl.addTodo({
			'title' : 'test  title'
		});
		
		expect(ctrl.todos.length ===1).toBeTruthy();
		ctrl.removeTodoByReference(newTodo);
		expect(ctrl.todos.length ===0).toBeTruthy();
	}));
	
	
	it('it should create "title" and "completed" properties',inject(function($controller){
		var ctrl = $controller('MainCtrl',{
			$scope: scope
		});
		
		var title =  'test title';
		ctrl.addTodo({
			'title' : title
		});
		
		expect(ctrl.todos[0].title).toBeDefined();
		expect(ctrl.todos[0].completed).toBeDefined();
		expect(ctrl.todos[0].completed).toBe(false);
	}));
	
});