requirejs(["config"],function(){
	requirejs(["jquery","jqueryUi","jqueryFdj","jquerycookie"],function($){
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
			console.log($('.price').html());
			//购物车效果
			$("#btn-buycar").on('click',function(){
				if($(".detail-c").html() !== '' && $(".detail-n").html()!==''){
					$('#nor-img').append($('#nor-img img').clone().addClass('moveImg').css({'position':'absolute','z-index':100000,'top':0,'left':0}));
					//top=购物车偏移高度-图片的偏移高度+滚动条滚动距离
					$('.moveImg').stop(true).animate({'width':0,'left':$('.Bcar').offset().left-20,'top':$('.Bcar').position().top-180+window.scrollY},function(){
						//动画效果完成后移除克隆的元素
						$('.moveImg').remove();
					});
					//生成cookie
					var $carlist = $.cookie('carlist');
					$carlist = $carlist ? JSON.parse($carlist):[];
					var hasCarList = false;
					for(i=0;i<$carlist.length;i++){
						//判断商品id、颜色、码数是否一致，不然重新创建新的cookie
	   			   		if($carlist[i].goodId == $('#goodId').html() && $carlist[i].goodColor == $('.color .click').attr('title') && $carlist[i].goodSize == $('.size .click').html()){
	   			   			hasCarList = true;
	   			   			$carlist[i].quan++;
	   			   			break;
	   			   		}
	   			   	}
					if(!hasCarList){
						var good={
							goodId:$('#goodId').html(),
							goodName:$('#goods-r h2').html(),
							goodPrice:$('.price').text(),
							goodColor:$('.color .click').attr('title'),
							goodSize:$('.size .click').html(),
							goodUrl:$('#nor-img img').attr('src'),
							quan:1
						}
						$carlist.push(good);
					}
					$.cookie('carlist',JSON.stringify($carlist),{path:"/",expires:7});
					console.log($.cookie('carlist'));
				}else{
					alert('请选择您所购买的商品的颜色以及尺码！！');
				}
			});
		});
		
	});
});