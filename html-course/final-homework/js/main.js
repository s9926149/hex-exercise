// lightbox settings
lightbox.option({
    positionFromTop: 200,
});

$(function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        
        pagination: {
            el: '.swiper-pagination',
        },

        autoplay: {
            delay: 3000,
        },
    });
});
