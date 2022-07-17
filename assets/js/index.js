$(document).ready(function () {
    // navbar search 
    $('#search-icon').click(function () {
        $(this).toggleClass('fa-times');
        $('#search-box').toggleClass('activated');
        $('.fa-bars').removeClass('fa-times'); // togglebar remove if they active
        $('.nav-bar').removeClass('nav-toggle'); // togglebar remove if they active
    });

    // navbar bar and toggle
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.nav-bar').toggleClass('nav-toggle');
        $('#search-box').removeClass('activated'); // remove search icon if they activated
        $('#search-icon').removeClass('fa-times'); // remove search icon if they activated
    });

    // navbar sticky 
    $(window).scroll(function () {
        if (this.scrollY > 20)
          $('header').addClass('stciky');
        else
        $('header').removeClass('stciky');
    });

    // nav-toggle onscroll hide 
    $(window).on('scroll load', function () {
        $('#search-icon').removeClass('fa-times');
        $('#search-box').removeClass('activated');
        $('.fa-bars').removeClass('fa-times');
        $('.nav-bar').removeClass('nav-toggle');
    });

    // smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 700,
        speedAsDuration: true
    });

    // popup button 
    $('.btn').click(function () { 
        $('.pop-up').addClass('pop-ups');
    });
    $('.p').click(function () { 
        $('.pop-up').removeClass('pop-ups');
    });
    
});