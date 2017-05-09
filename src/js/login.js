requirejs(["config"],function(){
	requirejs(["jquery","jqueryUi"],function($){
		$(function(){
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
		          	alert('登录成功！')
		            window.location.href = '../index.html';
		          } else {
		            alert($obj.message);
		          }
		        })        
		    })
		});
	});
});