#!/usr/bin/env python
# -*- coding:utf-8 -*-
#
# 記事を出力するall_twig.phpを起動するためのPHPスクリプトを吐き出すためのPythonスクリプト．
#

relative_pathes = ['.','..','..','..']
classes = ['BaseTwig','BaseTwig','ToyTwig','BaseTwig']
ids = ['home','product','toy','link']
src_pathes = ['index.php','product/index.php','toy/index.php','link/index.php']

script_template = """\
<?php
$relative_path = '%s';
include($relative_path.'/all_twig.php');
$aTwig = new %s('%s', $relative_path);
$aTwig->printHTML();
?>"""

infos = zip(relative_pathes, classes, ids, src_pathes)
for relative_path, a_class, a_id, src in infos:
	with open(src,'w') as wf:
		script = script_template % (relative_path, a_class, a_id)
		wf.write(script)
