$(document).ready(function () {
    var min = 8;
    var max = 20;
    var reset = $('#texst').css('fontSize');
    var div = $('#texst');
    var size = str_replace(reset, 'px', '');
    var size_reset = size;

    $('#lessBtn').click(function () {
        if (size > min) {
            size = size - 2;
            div.css({'fontSize': size});
        }
        return false;
    });

    $('#moreBtn').click(function () {
        if (size < max) {
            size = (+size) + 2;
            div.css({'fontSize': size});
        }
        return false;
    });

    $('#resetBtn').click(function () {
        size = size_reset;
        div.css({'fontSize': reset});
    });

});

function str_replace(fontS, Px, replacement) {
    var temp = fontS.split(Px);
    return temp.join(replacement);
}