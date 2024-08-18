// jquery

$(function(){
    
    
          // Counter section
          $('.counter').counterUp({
            delay: 10,
            time: 1000,
           });
    
    
    // leadership section
           
          $('.leadershipCnt').slick({
            slidesToShow: 4,
            prevArrow: '<span class="leaderPre-arrow"><i class="fa-solid fa-play"></i></span>',
            nextArrow: '<span class="leaderNxt-arrow"><i class="fa-solid fa-play"></i></span>',
            responsive: [
                {
                  breakpoint: 992,
                 settings: {
                    slidesToShow: 3
                  }
                },
               {
                    breakpoint: 577,
                    settings: {
                      slidesToShow: 2
                    }
                  }
                 
              ]
        });


        // customer section 
          
      $('.customerCnt').slick({
        slidesToShow: 1,
        arrows: false,
          dots: true,
          dotsClass: 'customerDots container',
      
    });
    
    
          // instagram section
    $('.instagramCnt').slick({
      slidesToShow: 6,
      arrows: false,
        dots: true,
        dotsClass: 'instaDots container',
        responsive: [
          {
            breakpoint: 992,
           settings: {
              slidesToShow: 3
            }
          },
         {
              breakpoint: 577,
              settings: {
                slidesToShow: 2
              }
            }
    
        ]
    
    });
    
    // Beauty inspired section
    
    
    })
    
    
    
    new VenoBox({
      selector: '.venobox',
    });