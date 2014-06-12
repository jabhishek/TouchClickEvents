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
    AddMessageToLog(Modernizr.touch ? "touch enabled!!" : "touch not enabled!!");
    var isTouchEnabled = Modernizr.touch;
    var promo = '#app-promo';
    var $promo = $(promo);
    var $trigger = $('.flightapps');

    function AddMessageToLog(message) {
        var messageTag = '<div>' + message + '</div>';
        $log.html($log.html() + messageTag);
    }

    function expandPanel() {
        AddMessageToLog('Expanding!!');
        $trigger.addClass('appButtonSelected');
        $promo.animate({
            top: 0
        });
    }

    function collapsePanel() {
        AddMessageToLog('Collapsing!!');
        $trigger.removeClass('appButtonSelected');
        $promo.animate({
            top: -300
        });
    }
    if (!Modernizr.touch) {
        $trigger.on('click', function () {
            AddMessageToLog('Clicked!!');
            if ($promo.position().top == -300) {
                expandPanel();
            }

            if ($promo.position().top == 0) {
                collapsePanel();
            }
        });
    }
    if (Modernizr.touch) {
        $trigger.on('touchstart', function() {
            AddMessageToLog('touch start!!');
        })

        $trigger.on('touchmove', function(e) {
            console.log(e);
            expandPanel();
            AddMessageToLog('touch move!!');
        })

        $trigger.on('touchend', function() {
            AddMessageToLog('touch end!!');
        })
    }

    var documentEventTrigger = Modernizr.touch ? "touchstart" : "click"
    $(document).on(documentEventTrigger, function (event) {
        var target = event.target;
        AddMessageToLog(documentEventTrigger);
        if (event.target != $trigger.get(0)) {
            if ($promo.position().top == 0) {
                console.log($(event.target));
                if (!$(event.target).parents('#app-promo').length) {
                    collapsePanel();
                    $trigger.removeClass('appButtonSelected');
                }
            }
        }
    });

    $('#clearLog').on('click', function() {
        $log.empty();
    })


})(window.jQuery, window.Modernizr)