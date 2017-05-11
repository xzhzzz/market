requirejs(["config"],function(){
	requirejs(["jquery","common","jqueryUi","jquerycookie"],function($,com){
		$(function(){
			$('#header').load('header.html #top-menu');
			$('#footer').load('footer.html');
		});
		
		$(function(){
			//根据cookie生成样式
			var buylist ;
			if($.cookie('carlist') != 'NULL'){
	   			buylist=com.createBuy();
			}		
	   		//全选
	   		$('.all').on('click',function(){
	   			var checkAll = $('.all').prop('checked');
	   			$(':checkbox').prop('checked',checkAll);
	   			if(checkAll){
					$('.section1').addClass('changC');
				}else{
					$('.section1').removeClass('changC');
				}
	   		});
	   		$('.all1').on('click',function(){
	   			var checkAll = $('.all1').prop('checked');
	   			$(':checkbox').prop('checked',checkAll);
	   			if(checkAll){
					$('.section1').addClass('changC');
				}else{
					$('.section1').removeClass('changC');
				}
	   		});
	   		var $checkbox = $('#con-goodlist :checkbox');
   			$('.section1').on('click',':checkbox',function(e){
				var $checked = $checkbox.filter(':checked');
				//判断是全选
				$('.all').prop('checked',$checked.length===$checkbox.length);
				$('.all1').prop('checked',$checked.length===$checkbox.length);
				// 获取当前元素的父级的父级元素，高亮当前行
				if(this.checked){
					$(this).parent().parent().addClass('changC');
				}else{
					$(this).parent().parent().removeClass('changC');
				}
			})
   			//删除按钮
			$('#con-goodlist').on('click','.opera',function(){
				console.log(buylist)
   				for(var i=0;i<buylist.length;i++){
   					if(buylist[i].goodColor+buylist[i].goodSize == $(this).parent().children('.color-s').text()){
   						buylist.splice(i,1);
   					}
   				}
   				$.cookie('carlist',JSON.stringify(buylist),{path:'/'})
   				$(this).parent().remove();
   				window.location.reload()
			});
			//删除选中商品按钮
			$('#seleAll .del').on('click',function(){
				$('.section1').each(function(idx,ele){
					if($(ele).children('.check').children('input').prop('checked')){
						for(var i=0;i<buylist.length;i++){
		   					if(buylist[i].goodColor+buylist[i].goodSize == $(ele).children('.color-s').text()){
		   						buylist.splice(i,1);
		   						console.log(1)
		   					}
		   				}
						console.log(buylist)
		   				$.cookie('carlist',JSON.stringify(buylist),{path:'/'});
						$(ele).remove();
						window.location.reload();
		   			}	
				});
			});
			
			//删除所有商品并删除cookie
			$('#totalM .delall').on('click',function(){
				$('#con-goodlist .section1').remove();
				$.removeCookie('carlist',{path:'/'});
				window.location.reload();
			});
				
			//总金额
			var allprice=0;
			$('.totalprice').each(function(idx,ele){
				allprice+=parseInt($(ele).text());
			});
			$('.allprice').text('￥'+allprice);
		});
	});
});