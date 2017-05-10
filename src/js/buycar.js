requirejs(["config"],function(){
	requirejs(["jquery","jqueryUi","jquerycookie"],function($){
		$(function(){
			$('#header').load('header.html #top-menu');
			$('#footer').load('footer.html');
		});
	});
});