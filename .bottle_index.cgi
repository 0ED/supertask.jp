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
	return template('home_template.html',request("home"))

@route('/static/<filepath:path>')
def static(filepath):
	return static_file(filepath, root='./static/')

@route('/locales/<filepath:path>')
def locales(filepath):
	return static_file(filepath, root='./static/locales/')

@route('/<name>')
def about(name):
	return template(name + '_template.html',request(name))

def request(name):
	i = ids.index(name)
	return {'id':ids[i], 'title':titles[i], 'globalnavi_zip': globalnavi_zip}

@route('/favicon.ico')
def favicon():
	pass

def main():
	app = bottle.app()
	app.run(host="localhost", port=8080, debug=True, reloader=True)

if __name__ == '__main__':
	main()
