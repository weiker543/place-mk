$(function () {

    $("a.button").click(function () {
    	var elementClick = $(this).attr("href");
    	var destination = $(elementClick).offset().top;
    	$('html, body').animate({ scrollTop: destination }, 800);
    	return false;
	});

	$('a.call-btn').click( function(event){
	    event.preventDefault();
	    $('#myOverlay').fadeIn(297,	function(){
	    	$('#myModal') 
	    	.css('display', 'block')
	    	.animate({opacity: 1}, 198);
	    });
	});

	$('#myModal__close, #myOverlay').click( function(){
		$('#myModal').animate({opacity: 0}, 198, function(){
	    	$(this).css('display', 'none');
	     	$('#myOverlay').fadeOut(297);
	    });
	});

  	$('.btn-routes').click(function (e) {
		e.preventDefault();
		$('.destinations-more').toggleClass('destinations-visible')
	});

});