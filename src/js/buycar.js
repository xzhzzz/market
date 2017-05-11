requirejs(["config"],function(){
	requirejs(["jquery","jqueryUi","jquerycookie"],function($){
		$(function(){
			$('#header').load('header.html #top-menu');
			$('#footer').load('footer.html');
		});
		
		$(function(){
			//根据cookie生成样式
			var buylist;
			function createbuy(){
	   			buylist = $.cookie('carlist');
		   		buylist = buylist ? JSON.parse(buylist):[];
		   		//当有cookie时隐藏#con-mid,显示#con-mid1
		   		if(buylist.length>0){
		   			$('#con-mid').css({'display':'none'});
			   		console.log(buylist);
			   		$('#con-mid1').css({'display':'block'});
			   		var res = buylist.map(function(item){
			   			return `<div class="section1">
									<span class="check"><input type="checkbox"/></span>
									<img src="${item.goodUrl}" alt="" class="goodImg"/>
									<span class="goodName">${item.goodName}</span>
									<span class="color-s">${item.goodColor}&nbsp;${item.goodSize}码</span>
									<span class="one-price">${item.goodPrice}</span>
									<span class="quan">${item.quan}</span>
									<span class="totalprice">${item.goodPrice*item.quan}</span>
									<span class="opera">删除</span>
								</div>`
			   		}).join('');
				   	$.cookie('carlist',JSON.stringify(buylist),{path:"/",expires:7})
					$('#con-goodlist').append(res);
				}
	   		}
	   		createbuy();
	   		console.log($('.all'))
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
				$(this).parent().remove();
			});
			//删除全部按钮
			$('#seleAll .delall').on('click',function(){
				if($('.all1').prop('checked')){
					$('#con-goodlist .section1').remove();
					$('#con-mid').css({'display':'block'});
					$('#con-mid1').css({'display':'none'});
				}else{
					alert('请勾选全选按钮');
				}
			});
		});
	});
});