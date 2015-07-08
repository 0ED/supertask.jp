#!/usr/bin/python
# -*- coding: utf-8 -*-

import copy
from jinja2 import Environment, FileSystemLoader

def write_html():
	env = Environment(loader=FileSystemLoader('./', encoding='utf8'))
	tpl = env.get_template('about_template.html')

	filenames= ['index','product','about','hack','research','link']
	titles = map(lambda x: x.upper(), filenames)
	pathes = copy.deepcopy(filenames)
	titles[0] = 'HOME'
	pathes[0] = '.'
	globalnavi_zip = zip(pathes,filenames,titles)

	#print 'Content-Type: text/html; charset=utf-8\n'
	html = tpl.render({'filename':u'index', 'title':u'HOME',u'globalnavi_zip':globalnavi_zip})
	f = open("tmp_index.html",'w')
	f.write(html.encode('utf-8'))
	f.close()

def main():
	write_html()

if __name__ == '__main__':
	main()
