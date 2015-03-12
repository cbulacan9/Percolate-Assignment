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
        var highlight = new Percolate.Views.Highlight({el: $('.highlight-container')});
        highlight.render();
        var caseStudy = new Percolate.Views.CaseStudy({el: $('.case-study-container')});
        caseStudy.render();
        var quote = new Percolate.Views.Quote({el: $('.quote-container')});
        quote.render();
        var action = new Percolate.Views.Action({el: $('.action-container')});
        action.render();
    }
};

$(document).ready(function () {
    'use strict';
    Percolate.init();

    // var velcocity = 0.5;

    // function update(){ 
    //     var pos = $(window).scrollTop(); 
    //     $('.splash-frame').each(function() { 
    //         var $element = $(this);
    //         var height = $element.height()-18;
    //         $(this).css('backgroundPosition', '50% ' + Math.round((height - pos) * velocity) + 'px'); 
    //     }); 
    // };

    // $(window).bind('scroll', update);
});
