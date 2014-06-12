console.log('\'Allo \'Allo!');

(function($, Modernizr) {
    var $log = $('.log');
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



})(window.jQuery, window.Modernizr)