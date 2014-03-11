// JavaScript Document

app.controller("movieController", function($scope, rotten_tomatoes){
	$scope.title='';
	
	$scope.search = function() {
		var query = $scope.title;
		rotten_tomatoes.fetchMovie(query, function(data){
			var result = data.movies
			$scope.result = result;
			console.log(data);
		});

	};
});