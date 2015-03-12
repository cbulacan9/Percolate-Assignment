/*global Percolate, Backbone, JST*/

Percolate.Views = Percolate.Views || {};

(function () {
    'use strict';

    Percolate.Views.Navbar = Backbone.View.extend({

        template: JST['app/scripts/templates/navbar.ejs'],

        tagName: 'div',

        id: 'navigation',

        className: 'header-container',

        events: {
            'click div.show-menu': 'showMenu'
        },

        showMenu: function(e) {
            $('div.navigation').toggle()
        },

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }
        
    });

})();
