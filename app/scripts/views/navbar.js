/*global Percolate, Backbone, JST*/

Percolate.Views = Percolate.Views || {};

(function () {
    'use strict';

    Percolate.Views.Navbar = Backbone.View.extend({

        template: JST['app/scripts/templates/navbar.ejs'],

        tagName: 'div',

        id: 'navigation',

        className: 'header-container',

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
