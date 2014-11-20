'use strict';

angular.module('angularjsTutorial')
  .controller('MainCtrl', function () {

	var self = this;
	self.todos = [];
	
	self.addTodo = function(todo){
		self.todos.push({
			'title' : todo.title,
			'completed' : (todo.completed) ? todo.completed : false
		});
	};
	
	self.removeTodo = function(title){
		self.todos = self.todos.filter(function(item){
			return item.title !== title;
		});
	};
	
  });
