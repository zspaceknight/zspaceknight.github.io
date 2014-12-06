'use strict';

describe('TodoService', function(){
  var TodoService,
	  $timeout;
  
  beforeEach(module('angularjsTutorial'));

  beforeEach(inject(function (_TodoService_, _$timeout_) {
    TodoService = _TodoService_;
	$timeout = _$timeout_;
  }));

	describe('#getTodos', function(){
		it('should return an array', function(done) {
			TodoService.getTodos()
			.then(function(todos){
				expect(angular.isArray(todos)).toBeTruthy();
				console.log('in getTodos handler');
			})
			.finally(function(){
				console.log('in the finally block');
				done();
			});
			$timeout.flush();
		});
	});


    describe('#addTodo', function(){
		it('should be able to add a todo and return the newly created todo', function(done) {
			TodoService.addTodo({
				title : 'test title 1'
			})
			.then(function(newTodo){
				console.log('then #1');
				expect(newTodo).toBeDefined();
				console.log('got to addTodo handler');
			})
			.then(function(){
				console.log('then #2');
				return TodoService.getTodos();
			})
			.then(function(todos){
				console.log('then #3');
				console.log('got to getTodos handler');
				expect(todos.length === 1).toBeTruthy();
			})
			.finally(function(){
				console.log('finally');
				done();
			});
			$timeout.flush();
			$timeout.flush();
		});
	});

  describe('#removeTodoById', function(){
    iit('should be able to remove a todo by reference', function(done) {
	
		var title = 'test title 3'
		
		TodoService.addTodo({
			title : title
		})
		.then(function(){
			console.log('then #1');
			return TodoService.getTodos();
		})
		.then(function(todos){
			console.log('then #2');
			console.log('got to getTodos handler');
			expect(todos.length === 1).toBeTruthy();
		}).then(function(){
			return TodoService.removeTodoById(todoToAdd.id)
			console.log('then #3');
		}).then(function(){
			return TodoService.getTodos();
		}).then(function(todos)
		{
			expect(todos.length === 0).toBeTruthy();
		})
		.finally(function(){
			console.log('finally');
			done();
		});
		$timeout.flush();
		$timeout.flush();
		$timeout.flush();
		$timeout.flush();
    });
  });

});