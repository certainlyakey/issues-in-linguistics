// @codekit-prepend "cssattr.min.js"

jQuery(function($){


	/* ========================================================================= */

	// !– Dev tools

	/* ========================================================================= */


	$('body').append('<div class="baselinegrided"></div>');
	$('.baselinegrided').height($(document).height());
	$(document).on('keypress', function(e) {
		var code = e.keyCode || e.which;
		if(code === 119) {
			$('.baselinegrided').toggle();
		}
	});


	/* ========================================================================= */

	// !– Cosmetics

	/* ========================================================================= */


	$('html').removeClass('no-js');
	$('.header h1 a').wrapInner('<span class="hidden"></span>');
	$('.pagination .prev, .pagination .next').wrapInner('<span class="hidden"></span>');
	$('.archive .post-item:first-child .readmore').wrapInner('<span class="wrapper"></span>');
	$('.elastic-button').wrapInner('<span class="wrapper"></span>');


	/* ========================================================================= */

	// !– Initialize global plugins

	/* ========================================================================= */


	//initialize CSS attr() polyfill
	// Get CSS for all styles
	var styleNode = document.querySelectorAll('style'),
		css = '';
	for (var i = 0; i < styleNode.length; i++) {
		css += styleNode[i].innerHTML;
	}
	//Parse the CSS, show it and observe for changes.
	cssattr.parse(css).show().observe();




	/* ========================================================================= */

	// !– Main menu

	/* ========================================================================= */



		// !Append HTML



		// !Set vars
		var $mainmenu = $('.content-outer .mainmenu');


		// !Functions
		$mainmenu.find('ul ul').each(function() {
			var $submenu = $(this);
			$submenu.hide();
			$submenu.prev('a').on('click', function(event) {
				event.preventDefault();
				$submenu.toggle();
			});
		});


		//from here http://www.itworld.com/article/2832973
		function setNavigation() {
			var path = window.location.pathname;
			path = path.replace(/\/$/, "");
			path = decodeURIComponent(path);

			$mainmenu.find('a').each(function () {
				var href = $(this).attr('href');
				if (path.substring(0, href.length) === href) {
					$(this).closest('li').addClass('active');
				}
			});
		}

		function openSubmenuWithCurrentPage() {
			$mainmenu.find('ul ul').each(function () {
				if ($(this).find('.active').length) {
					$(this).addClass('submenu-active').toggle();
				}
			});
		}



		// !Launch onload functions
		setNavigation();
		openSubmenuWithCurrentPage();


		// !Events
		$(document).on('click', function(event) {
			if (!$(event.target).closest($mainmenu.find('ul')).length) {
				$mainmenu.find('ul ul:not(.submenu-active)').hide();
			}
		});




	/* ========================================================================= */

	// !– Pubs filter

	/* ========================================================================= */



		// !Append HTML



		// !Set vars
		var $filter = $('.pubs-filter');
		var $filter_header = $filter.children('nav');
		var $filter_content = $filter.children('ul');


		// !Functions
		$filter_header.find('li:first-child').addClass('active');
		$filter_content.children('li:first-child').addClass('active');
		$filter_header.on('click', 'a', function(event) {
			event.preventDefault();
			$(this).closest('nav').find('li').removeClass('active');
			$(this).closest('li').addClass('active');
			$filter_content.children('li').removeClass('active');
			var id = $(this).attr('href').replace('#','');
			$('#'+id).addClass('active');
		});
		


		// !Launch onload functions
		


		// !Events
		



});