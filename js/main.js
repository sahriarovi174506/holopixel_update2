(function ($) {
    "use strict";

    // ------- Prealoder ------
    $(window).on('load', function () {
        $("#preloader").delay(300).fadeOut("slow");
    });


    // ============== Handle Menu on Sreen scrolling ================= //
    function menuOnScroll() {
        const elementToModify = $(".site_header");
        let lastScrollTop = 0;
        const scrollTop = $(window).scrollTop();
        if (scrollTop > 200) {
            elementToModify.addClass("sticky");
        }
        $(window).on("scroll", () => {
            const scrollTop = $(window).scrollTop();
            if (scrollTop > lastScrollTop && lastScrollTop > 100) {
                elementToModify.addClass("sticky");
            } else if (scrollTop < 110) {
                elementToModify.removeClass("sticky");
            }
            lastScrollTop = scrollTop;
        });
    }

    $(document).ready(function () {

        // menuOnScroll
        menuOnScroll()

        // Toggle Menu
        $('.hamburger').click(function (e) {
            $(this).toggleClass("active");
            $('.menu_wrapper').toggleClass("active");
        });


        // slider_arrow
        $('.slider_arrow').click(function (e) {
            $(".slider_arrow").not(this).removeClass("active");
            $(this).addClass("active");
        });

        // residential_slider
        var owl = $(".residential_slider").owlCarousel({
            loop: false,
            margin: 1,
            nav: false,
            dots: false,
            autoplay: false,
            items: 1
        });

        // Custom navigation
        $('#customPrev').click(function () {
            owl.trigger('prev.owl.carousel');
        });

        $('#customNext').click(function () {
            owl.trigger('next.owl.carousel');
        });

        // Custom dots navigation
        $('.owl-dot').click(function () {
            var slideIndex = $(this).data('slide');
            owl.trigger('to.owl.carousel', [slideIndex, 300]);
        });

        // Update custom dots on change
        owl.on('changed.owl.carousel', function (event) {
            var currentIndex = event.item.index;
            $('.owl-dot').removeClass('active');
            $('.owl-dot[data-slide="' + currentIndex + '"]').addClass('active');
        });




    });

})(jQuery);