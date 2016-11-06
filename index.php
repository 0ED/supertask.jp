<?php
$relative_path = '.';
include($relative_path.'/all_twig.php');
$aTwig = new HomeTwig('home', $relative_path);
$aTwig->printHTML();
?>