console.log('\'Allo \'Allo!');

(function($, Modernizr) {
    var $log = $('.log');
    var clickMessage = '<div>clicked!!</div>';
    var touchMessage = '<div>touched on mobile device!!</div>';
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
    AddMessageToLog(Modernizr.touch);

    var promo = '#app-promo';
    var $promo = $(promo);
    var $trigger = $('.flightapps');

    function AddMessageToLog(message) {
        var messageTag = '<div>' + message + '</div>';
        $log.html($log.html() + messageTag);
    }
    $trigger.on('click', function () {
        AddMessageToLog('Clicked!!');
        if ($promo.position().top == -300) {
            AddMessageToLog('Expanding!!');
            $(this).addClass('appButtonSelected');
            $promo.animate({
                top: 0
            });
        }

        if ($promo.position().top == 0) {
            AddMessageToLog('Collapsing!!');
            $(this).removeClass('appButtonSelected');
            $promo.animate({
                top: -300
            });
        }
    });

    $(document).on('click', function (event) {
        var target = event.target;
        console.log(event.target);
        console.log($trigger.get(0))
        if (event.target != $trigger.get(0)) {
            if ($promo.position().top == 0) {
                console.log($(event.target));
                AddMessageToLog('Collapsing!!');
                if (!$(event.target).parents('#app-promo').length) {
                    $promo.animate({
                        top: -300
                    });
                    $trigger.removeClass('appButtonSelected');
                }
            }
        }
    });


})(window.jQuery, window.Modernizr)