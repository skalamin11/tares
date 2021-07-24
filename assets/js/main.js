
/* MOBILE MENU*/
function openNav(){
	document.getElementById("mobile-menu-overlay").style.width="100%";
};

function closeNav(){
	document.getElementById("mobile-menu-overlay").style.width="0%";
};

/* STICKY NAVBAR*/
$(window).scroll(function(){
    if($(window).scrollTop() > 0){
        $('header').addClass('sticky')
    }
    else{
        $('header').removeClass('sticky')
    }
});


/* PORTFOLIO SLIDER ACTIVATION*/
// init Isotope
var $grid = $('.portfolio-items').isotope({
    // options
  });
  // filter items on button click
  $('.portfolio-filter').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  // filter items on button active
	$('.portfolio-filter li').click(function(){
		$('.portfolio-filter li').removeClass("active");
		$(this).addClass("active");
	});
  
/* TESTIMONIAL SLIDER ACTIVATION */
  $('.testimonial-area .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
/* PORTFOLIO SECTION ACTIVE*/
$('.venobox').venobox();

/* BLOG  SLIDER ACTIVATION */
$('.blog-area .owl-carousel').owlCarousel({
  loop:true,
  margin:0,
  nav:false,
  autoplay:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});

/* BOTTOM TO TOP BUTTON ACTIVATE*/
$("i.go-to-top").hide();
  $(window).on("scroll", function(){
    	if($(window).scrollTop() > 700){
    		$("i.go-to-top").show("fast");
    	}
      else{
    		$("i.go-to-top").hide("fast");
    	}
    });
    //GO TOP SCROLL FUNCTIONs
    $("i.go-to-top").click(function(){
    	$("html,body").animate({'scrollTop':0 },2000);
    	return false;
    });

