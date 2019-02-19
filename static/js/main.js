jQuery(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 2000
            });
            $(".owl-carousel").owlCarousel({
          items:3,
          autoplay:true,
          smartSpeed:700,
          loop:true,
          autoplayHoverPause:true,
            responsive:{
              0:{
          
                 items:1
              }, 
             480:{
          
                 items:2
              }, 
                                     
             768:{
          
                 items:3
              } 
            }
          
          
          
        });
    });