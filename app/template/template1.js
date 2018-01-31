define([
    // Application.
    "app",
    "../data/template1Data",
    "../template/template1Child"

],
        function (app , data , template1Child) {

            // Create a new module.
            var template1 = app.module("template1");

            // Default model.
            template1.Model = Backbone.Model.extend({});

            template1.Collection = Backbone.Collection.extend({
                model: template1.Model
            });

            template1.View = Marionette.ItemView.extend({
                template: _.template($("#template1").html()),
                className: $("#template1").attr('class'),
                initialize: function ()
                {

                },
                render: function ()
                {
                    // console.log(JSON.stringify(data));

                    var modelData = new template1.Model(data);

                    console.log(JSON.stringify(modelData));

                    this.$el.html("");
                    this.$el.html(this.template(modelData.get("label")));

                    var templ1ChildModel = new template1Child.Model(modelData.get("template1Child"));
                    var templ1Child = new template1Child.View({model : templ1ChildModel});

                     this.$el.find("#rightcontainer").html(templ1Child.render().el);
                    
                    return this;
                },
                events:
                {
                }

            });

            return template1;

        });

