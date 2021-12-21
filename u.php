<?php
session_start();
$u = (int)$_GET['u'];
$_SESSION['u'] = $u;


function sendm1pinfo($email='', $hotelid='')
{
	$u = (int)$_SESSION['u'];
	$hotelid = (int)$hotelid;
	
	if ($u > 0)
	{
		$getdata = array('u' => $u,
						 'ref' => $_SERVER['HTTP_REFERER'],
						 'ip' => $_SERVER['REMOTE_ADDR'],
						 'h' => 0,
						 'ua' => $_SERVER['HTTP_USER_AGENT'],
						 'email' => $email);
		$getquery = http_build_query($getdata);
		$f  = 'https://m1p.ru/watch_g.php?' . $getquery;
		$f  = file_get_contents($f);
	}
}
?>