requirejs(["config"],function(){
	requirejs(["jquery","jqueryUi","jqueryFdj"],function($){
		//加载头尾部
		$(function(){
			$('#header').load('header.html');
			$('#footer').load('footer.html');
		});
		
		//放大镜
		$(function(){
			//放大镜代码
			$('#nor-img').fdzoom({position:'right'});
			
			//鼠标移入小图改变大图地址
			$('#s-img').on('mouseenter','img',function(){
				$('#nor-img img').attr({
					src:$(this).attr('data-normal'),
					'data-big':$(this).attr('data-big')
				})
			});
			//小图边框
			$('#s-img').on('mouseenter','li',function(){
				$(this).siblings().removeClass('hover');
				$(this).addClass('hover');
			});
		});
		
		//购物车效果
		$(function(){
			//选择商品格式
			$('.color img').on('click',function(){
				$(this).addClass('click');
				$('.num .detail-c').html($(this).attr('title'));
			});
			
			$('.size').on('click','span',function(){
				$(this).siblings().removeClass('click');
				$(this).addClass('click');
				$('.num .detail-n').html($(this).html());
				
			});
		});
		
	});
});