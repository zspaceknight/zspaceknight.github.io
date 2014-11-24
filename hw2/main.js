var app = angular.module('Hw2App', []);

app.controller('Hw2Controller', function($scope) {
  
  var self = this;
  
  self.timelineEvents = [
	{
		"title" : "High School",
		"description" : "Graduated from High School",
		"date" : (new Date(2002, 6, 1)).toJSON()
	},
	{
		"title" : "College",
		"description" : "Graduated from College",
		"date" : (new Date(2006, 5, 30)).toJSON()
	}  
  ];
  
});

