
(function($) {

    "use strict";

    $.fn.tamjidCounter = function(options) {

        var opts = $.extend({}, $.fn.tamjidCounter.defaults, options);


        return this.each(function() {

            var $element = $(this);

            $(document).ready(function() {
                $.fn.tamjidCounterPerform($element, opts);
            });


            $(document).on('scroll', function() {
                $.fn.tamjidCounterPerform($element, opts);
            });

        });

    };

    $.fn.tamjidCounterPerform = function($element, options) {


        var offset = $element.offset();
        var screenHeight = $(window).height();
        var focus_form_top = offset.top <= $(document).scrollTop() + screenHeight;
        var focus_form_bottom = offset.top + $element.height() >= $(document).scrollTop();
        var already_countered = $element.hasClass('tamjid-counter-performed');

        if (focus_form_top && focus_form_bottom && !already_countered) {

            setTimeout(function() {
                $(options.selector).each(function() {

                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: options.duration,
                        easing: options.easing,
                        step: function(now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });

            }, options.delay);

            $element.addClass('tamjid-counter-performed');

        }

    };

    $.fn.tamjidCounter.defaults = {
        selector: ".counter",
        duration: 4000,
        delay: 0,
        easing: 'swing'
    };

})(jQuery);

