define([
    // Application.
    "app"
],
        function (app ) {

            // Create a new module.
            var template1Child = app.module("template1Child");

            // Default model.
            template1Child.Model = Backbone.Model.extend({});

            template1Child.Collection = Backbone.Collection.extend({
                model: template1Child.Model
            });

            template1Child.View = Marionette.ItemView.extend({
                template: _.template($("#template1Child").html()),
                className: $("#template1Child").attr('class'),
                initialize: function ()
                {

                },
                render: function ()
                {
                    // console.log(JSON.stringify(data));

                    this.$el.html("");
                    this.$el.html(this.template(this.model.toJSON()));
                    
                    return this;
                },
                events:
                {
                }

            });

            return template1Child;

        });

