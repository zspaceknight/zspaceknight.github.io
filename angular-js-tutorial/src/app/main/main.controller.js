'use strict';

angular.module('angularjsTutorial')
  .controller('MainCtrl', ['$scope', 'TodoService', function ($scope, TodoService) {
	console.log('MainCtrl instantiated');
	var self = this;
	
	self.todos = TodoService.getTodos();
	self.newTodoTitle = '';
	
	self.getTodos = function(){
		  return self.todos = TodoService.getTodos();
	};	
	
	self.addTodo = function(todo){
		var newTodo = TodoService.addTodo(todo);
		self.newTodoTitle = '';
		return newTodo;
	};
	
	self.removeTodo = function(todo){
		TodoService.removeTodo(todo);
	};
	
	self.getTodoClasses = function(todo){
		 return{
			'completed': todo.completed
		 }
	};
	  
	$scope.$watch(function(){
		return self.todos;	
	}, function(newValue, oldValue){
		console.log('self.todos changed', newValue);
	}, true);
	
	$scope.$watch(function(){
		  return self.newTodoTitle;	
		  }, function(newValue, oldValue){
		  console.log('self.newTodoTitle changed', newValue);
	  });
	
  }]);
