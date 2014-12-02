'use strict';

describe('TodoService', function(){
	
	var TodoService;
	
	beforeEach(module('angularjsTutorial'));
	
	beforeEach(inject(function (_TodoService_) {
		TodoService = _TodoService_;
	}));
	
	describe('#getTodos', function(){
		it('should have an array of',function(){
			expect(angular.isArray(TodoService.getTodos())).toBeTruthy();
		});
	});
	
	describe('#addTodo', function(){
		it('should be able to add todo and return the reference',function(){
			var newTodo = TodoService.addTodo({
				'title' : 'test title'
			});
			
			expect(TodoService.getTodos().length ===1).toBeTruthy();
			expect(newTodo).toBeDefined();
		});
	});
	
	describe('#removeTodo', function(){
	
		it('should be able to remove a todo by reference',function(){
			
			var title = 'test title';
			var newTodo = TodoService.addTodo({
				'title' : 'test title'
			});
			
			expect(TodoService.getTodos().length ===1).toBeTruthy();
			TodoService.removeTodo(newTodo);
			expect(TodoService.getTodos().length ===0).toBeTruthy();
		});
	
	});
});