//Sticky menu

var sticky = document.querySelector('.nav__menu');
var origOffsetY = sticky.offsetTop;

function onScroll(e) {
    window.scrollY >= origOffsetY ? sticky.classList.add('fixed') :
        sticky.classList.remove('fixed');
}
document.addEventListener('scroll', onScroll);

// Scroll active

$(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();

    $('section').each(function (i) {
        if ($(this).position().top - 51 <= scrollDistance) {
            $('a[href*="#"]:not([href="#"]).active').removeClass('active');
            $('a').eq(i).addClass('active');
        }
    });

}).scroll();

//Scroll to anchor

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 99
                }, 500);
                return false;
            }
        }
    });
});