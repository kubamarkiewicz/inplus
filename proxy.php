<?php

$html = file_get_contents($_GET['url']);

/*$server = 'http://customersearch.varta-automotive.com';
$html = str_replace('href="/', 'href="'.$server.'/', $html);
$html = str_replace('src="/', 'href="'.$server.'/', $html);
$html = str_replace('</head>', '<script type="text/javascript" src="inplus.js"></script></head>', $html);*/

$html = str_replace('redirectToOption', 'myRedirectToOption', $html);
$html = str_replace('redirectToOption', 'myRedirectToOption', $html);

echo $html;