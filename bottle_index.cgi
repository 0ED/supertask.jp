#!/usr/bin/env python
# -*- coding: utf-8 -*-

import copy
import bottle
import os
import math
from bottle import route, run, view, get, post, request, static_file, url
from bottle import TEMPLATE_PATH,jinja2_view
from bottle import jinja2_template as template

ids= ['home','product','about','toy','research']
titles = map(lambda x: x.upper(), ids)
pathes = copy.deepcopy(ids)
pathes[0] = '.'
globalnavi_zip = zip(pathes,ids,titles)
TEMPLATE_PATH.append("./templates")

@route('/', name='home')
def home():
	return template('home_template.html',get_json("home"))

@route('/<name>', method='GET')
def other(name):
	if name == 'toy':
		key_line = request.query.key_line
		if not key_line: 
			key_line='Parsing,Introduction'
		return template('toy_template.html',get_json_for_toy(name, key_line))
	elif name == 'product':
		pass # I'll extend
	return template(name + '_template.html',get_json(name))

@route('/<filepath:path>')
def static(filepath):
	return static_file(filepath, root='./static/')

@route('/favicon.ico')
def favicon():
	pass


def get_json_for_toy(name, key_line):
	a_json = get_json(name)
	root = 'static/articles/toy/'
	localnavi_link, detail_link = key_line.split(',')
	localnavi_links = get_order_links(root)
	detail_link= root + localnavi_link + '/' + detail_link
	detail_links = get_order_links(root + localnavi_link + '/')
	my_article = ""
	try:
		my_article = open(detail_link + '.html').read().decode('utf-8')
	except IOError: 
		my_article = "記事の読み込みに失敗しました．管理者(lightfox.task@gmail.com)にメールしてください．".decode('utf-8')

	a_json.update({'localnavi_link':localnavi_link, 'localnavi_links':localnavi_links, 'detail_links':detail_links, 'my_article':my_article})
	return a_json

def get_order_links(path):
	links = []
	with open(path + 'order.txt') as rf:
		for line in rf:
			line = line.rstrip()
			links.append(line)
	return links


def get_json(name):
	i = ids.index(name)
	return {'id':ids[i], 'title':titles[i], 'globalnavi_zip': globalnavi_zip}

def main():
	app = bottle.app()
	app.run(host="localhost", port=8080, debug=True, reloader=True)

if __name__ == '__main__':
	main()
