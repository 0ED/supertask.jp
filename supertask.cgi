#!/usr/bin/env python
# -*- coding: utf-8 -*-

import bottle
from bottle import route, run, view, get, post, request, static_file, url, error
from bottle import TEMPLATE_PATH,jinja2_view
from bottle import jinja2_template as template

TEMPLATE_FILE_NAME = '_template.html'

@route('/', name='home')
def home():
	return template('home' + TEMPLATE_FILE_NAME,get_json("home"))

@route('/<page_tag>', method='GET')
def other(page_tag):
	if not page_tag in get_ids(): return 'Error.'
	#if page_tag == 'product': pass #return product_page(page_tag)

	return template(page_tag + TEMPLATE_FILE_NAME,get_json(page_tag))

def product_page(page_tag):
	pass


@route('/<filepath:path>')
def static(filepath):
	return static_file(filepath, root='./static/')

@route('/favicon.ico')
def favicon():
	pass

@bottle.error(404)
def error_404(error):
	return 'Sorry, Nothing at this URL.'


def get_error_article():
	error_article = """\
	You missed reading a article.<br />Please send a message of error to administrator (i1558129@cse.kyoto-su.ac.jp).<br />
	<br />
	記事の読み込みに失敗しました．<br />管理者(i1558129@cse.kyoto-su.ac.jp)にメールしてください．<br />
	""".decode('utf-8')
	return error_article

def get_order_links(path):
	links = []
	with open(path + 'order.txt', 'r') as rf:
		for line in rf:
			line = line.rstrip()
			links.append(line)
	return links

def get_ids():
	return ['home','about','product', 'link']

def get_json(name):
	ids = get_ids()
	titles = map(lambda x: x.upper(), ids)

	import copy
	pathes = copy.deepcopy(ids)
	pathes[0] = '.'
	globalnavi_zip = zip(pathes,ids,titles)
	i = ids.index(name)
	return {'id':ids[i], 'title':titles[i], 'static_path': '', 'globalnavi_zip': globalnavi_zip}

def main():
	TEMPLATE_PATH.append("./templates")
	from access_log_middleware import AccessLogMiddleware
	supertask_server = AccessLogMiddleware(bottle.app())
	bottle.run(host="localhost", port=8080, debug=True, app=supertask_server, reloader=True)
	#bottle.run(host="153.126.146.45", port=80, debug=True, app=supertask_server, reloader=True)

if __name__ == '__main__':
	main()



"""
def toy_page(page_tag):
	key_line = request.query.key_line
	if not key_line:
		key_line='Network,Introduction'
	return template(page_tag + TEMPLATE_FILE_NAME,get_json_for_toy(page_tag, key_line))

def get_json_for_toy(name, key_line):
	a_json = get_json(name)
	root = 'static/articles/toy/'
	localnavi_link, detail_link = key_line.split(',')
	localnavi_links = get_order_links(root)
	detail_link= root + localnavi_link + '/' + detail_link
	detail_links = get_order_links(root + localnavi_link + '/')
	my_article = ""
	try:
		my_article = open(detail_link + '.html', 'r').read().decode('utf-8')
	except IOError: 
		my_article = get_error_article

	a_json.update({'localnavi_link':localnavi_link, 'localnavi_links':localnavi_links, 'detail_links':detail_links, 'my_article':my_article})
	return a_json
"""
