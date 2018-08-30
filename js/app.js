$(document).ready(function () {
    
    // Vertical align login and signup forms
    $(window).resize(containerMargin)

    function containerMargin() {
        let netHeight = window.innerHeight - $('header').height();
        let margin = (netHeight - $('#main').height()) / 2;
        $('#main').css('margin-top', margin)
    }

    containerMargin();

    // Dashboard sidebar dropdowns
    $('.sidebar .dropdown').on('show.bs.dropdown', function () {
        let i = $(this).find(".fas");
        i.removeClass('fa-angle-right');
        i.addClass('fa-angle-down');
        console.log($(this).find('.dropdown-menu'))
        $(this).find('.dropdown-menu').first().stop(true,true).slideDown(250);
    });

    $('.sidebar .dropdown').on('hide.bs.dropdown', function () {
        let i = $(this).find(".fas");
        i.removeClass('fa-angle-down');
        i.addClass('fa-angle-right');
        $(this).find('.dropdown-menu').first().stop(true,true).slideUp(200);
    });

    // Dashboard header collapse 
    $('#navbarCollapse').on('shown.bs.collapse', pushContainer);
    $('#navbarCollapse').on('hidden.bs.collapse', pushContainer);

    function pushContainer() {
        let height = $('header').height();
        $('.container-fluid').css('margin-top', height - 55 + "px");
        $('.sidebar').css('top', height);
    }
    
})
