

$(function() {

	$('#my-menu').mmenu({
		extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black', 'position-right'],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салон красоты Смитлер">'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	$('.carousel-services').on('initialized.owl.carousel', function(){
		setTimeout(function(){
			carouselService()
		}, 100);
		carouselService();
	})
	$('.carousel-services').owlCarousel({
		nav: true,
		loop: true,
		dots: false,
		smartSpeed: 700,
		navText: ['<i class="fas fa-angle-double-left"></i>','<i class="fas fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});

	

	function carouselService(){
		$('.carousel-services-item').each(function(){
			var ths  = $(this),
					thsh = ths.find('.carousel-services-content').outerHeight();
					ths.find ('.carousel-services-image').css('min-height', thsh);
		});
		} carouselService();
	
	$('.carousel-services-composition .h3').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

	$('select').selectize({
	})

	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.succcess').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		autoHeight: true,
	});

		$('.carousel-partners').owlCarousel({
		loop: true,
		smartSpeed: 700,
		nav: true,
		dots: false,
		navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	

	function onResize(){
			$('.carousel-services-content').equalHeights();
	}onResize();
	window.onresize = function() {onResize();carouselService();};

	});

$(window).on('load', function(){
	$('.preloader').delay(500).fadeOut('slow');
})