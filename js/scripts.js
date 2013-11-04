// JavaScript Document

$(document).ready(function(){
	
	$('body').hide('fast').show('slow');
	
	$('img').click(function(){
		
		// Move Image
		$(this).transition({
			perspective: '100px',
  			rotateY: '180deg'
		}, 1000, 'snap').transition({
			x : '200px'
			
		});	
		
	});
	
});