<?php
	// 添加响应头
	header('Access-Control-Allow-Origin:*');

	//06football.php?pageNo=1

	// 获取前端传来的参数
	// isset()用于判断请求是否有参数
	$pageNo = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;

	//每一页的数量
	$pageCount = isset($_GET['qty']) ? $_GET['qty'] : 3;

	$url = '../data/goodList.json';

	// 以只读模式打开文件
	$file = fopen($url, 'r');

	// 读取文件内容
	$content = fread($file, filesize($url));
	
	// 先转成数组
	$arr = json_decode($content);
	//pageNo -> index
	//1 -> 0
	//2 -> 10
	//3 -> 20
	//推导公式：index = (pageNo-1)*$pageCount

	$res = array(
		'data'=>array_slice($arr, ($pageNo-1)*$pageCount,$pageCount),
		'total'=>count($arr)
	);

	echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>