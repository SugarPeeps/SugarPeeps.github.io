/**
 * Exoplanet Custom JS
 *
 * @package Exoplanet
 *
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 */
jQuery(function($){

    $(window).scroll(function(){
    	var scrollTop = $(window).scrollTop();
    	if( scrollTop > 100 ){
    		$('.menubar').addClass('scrolled');
    	}else{
    		$('.menubar').removeClass('scrolled');
    	}
        $('.main-header').css('background-position', 'center ' + (scrollTop / 2) + 'px');
    });

    "use strict";
    var comingWin=jQuery(window).width();
    if(comingWin > 1024)
    {
      jQuery('.menu > ul').superfish({
        delay:       500,                            
        animation:   {opacity:'show',height:'show'},  
        speed:       'fast'                         
      });
    }

    $('.search-box span i').click(function(){
        $(".serach_outer").slideDown(700);
    });

    $('.closepop i').click(function(){
        $(".serach_outer").slideUp(700);
    });

    var habout_inner= $('.about-inner').outerHeight();
    var hwhychoose= $('.whychoose_us').outerHeight();
    if(habout_inner < hwhychoose){
        $('.whychoose_us').css({"height": habout_inner, "overflow-y": "scroll"});
    }
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

jQuery('document').ready(function(){

    var records_loop="";
    var blog_box_loop="";
    var testimonials_loop="";
    var partners_loop="";
    var latest_post_loop="";
    var team_loop="";
    var product_loop="";

    if(jQuery("#records-loop").text()=='true')
    {
      records_loop=true;
    }else{
      records_loop=false;
    }

    if(jQuery("#blog-box-loop").text()=='true')
    {
      blog_box_loop=true;
    }else{
      blog_box_loop=false;
    }

    if(jQuery("#testimonials-loop").text()=='true')
    {
      testimonials_loop=true;
    }else{
      testimonials_loop=false;
    }

    if(jQuery("#partners-loop").text()=='true')
    {
      partners_loop=true;
    }else{
      partners_loop=false;
    }

    if(jQuery("#latest-post-loop").text()=='true')
    {
      latest_post_loop=true;
    }else{
      latest_post_loop=false;
    }

    if(jQuery("#team-loop").text()=='true')
    {
      team_loop=true;
    }else{
      team_loop=false;
    }

    if(jQuery("#product-loop").text()=='true')
    {
      product_loop=true;
    }else{
      product_loop=false;
    }

    var owl = jQuery('#our_records .owl-carousel');
        owl.owlCarousel({
        margin: 10,
        nav: true,
        autoplay : true,
        lazyLoad: true,
        autoplayTimeout: 3000,
        loop: records_loop,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 4
          }
        },
        autoplayHoverPause : true,
        mouseDrag: true
    });

    var owl = jQuery('#blog-box .owl-carousel');
        owl.owlCarousel({
        margin: 25,
        nav: true,
        autoplay : true,
        lazyLoad: true,
        autoplayTimeout: 3000,
        loop: blog_box_loop,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 4
          }
        },
        autoplayHoverPause : true,
        mouseDrag: true
    });

    var owl = jQuery('#testimonials .owl-carousel');
        owl.owlCarousel({
        margin: 10,
        nav: true,
        autoplay : true,
        lazyLoad: true,
        autoplayTimeout: 3000,
        loop: testimonials_loop,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 1
          }
        },
        autoplayHoverPause : true,
        mouseDrag: true
    });
        var owl = jQuery('#our_partners .owl-carousel');
        owl.owlCarousel({
        margin: 25,
        nav: true,
        autoplay : true,
        lazyLoad: true,
        autoplayTimeout: 3000,
        loop: partners_loop,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          700: {
            items: 3
          },
          1000: {
            items: 3
          },
          1200: {
            items: 5
          }
        },
        autoplayHoverPause : true,
        mouseDrag: true
    });
    var owl = jQuery('#latest_post .owl-carousel');
        owl.owlCarousel({
        margin: 25,
        nav: true,
        autoplay : true,
        lazyLoad: true,
        autoplayTimeout: 3000,
        loop: latest_post_loop,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          800: {
            items: 2
          },
          1000: {
            items: 2
          }
        },
        autoplayHoverPause : true,
        mouseDrag: true
    });
    var owl = jQuery('#team .owl-carousel');
        owl.owlCarousel({
        margin: 10,
        nav: true,
        autoplay : true,
        lazyLoad: true,
        autoplayTimeout: 3000,
        loop: team_loop,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 4
          }
        },
        autoplayHoverPause : true,
        mouseDrag: true
    });

    var owl = jQuery('#product .owl-carousel');
        owl.owlCarousel({
        margin: 25,
        nav: true,
        autoplay : true,
        lazyLoad: true,
        autoplayTimeout: 3000,
        loop: product_loop,
        navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 4
          }
        },
        autoplayHoverPause : true,
        mouseDrag: true
    });
    jQuery('a.accordion-toggle').click(function() {
        jQuery("i", this).toggleClass("fas fa-plus fas fa-times");
    });
    new WOW().init();
});
/* Counter */
jQuery(document).ready(function(){
  jQuery('.count').each(function () {
      jQuery(this).prop('Counter',0).animate({
          Counter: jQuery(this).text()
      }, {
          duration: 30000,
          easing: 'swing',
          step: function (now) {
             jQuery(this).text(Math.ceil(now));
          }
      });
  });

  var ulwidth=jQuery('#services').width();
  
  if(ulwidth<=575)
  {
    jQuery('#services ul').removeClass('nav');
    jQuery('#services ul').removeClass('nav-justified');
  }
  else
  {
    jQuery('#services ul').addClass('nav');
    jQuery('#services ul').addClass('nav-justified');
  }
});