#!/usr/bin/env python
# -*- coding: utf-8 -*-
import copy
import cgi
from jinja2 import Environment, FileSystemLoader

ids = ['home','product','about','toy','research']
titles = map(lambda x: x.upper(), ids)
link_pathes = ['.','./product/index.cgi','./about','./toy/index.cgi','./research']
globalnavi_zip = zip(link_pathes,ids,titles)


def get_html(tid, add_arguments, template_dir):
	""" テンプレートと引数の情報からHTMLドキュメントを吐く
	"""
	static_path = ("./static" if tid == "home" else "../static")
	i = ids.index(tid)
	arguments = {'static_path':static_path, 'id':ids[i], 'title':titles[i], 'globalnavi_zip': globalnavi_zip}
	env = Environment(loader=FileSystemLoader(template_dir, encoding='utf8'))
	tpl = env.get_template(tid + '_template.html')
	html = tpl.render(arguments)
	return html.encode('utf-8')

def print_html(tid):
	""" print
	"""
	print "Content-Type: text/html\n"
	template_dir = "../templates"
	add_arguments = {}
	print get_html(tid, add_arguments, template_dir)

