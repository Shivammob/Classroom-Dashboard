$(document).ready(function(){
    $('select').selectpicker();
    /* $('[data-toggle="tooltip"]').tooltip({
        trigger: 'focus',
        html: true
    }); */

    //hamburger menu
    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
        $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
        $('.animated-icon3').toggleClass('open');
    });

    
    //sidenav toggle
    $(".navbar-toggler").on("click",function(){
        $(".sidebar-fixed").toggleClass("slideout");
        //$(".sidenav-overlay").toggleClass("show");
    });

    
    //add more buttom to main menu
    /* var $mainMenu = $('#main-menu');
    if ($mainMenu.children().length > 6) {
        var $ul = $('<ul class="dropdown-menu dropdown-secondary z-depth-1" />').append($mainMenu.children().slice(6));
        var $a = $('<a />', {
            href: '#',
            text: 'More',
            class: 'nav-link dropdown-toggle'
        }).hover(function() {
            $(this).text(function(i, text) {
                return text == 'More' ? 'More' : 'More';
            }).next();
        });
        $('<li />', {
            id: 'more',
            class: 'nav-item dropdown dropdown-submenu'
        }).append($a).append($ul).appendTo($mainMenu);
        $('#more > a').attr({
            "data-toggle": "dropdown",
        });
        $('#more ul li.dropdown').addClass('has-dropdown');
    } */

    $('.has-dropdown .dropdown-toggle').on("click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).next('.dropdown-menu').toggle();
    });
    $('.has-dropdown .dropdown-menu a.dropdown-item').on('click', function(){
        $(this).parent().parent().find('.dropdown-menu').hide();
    });

    $('.task-filters .filter-trigger').on("click", function(){
        $(this).parent('.task-filters').toggleClass('show');
        $('.task-filter-wrapper').slideToggle();
    })
    /* $('.dropdown-menu').on('click', function(e){
        if($(this).hasClass('dropdown-menu-form')){
            e.stopPropagation();
        }
    }); */

    // incident popovers
    $('.section-incidents .incident-list article h3').on('click', function(event) {
        $('.incident-details').removeClass('animate slideIn show');
        $(this).parent('article').find('.incident-details').toggleClass('animate slideIn show');
        event.stopPropagation();
    });

    $(window).click(function(e) {
        if (e.target.class === 'show') {
        } else {
            $(".incident-details").removeClass("animate slideIn show"); 
        }  
    });
 
})
