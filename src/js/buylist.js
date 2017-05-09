requirejs(["config"],function(){
	requirejs(["jquery","jqueryUi","jqueryFdj"],function($){
		$(function(){
			$('#header').load('header.html');
			$('#footer').load('footer.html');
		});
		
		$(function(){
			$('#nor-img').fdzoom({position:'right'});
		});
	});
});