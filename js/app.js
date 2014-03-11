// JavaScript Document
// Define a new module. This time we declare a dependency on
// the ngResource module, so we can work with the Instagram API

var app = angular.module("movieApp", ['ngResource']);

// Create and register the new "instagram" service
app.factory('rotten_tomatoes', function($resource){

	return {
		fetchMovie: function(query, callback){
			var search_query = query;
			var api = $resource("http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=:key&q=:movie_title&page_limit=10&callback=JSON_CALLBACK",{
				movie_title:'superman',
				key:'7tbrsn6cqasdwjx96a4py2ft'
			},{
				// This creates an action which we've chosen to name "fetch". It issues
				// an JSONP request to the URL of the resource. JSONP requires that the
				// callback=JSON_CALLBACK part is added to the URL.
				fetch:{method:'JSONP'}
				
			});
		
			api.fetch({movie_title: search_query},function(response){
				console.log(response)
				// Call the supplied callback function
				callback(response);
			});
		}
		
	}
});

