<?php
$relative_path = '..';
include($relative_path.'/all_twig.php');
$aTwig = new ToyTwig('toy', $relative_path);
$aTwig->printHTML();
?>