<?php
$relative_path = '.';
include($relative_path.'/all_twig.php');
$aTwig = new BaseTwig('home', $relative_path);
$aTwig->printHTML();
?>