define([
  // Application.
  	"app",
  	"modules/template1"
	
],

function( App , template1)  {

	
	// Create a new module.
	var Shell = App.module("Shell");
	var currentInitTrxType = "";
	   // Default model.
  	Shell.Model = Backbone.Model.extend({});
  	
  	Shell.Collection = Backbone.Collection.extend({
	  model: Shell.Model
	});
	
	var shellDataColl = new Shell.Collection(ShellData);

	Shell.View = Marionette.LayoutView.extend({
	  	template: _.template( $("#shell").html() ),
	  	className : $("#shell").attr('class'),
	  
	  	initialize: function()
	  	{
			// App.BroadCaster.on("initTrx" , this.initTrx , this);
		},
	  
		render: function(){		
		 	// this.$el.html(this.template(this.model.toJSON()));
		  	this.$el.html(this.template());
			
			var template1 = new template1.View();
			this.$("#template1").html(template1.render().el);
			

		   	return this;
		},
		
		events: {
			"click" : "ShellClick"
		},
		
		ShellClick : function()
		{
			// App.BroadCaster.trigger("KeepTimerAlive");
		}
		
	});

	return Shell;

});

