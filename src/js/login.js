requirejs(["config"],function(){
	requirejs(["jquery","jqueryUi"],function($){
		$(function(){
			console.log($('#header'));
			$('#header').load('header.html #top-menu');
		});
		
		$(function(){
			$('#btn-send').click(function(){
		        $.post('../php/login.php',{
		          email: $('#email').val(),
		          password: $('#password').val()
		        },function(response){
		          var $obj = eval('(' + response + ')');
		          if($obj.state){
		            window.location.href = '../index.html';
		          } else {
		            alert($obj.message);
		          }
		        })        
		     })
		});
	});
});