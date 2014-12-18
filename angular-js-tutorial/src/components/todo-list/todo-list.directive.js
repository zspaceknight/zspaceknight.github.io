angular.module('angularjsTutorial')
.directive('ajstTodoList', function(){
	
	return{
		templateUrl: 'components/todo-list/todo-list.html',
		scope: {},
		controller : ['$scope', '$element', '$attrs', '$transclude', '$log', 'TodoFireService',
					 function ($scope, $element, $attrs, $transclude, $log, TodoFireService){
						 
						 $scope.getTodos = function(){
							 return $scope.todos = TodoFireService.getTodos()
									.then(function(todos){
											$scope.todos = todos;
											return $scope.todos;
									});
						 };
						 
						 $scope.removeTodo = function(todo){
							return TodoFireService.removeTodo(todo); 
						 };
						 
						 $scope.getTodoClasses = function(todo){
							 return {
								 'completed' : todo.completed
							 }
						 };
						 
						 $scope.saveTodo = function(todo){
							 return TodoFireService.saveTodo(todo);
						 }
						
						$scope.getTodos();
					 }
		]
	}
	
});