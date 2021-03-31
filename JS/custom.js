

$(function () {
    'use strict';
    $('.header').height($(window).height());


    $(window).resize(function () {
        $('.header').height($(window).height());
        $('.bxslider').each(function () {

            $(this).css('padding-top', ($(window).height() - $('.bxslider li').height()) / 2);

        });
    });

    //Links add active class
    $('.links li a').click(function () {

        $(this).parent().addClass('active').siblings().removeClass('active');
        // $('li.active').removeClass('active');
        // $(this).addClass('active');
    });

    //center the ul
    $('.bxslider').each(function () {

        $(this).css('padding-top', ($(window).height() - $('.bxslider li').height()) / 2);

    });
    //Run BxSlider

    $('.bxslider').bxSlider({
        pager: false
    });

    //Smooth Scroll
    $('.links li a').click(function () {

        $('html,body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1000);

    });

    //Auto slider code 
    (function autoSlider() {
        $('.slider .active').each(function () {
            if (!$(this).is(':last-child')) {

                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());

    // Trigger MixitUp
    $('#Container').mixItUp();

    //shuffel

    $('.shuffel li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});