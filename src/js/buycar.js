requirejs(["config"],function(){
	requirejs(["jquery","jqueryUi"],function($){
		$(function(){
			$('#header').load('header.html');
			$('#footer').load('footer.html');
		});
	});
});