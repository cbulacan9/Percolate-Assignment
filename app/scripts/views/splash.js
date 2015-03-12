/*global Percolate, Backbone, JST*/

Percolate.Views = Percolate.Views || {};

(function () {
    'use strict';

    Percolate.Views.Splash = Backbone.View.extend({

        template: JST['app/scripts/templates/splash.ejs'],

        tagName: 'div',

        id: 'splash',

        className: 'content-container',

        events: {},

        initialize: function () {
            // this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
