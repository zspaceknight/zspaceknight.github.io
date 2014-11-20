'use strict';

angular.module('angularjsTutorial')
  .controller('MainCtrl', function ($scope) {

	var self = this;
	self.todos = [];
	
	self.newTodoTitle = '';
	
	self.addTodo = function(todo){
		self.todos.push({
			'title' : todo.title,
			'completed' : (todo.completed) ? todo.completed : false
		});
		self.newTodoTitle = '';
	};
	
	self.removeTodo = function(title){
		self.todos = self.todos.filter(function(item){
			return item.title !== title;
		});
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
	
  });
