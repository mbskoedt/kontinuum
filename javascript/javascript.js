var $poster = $('.poster'),
    $shine = $('.shine'),
    $layer = $('div[class*="layer-"]'),
    w = $(window).width(),
    h = $(window).height();

$(window).on('mousemove', function(e) {
    var offsetX = 0.5 - e.pageX / w,
        offsetY = 0.5 - e.pageY / h,
        dy = e.pageY - h / 2,
        dx = e.pageX - w / 2,
        theta = Math.atan2(dy, dx),
        angle = theta * 180 / Math.PI - 90,
        offsetPoster = $poster.data('offset'),
        transformPoster = 'translateY(' + -offsetX * offsetPoster + 'px) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)';

    if (angle < 0) {
        angle = angle + 360;
    }

    $shine.css('background', 'linear-gradient(' + angle + 'deg, rgba(255,255,255,0.2) 0%,rgba(255,255,255,0) 80%)');

    $poster.css('transform', transformPoster);

    $layer.each(function() {
        var $this = $(this),
            offsetLayer = $this.data('offset') || 0,
            transformLayer = 'translateX(' + offsetX * offsetLayer + 'px) translateY(' + offsetY * offsetLayer + 'px)';

        $this.css('transform', transformLayer);
    });

});
