define([
  // Libraries.
  "jquery",
  "lodash",
  "backbone",
  "module",
  "owl",
  "later",
  "video",
  "marionette"
],

function($, _, Backbone, module , owl , later, video, Marionette) {
	
  var app = 
  {
  		root: "/",
  		
	    module: function () {
			var modules = {};
	
		    return function(name) {
	
		        if (modules[name]) {
		            return modules[name];
		        }
		        return modules[name] = { Views: { } };
		    };
		},
		
		BroadCaster : _.extend({} , Backbone.Events)
	};

	return app;

});

