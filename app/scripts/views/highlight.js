/*global Percolate, Backbone, JST*/

Percolate.Views = Percolate.Views || {};

(function () {
    'use strict';

    Percolate.Views.Highlight = Backbone.View.extend({

        template: JST['app/scripts/templates/highlight.ejs'],

        tagName: 'section',

        className: 'highlight-container',

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
