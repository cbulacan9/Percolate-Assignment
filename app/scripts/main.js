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
        var splash = new Percolate.Views.Splash({el: $('.splash-container')});
        splash.render();
    }
};

$(document).ready(function () {
    'use strict';
    Percolate.init();
});
