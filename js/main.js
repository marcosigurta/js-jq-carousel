$(document).ready(function () {
    $('.next').click(nextImg);
    $('.prev').click(previousImg);
});

function nextImg() {
    var image = $('img.active');
    var icon = $('i.active');

    image.removeClass('active');
    icon.removeClass('active');

    if (image.hasClass('last')) {
        $('img.first').addClass('active');
        $('i.first').addClass('active');
    } else {
        image.next().addClass('active');
        icon.next().addClass('active');
    }
}

function previousImg() {
    var image = $('img.active');
    var icon = $('i.active');

    image.removeClass('active');
    icon.removeClass('active');

    if (image.hasClass('first')) {
        $('img.last').addClass('active');
        $('i.last').addClass('active');
    } else {
        image.prev().addClass('active');
        icon.prev().addClass('active');
    }
}

