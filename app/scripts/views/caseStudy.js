/*global Percolate, Backbone, JST*/

Percolate.Views = Percolate.Views || {};

(function () {
    'use strict';

    Percolate.Views.CaseStudy = Backbone.View.extend({

        template: JST['app/scripts/templates/caseStudy.ejs'],

        tagName: 'div',

        id: 'case-study',

        className: 'case-study-container',

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
