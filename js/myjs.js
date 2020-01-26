
$(document).ready(function(){
	$('.slider').slick({
  autoplay: true,
	rows:2,
	slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  infinite: true,
  cssEase: 'linear',
  rtl: false,
	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 800,
      settings: {
		rows: 1,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}); 
	});



$('.card').on('click', function() {
      $('.slider')
          .slick('slickPause')
          .slick('slickSetOption', 'autoplay', false);
  });


$('.close').on('click', function() {
      $('.slider')
          .slick('slickPlay')
          .slick('slickSetOption', 'autoplay', true);
  });

