/**
 * Tamjid Counter v1.1.0
 * Copyright 2017 shadatzepe
 * Licensed under  ()
 */
!function(t){"use strict";t.fn.tamjidCounter=function(n){var e=t.extend({},t.fn.tamjidCounter.defaults,n);return this.each(function(){var n=t(this);t(document).ready(function(){t.fn.tamjidCounterPerform(n,e)}),t(document).on("scroll",function(){t.fn.tamjidCounterPerform(n,e)})})},t.fn.tamjidCounterPerform=function(n,e){var o=n.offset(),r=t(window).height(),i=o.top<t(document).scrollTop()+r,a=o.top+n.height()>=t(document).scrollTop(),u=n.hasClass("tamjid-performed");i&&a&&!u&&(n.addClass("tamjid-performed"),setTimeout(function(){n.prop("Counter",0).animate({Counter:n.text()},{duration:e.duration,easing:e.easing,step:function(t){n.text(Math.ceil(t))}})},e.delay))},t.fn.tamjidCounter.defaults={duration:4e3,delay:0,easing:"swing"}}(jQuery);
