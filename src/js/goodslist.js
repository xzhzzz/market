requirejs(['config'],function(){
	requirejs(['jquery','jqueryUi'],function($){
		$(function(){
			$('#header').load('header.html');
			$('#footer').load('footer.html');
		});
		//获取后台json数据
		$(function(){
			var pageLen = 0;
			var qty=3;
			var pageNo=1;
			window.onscroll=()=>{
				var scrollTop = window.scrollY;//
				if(scrollTop >= $('body')[0].scrollHeight-window.innerHeight - 360){
//					if(pageNo<=pageLen){
//						
//						xhr.open('get','http://localhost/h5_1701/php/06football.php?pageNo=' + pageNo,true);
//						xhr.send();
//					}
					if(pageNo<=pageLen){
						$.ajax({
							type:"get",
							url:"../php/getList.php",
							data:{"pageNo":pageNo},
							dataType:"json",
							success:function(resp){
								pageLen = Math.ceil(resp.total/qty);
								var ul=1;//设置ul的类名叠加
								var arr=resp.data;//获取后端返回的数据中要转换成标签的数组
								//根据返回的数组长度生成section盒子
								for(var i=0;i<arr.length;i++){
									var res = `<div class="section">
													<div class="section-t">
														<span class="list-logo"></span>
														<span clsaa="title">${arr[i].title}</span>
													</div>
													<div class="section-bot">
														<ul class="ul${ul}">
														</ul>
													</div>
												</div>`;
									//插入到页面的位置
									$('#list-content').append(res);
									//获取数据中的li数组生成对象的li标签
									var list=arr[i].li;
									var li;
									//根据li数组的长度生成对应数量的里标签
									for(var j=0;j<list.length;j++){
										//原生js创建li标签
										li = document.createElement('li');
										//把li数组中的a标签数组生成相对应的a标签然后插入li中
										li.innerHTML=list[j].map(function(item){
											return `<a href="">${item}</a>`;
										}).join('');	
										//li标签插入到生成的ul类中,防止类名的相同
										$('.section-bot .ul'+ul).append(li);
									};
									//ul一直叠加防止类名重复导致数据插入的地方错误
									ul++;
								}
								pageNo++;
							}
						});
					}
				}
			}
			$.ajax({
				type:"get",
				url:"../php/getList.php",
				data:{"pageNo":1},
				dataType:"json",
				success:function(resp){
//					var ul=1;//设置ul的类名叠加
//					var arr=resp.data;//获取后端返回的数据中要转换成标签的数组
//					//根据返回的数组长度生成section盒子
//					for(var i=0;i<arr.length;i++){
//						var res = `<div class="section">
//										<div class="section-t">
//											<span class="list-logo"></span>
//											<span clsaa="title">${arr[i].title}</span>
//										</div>
//										<div class="section-bot">
//											<ul class="ul${ul}">
//											</ul>
//										</div>
//									</div>`;
//						//插入到页面的位置
//						$('#list-content').append(res);
//						//获取数据中的li数组生成对象的li标签
//						var list=arr[i].li;
//						var li;
//						//根据li数组的长度生成对应数量的里标签
//						for(var j=0;j<list.length;j++){
//							//原生js创建li标签
//							li = document.createElement('li');
//							//把li数组中的a标签数组生成相对应的a标签然后插入li中
//							li.innerHTML=list[j].map(function(item){
//								return `<a href="">${item}</a>`;
//							}).join('');	
//							//li标签插入到生成的ul类中,防止类名的相同
//							$('.section-bot .ul'+ul).append(li);
//						};
//						console.log(li);
//						//ul一直叠加防止类名重复导致数据插入的地方错误
//						ul++;
//					}
				},
				async:true
			});
		});
	});
});