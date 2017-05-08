requirejs(["config"],function(){
	requirejs(["jquery","jqueryUi"],function($){
		//轮播图
		$(function(){
			console.log($('#banner-r img').length-1)
			$('.cir span').first().css({'background-color':'red'});
			$('#banner-r img').each(function(idx,ele){
				if(idx>0){
					$(ele).css({'opacity':0});
				}				
			});
			var index =0;
			var lastIndex=0;
			var $img=$('#banner-r img');
			var $span=$('.cir span');
			var timer = setInterval(autoPlay,3000);
			function autoPlay(){
				index++;
				showPic();
			}
			function showPic(){
				var $imgLength=$('#banner-r img').length
				if(index<0){
					index=$imgLength-1;
				}else if(index>$imgLength-1){
					index=0;
				}
				$img.each(function(idx,ele){
					if(idx != index){
						$(ele).stop(true).animate({'opacity':0});
					};
				});
				$img.eq(index).stop(true).animate({'opacity':1});
				$img.eq(lastIndex).stop(true).animate({'opacity':0});
				$span.each(function(idx,ele){
					$(ele).css({'background-color':'#000'});
				});
				$span.eq(index).css({'background-color':'red'});
				lastIndex=index;
			};
			$('#banner-r').on('mouseenter',function(){
				clearInterval(timer);
			});
			$('#banner-r').on('mouseleave',function(){
				timer=setInterval(autoPlay,3000);
			});
			for(let idx=0;idx<$img.length;idx++){
				$span.eq(idx).attr({'idx':idx});
				$span.eq(idx).on('mouseenter',function(){
					$span.each(function(idx,ele){
						$(ele).css({'background-color':'#000'});
					});
					$(this).css({'background-color':'red'});
					index=$(this).attr('idx');
					$img.eq(index).stop(true).animate({'opacity':1});
					$img.each(function(idx,ele){
						if(idx != index){
							$(ele).stop(true).animate({'opacity':0});
						};
					});
				});
			};
		});
		$(function(){
			var index=0;
			$('.left').on('click',function(){
				index--;
				if(index<0){
					index=1;
				}
				$('.ul').stop(true).animate({'left':-990*index})
			});
			$('.right').on('click',function(){
				index++;
				if(index>1){
					index=0;
				}
				$('.ul').stop(true).animate({'left':-990*index})
			});
		});
		$(function(){
			var index=0;
			$('.pre').on('click',function(){
				index--;
				if(index<0){
					index=1;
				}
				$('.ul1').stop(true).animate({'left':-1080*index})
			});
			$('.next').on('click',function(){
				index++;
				if(index>1){
					index=0;
				}
				$('.ul1').stop(true).animate({'left':-1080*index})
			});
		});
	});
});