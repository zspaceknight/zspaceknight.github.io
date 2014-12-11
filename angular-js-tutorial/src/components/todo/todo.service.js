'use strict';

angular.module('angularjsTutorial')
	.constant('firebaseUrl', 'https://zangulartutorial.firebaseio.com/');

angular.module('angularjsTutorial')
  .factory('TodoService', ['$window', '$log', '$q', '$timeout','$http', 'firebaseUrl', 
			function ($window, $log, $q, $timeout, $http, firebaseUrl) {

    $log.log('TodoService instantiated');

    var todos;
 
    return {
      getTodos : function(){
			
			var deferred = $q.defer();  
			$http.get(firebaseUrl + 'todos.json')
			.success(function(data, status){
				$log.log('TodoService.getTodos success', data);
				
				todos = Object.keys(data).map(function(key){
					var todo = data[key];
					todo.$id = key;
					return todo;
				});
				
				deferred.resolve(todos);
			})
			.error(function(data, status){
				$log.log('TodoService.getTodos error', data);
				deferred.reject(data);
			});
			  
			  
			  return deferred.promise;
	},
  
	addTodo : function(options){
			var deferred = $q.defer();
			
			var newTodo = angular.copy(options);
			
			$http.post(firebaseUrl + 'todos.json', newTodo)
			.success(function(data, status){
				$log.log('TodoService.addTodo success', data);
				
				newTodo.$id = data.name;
				
				todos.push(newTodo);
				
				deferred.resolve(newTodo);
			})
			.error(function(data, status){
				$log.log('TodoService.addTodo error', data);
				deferred.reject(data);
			});
			
			return deferred.promise;		
	},

	removeTodo : function(todo){
			var deferred = $q.defer();
			
			$http.delete(firebaseUrl + 'todos/' + todo.$id + '.json')
			.success(function(data, status){
				$log.log('TodoService.removeTodo success', data);
				todos.splice(todos.indexOf(todo), 1);
				deferred.resolve();
			})
			.error(function(data, status){
				$log.log('TodoService.removeTodo success', data);
				deferred.reject(data);
			});
			
			return deferred.promise;
		},

		saveTodo : function(todo){
			
			var deferred = $q.defer();
			
			// PUT to save/replace data at the specified path. It's an overwrite operation.
			// https://www.firebase.com/docs/rest/guide/saving-data.html#section-put
			
			// For Firebase, invalid to send the $id property, so create a new, cleaned up object to send
			var todoToPut = {
				title : todo.title,
				completed : todo.completed
			};
			
			$http.put(firebaseUrl + '/' + todo.$id + '.json', todoToPut)
			.success(function(data, status){
				// success response is the data Firebase saved
				$log.log('saveTodo success', data);
				deferred.resolve(todo);
			})
			.error(function(data, status){
				$log.log('saveTodo error', data);
				deferred.reject(data);
			});
			
			return deferred.promise;
			
			
		}
    };
  }]);