/* Author: Emma Charpentier */

$(document).ready(function() {

$('.masonry').imagesLoaded(function(){
	$('.masonry').masonry({
		itemSelector: '.screenshot',
		'gutter': 10
	})
	
});

$('.screenshot').on('click', function(){
	$('.screenshot.full').not(this).removeClass('full');
	$(this).toggleClass('full');

});
	
});