<?php
$relative_path = '..';
include($relative_path.'/all_twig.php');
$aTwig = new BaseTwig('product', $relative_path);
$aTwig->printHTML();
?>