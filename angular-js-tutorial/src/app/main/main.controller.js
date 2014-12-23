'use strict';

angular.module('angularjsTutorial')
.controller('MainCtrl', ['$scope', '$log', '$q', 'TodoFireService',
  function ($scope, $log, $q, TodoFireService) {
    $log.log('MainCtrl instantiated');

    var self = this;

    self.newTodoTitle = '';

    self.addTodo = function(options){
      var newTodo;

	  console.log("main ctrl options", options);
      return TodoFireService.addTodo(options)
      .then(function(newTodoResult){
        newTodo = newTodoResult;
        self.newTodoTitle = '';
      },
      function(err){
        $log.log(err);
      });
    };

    self.onGetTodos = function(syncedTodos){
      self.todos = syncedTodos;
      $log.log('MainCtrl.onGetTodos called', syncedTodos);
    };

    self.onRemoveTodo = function(todo){
      $log.log('MainCtrl.onRemoveTodo called', todo);
    };

    self.onSaveTodo = function(todo){
      $log.log('MainCtrl.onSaveTodo called', todo);
    };

  }
]);