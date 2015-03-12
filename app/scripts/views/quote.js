/*global Percolate, Backbone, JST*/

Percolate.Views = Percolate.Views || {};

(function () {
    'use strict';

    Percolate.Views.Quote = Backbone.View.extend({

        template: JST['app/scripts/templates/quote.ejs'],

        tagName: 'div',

        className: 'quote-container',

        events: {},

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
