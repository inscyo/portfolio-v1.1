import $ from 'jquery';

$(document).ready(function($) {

	// Client Screen

	const clientHeight = $(window).height();

	const clientWidth = $(window).width();

    $('.nav-landing-mobile-menu-o').click(function(event) {

        $('.nav-landing-mobile-o').slideToggle(220);

    });



  	 // Type js

    // const typed = new Typed('.nav-landing-content-title-type-o', {

    //     strings: ["Web Designer", "Front End Web Dev"],

    //     typeSpeed: 200

    //     });



        // Modal image projects view

        $(document).ready(function($) {

            $('.my-img-projects').click(function(event) {

                let imgModalSrc = $(this).attr('src');

                $('.modal-project-img-src-o').attr('src', imgModalSrc);

                $('.modal-project-img-o').css('transform', 'scale(1)');

            });

            $('.modal-project-img-src-o').click(function(event) {

               $('.modal-project-img-o').css('transform', 'scale(0)');

            });

    });

    //

});









