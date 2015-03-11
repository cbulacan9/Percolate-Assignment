/*global Percolate, $*/


window.Percolate = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        var navbar = new Percolate.Views.Navbar({el: $('.header-container')});
        navbar.render();
    }
};

$(document).ready(function () {
    'use strict';
    Percolate.init();
});
