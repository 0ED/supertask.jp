#!/usr/bin/env python
# -*- coding: utf-8 -*-

import copy
from jinja2 import Environment, FileSystemLoader
from template_getter import *

template_ids = ["home","about","research"]
out_filenames = copy.deepcopy(template_ids)
out_filenames[0] = "."

def main():
	for tid,wfilename in zip(template_ids, out_filenames):
		f = open(wfilename + "/index.html",'w')
		i = ids.index(tid)
		print ids[i], titles[i]
		static_path = ("./static" if tid == "home" else "../static")
		arguments = {'static_path': static_path, 'id':ids[i], 'title':titles[i], 'globalnavi_zip': globalnavi_zip}
		html = get_html(tid, arguments, "./templates")
		f.write(html)
		f.close()

if __name__ == '__main__':
	main()
