requirejs(["config"],function(){
	requirejs(["jquery","jqueryUi"],function($){
		//表单验证
		$(function(){
			$('#btn-send').click(function(){
				
//				//用户名
//				if(!/^1[34578]\d{9}$/.test($('#phone')[0].value)){
//					$('.p1').css({'display':'block'});
//					return false;
//				}else{
//					$('.p1').css({'display':'none'});
//				};
//				//邮箱
//				if(!/^[\w\-\.]+@[a-z\d\-]+(\.[a-z]+){1,2}$/.test($('#yx')[0].value)){
//					$('.p2').css({'display':'block'});
//					return false;
//				}else{
//					$('.p2').css({'display':'none'});
//				};
//				//密码
//				if(!/^\S{6,25}$/.test($('#psw')[0].value)){
//					$('.p3').css({'display':'block'});
//					return false;
//				}else{
//					$('.p3').css({'display':'none'});
//				};
//				//密码确认
//				if($('#psw')[0].value !== $('#yz')[0].value){
//					$('.p4').css({'display':'block'});
//					return false;
//				}else{
//					$('.p4').css({'display':'none'});
//				};
				//表单提交
				$.post('../php/register.php',{
					email: $('#email').val(),
					password: $('#password').val(),
					phone: $('#phone').val()
				},function(response){
					var $obj = eval('(' + response + ')');
					console.log($obj)
					if($obj.state){
						alert('注册成功！');
					}else{
						alert($obj.message);
					}
				})
			});
		});
		
		$(function(){
			$('#header').load('header.html #top-menu');
		});
	});
});