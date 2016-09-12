$(document).ready(function() {
	$('button.navbar-toggle').click(function() {
		if($(this).attr('aria-visible') == 'true') {
			$(this).removeClass('active');
			$('ul.navbar-middle').css('visibility','hidden');
			$(this).attr('aria-visible','false');
		} else {
			$(this).addClass('active');
			$('ul.navbar-middle').css('visibility','visible');
			$(this).attr('aria-visible','true');
		}
	})
})