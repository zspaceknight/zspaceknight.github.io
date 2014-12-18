angular.module('angularjsTutorial')
.directive('ajstTodoList', function(){
	
	return{
		templateUrl: 'components/todo-list/todo-list.html',
		transclude : true,
		scope: {
			onGetTodos: '&',
			onRemoveTodo: '&',
			onSaveTodo: '&'
		},
		controller : ['$scope', '$element', '$attrs', '$transclude', '$log', 'TodoFireService',
					 function ($scope, $element, $attrs, $transclude, $log, TodoFireService){
						 
						 $scope.getTodos = function(){
							 return $scope.todos = TodoFireService.getTodos()
									.then(function(todos){
											$scope.todos = todos;
											$log.log('ajstTodoList calling $scope.onGetTodos()');
											$scope.onGetTodos(
												{
													todos: todos
												});
											return $scope.todos;
									});
						 };
						 
						 $scope.removeTodo = function(todo){
							$scope.onRemoveTodo;
							return TodoFireService.removeTodo(todo)
								   .then(function(todos){
									   $log.log('ajstTodoList calling $scope.onRemoveTodos()');
									   $scope.onRemoveTodo({
										todo:todo
										});
									}); 
						 };
						 
						 $scope.getTodoClasses = function(todo){
							 return {
								 'completed' : todo.completed
							 }
						 };
						 
						 $scope.saveTodo = function(todo){
							 onSaveTodo;
							 return TodoFireService.saveTodo(todo)
									.then(function(){
										$log.log('ajstTodoList calling $scope.onSaveTodos()');										
										$scope.onSaveTodo({todo:todo});
									});
						 }
						
						$scope.getTodos();
					 }
		]
	}
	
});