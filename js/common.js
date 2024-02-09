/* 캐러셀 */
$(document).ready(function () {
    $('.audio_list').bxSlider({
        auto: true,
        pager: false,
        pause: 2000,
        minSlides: 5,
        maxSlides: 5,
        moveSlides: 1,
        slideWidth: 257,
        slideMargin: 20,
    });
});

/* $(document).ready(function () {
    $('.week_list').bxSlider({
        auto: true,
        pager: false,
        pause: 3000,
        minSlides: 5,
        maxSlides: 5,
        moveSlides: 1,
        slideWidth: 257,
        slideMargin: 20,
    });
}); */


/* $(function(){
    setTimeout(function(){
        $('.loading').hide();
        $('header').animate({'opacity':'1'});
    }, 7500);
}) */