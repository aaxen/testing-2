// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // JavaScript folders.
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",
    clock:"../assets/js/libs/jqClock",
    marquee: "../assets/js/libs/jqMarquee",


    // Libraries.
    jquery: "../assets/js/libs/jquery.min",
    lodash: "../assets/js/libs/lodash.min",
    ldsh : "../assets/js/libs/loader",
    underscore	: "../assets/js/libs/underscore.min",
    backbone: "../assets/js/libs/backbone.min",
    owl: "../assets/js/libs/owl.carousel.min",
    later : "../assets/js/libs/later.min",
    video : "../assets/js/libs/video",
    marionette: "../assets/js/libs/backbone.marionette.min",
    "backbone.wreqr": "../assets/js/libs/backbone.wreqr.min",
    "backbone.babysitter": "../assets/js/libs/backbone.babysitter.min",
      "jquery-ui": "../assets/js/libs/jquery-ui.min",
      "jquery-timer": "../assets/js/libs/jquery.timer"
  },

  shim: {
    "jquery-ui" : {
        deps: ["jquery"],
        exports: "$"
    },
    "jquery-timer" : {
        deps: ["jquery"],
        exports: "$"
    },
    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },
    underscore:{
        exports: "_"
    },
    marionette: {
      deps: ["backbone"],
      exports: "Marionette"
    },
    owl: { deps: ['jquery'] },
    video:{
      deps:["jquery"]
    }
  }

});