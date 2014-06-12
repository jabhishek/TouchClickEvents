console.log('\'Allo \'Allo!');

(function($, Modernizr) {
/*    var $log = $('.log');
    var $button = $('#click');
    var clickMessage = '<div>clicked!!</div>';
    var mouseupMessage = '<div>mouseup!!</div>';
    var mousedownMessage = '<div>mousedown!!</div>';
    console.log(Modernizr.touch);

    $button.on('click', function() {
        console.log('I am clicked!!');
        $log.html($log.html() + clickMessage);
    });

    $button.on('mouseup', function() {
        console.log('I am clicked!!');
        $log.html($log.html() + mouseupMessage);
    });

    $button.on('mousedown', function() {
        console.log('I am clicked!!');
        $log.html($log.html() + mousedownMessage);
    });
*/
     var promo = '#app-promo';

    $('.flightapps').on('click', function () {
        if ($(promo).position().top == -300) {
            $(this).addClass('appButtonSelected');
            $(promo).animate({
                top: 0
            });
        }

        if ($(promo).position().top == 0) {
            $(this).removeClass('appButtonSelected');
            $(promo).animate({
                top: -300
            });
        }
    });

    $(document).on('click', function (event) {
        if ($(promo).position().top == 0) {
            if (!$(event.target).parents('#app-promo').length) {
                $(promo).animate({
                    top: -300
                });
                $('.flightapps').removeClass('appButtonSelected');
            }
        }
    });


})(window.jQuery, window.Modernizr)