define([
  // Application.
  "app"
],


function(app) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      // Get access to arguments.
      "fakeRoute": "index"
    },
    
    index: function(){
        console.log("fakeRoute");
    	app.BroadCaster.trigger("ForceRefresh");
    }
    
  });


  return Router;

});
