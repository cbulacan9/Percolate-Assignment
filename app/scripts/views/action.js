/*global Percolate, Backbone, JST*/

Percolate.Views = Percolate.Views || {};

(function () {
    'use strict';

    Percolate.Views.Action = Backbone.View.extend({

        template: JST['app/scripts/templates/action.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            // this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            // this.$el.html(this.template(this.model.toJSON()));
            this.$el.html(this.template());
            return this;
        }

    });

})();
