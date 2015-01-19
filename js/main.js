var $win = $(window);
var $icon = $('.icon');
var $headerSection = $('.header-section');

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();

	$icon.css('transform', 'rotate(' + scrollPos / 1 + 'deg)');
	$headerSection.css('background-position', 'center ' + scrollPos / 1 + 'px');
});

$headerSection.waypoint(function () {
	$icon.addClass('js-icon-fade');
	
}, { offset: '50%' });