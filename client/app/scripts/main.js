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
    var documentEventTrigger = Modernizr.touch ? "touchstart" : "click"
    
    $promo.addClass('collapsed');

    function AddMessageToLog(message, className) {
        className = className ? className : ""
        var messageTag = '<div class="message ' + 
            className + '">' + message + '</div>';
        $log.html($log.html() + messageTag);
    }

    function expandPanel() {
        AddMessageToLog('Expanding!!', "red");
        $promo.removeClass('collapsed').promise().done(function() {
            $trigger.addClass('appButtonSelected');
            $promo.animate({
                top: 0
            });    
        });
    }

    function collapsePanel() {

        AddMessageToLog('Collapsing!!', "red");
        $promo.addClass('collapsed').promise().done(function() {
            $trigger.removeClass('appButtonSelected');
            $promo.animate({
                top: -300
            });            
        })

    }

    function isPanelExpanded() {
        return !$promo.hasClass('collapsed');
    }

    function isPanelCollapsed() {
        return $promo.hasClass('collapsed');
    }    


    if (!Modernizr.touch) {
        $trigger.on('click', function () {
            AddMessageToLog('Clicked!!', 'blue');
            if (isPanelCollapsed()) {
                expandPanel();
            } else {
                collapsePanel();
            }
        });
    }
    if (Modernizr.touch) {
        var touchCount = 0;
        var startY, lastY;
        $trigger.on('touchstart', function(e) {
            e.preventDefault(); 
            startY = e.originalEvent.changedTouches[0].pageY;
            if (isPanelCollapsed()) {
                if (touchCount === 0) {
                    AddMessageToLog('Selecting!!', "red");
                    $trigger.addClass('appButtonSelected');
                    touchCount = 1;
                } else {
                    if (touchCount > 0) {
                        AddMessageToLog('Expanding on touch!!', "red");
                        expandPanel();
                        touchCount = 0;
                    }
                }
            } else {
                AddMessageToLog('Collapse on touch!!', "red");
                collapsePanel();
            }
            AddMessageToLog('touch start!!', "blue");
            AddMessageToLog("Touch Start Y: " + e.originalEvent.changedTouches[0].pageY, "green")

        })

        $trigger.on('touchmove', function(e) {
            // check if moving down or up
            lastY = startY;
            e.preventDefault();
            AddMessageToLog('touch move!!', "blue");
            var currentY = e.originalEvent.touches ? e.originalEvent.touches[0].pageY : e.pageY;
            AddMessageToLog("Current Y: " + currentY + ", lastY: " + lastY, "green");
            if (currentY > lastY) {
                if (isPanelCollapsed()) {
                    AddMessageToLog('Expanding on move!!', "red");
                    expandPanel();    
                }
            } else if (currentY < lastY){
                if (isPanelExpanded()) {
                    AddMessageToLog('Collapse on move!!', "red");
                    collapsePanel();
                }
            }
            lastY = currentY;
            //AddMessageToLog("Current Y: " + currentY + ", lastY: " + lastY, "green");
        })

        $trigger.on('touchend', function(e) {
            e.preventDefault();
            AddMessageToLog('touch end!!', "blue");
      //      AddMessageToLog("Touch End Y: " + e.originalEvent.changedTouches[0].pageY, "blue")
        })
    }

    
    $(document).on(documentEventTrigger, function (event) {
        var target = event.target;
        //AddMessageToLog(documentEventTrigger);
        if (event.target != $trigger.get(0)) {
            if (isPanelExpanded()) {
                if (!$(event.target).parents('#app-promo').length) {
                    collapsePanel();
                }
            }
        }
    });

    $('#clearLog').on('click', function() {
        $log.empty();
    })


})(window.jQuery, window.Modernizr)