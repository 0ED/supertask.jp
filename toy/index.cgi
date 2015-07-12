#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys
sys.path.append('../')
from template_getter import *
cgi_form = cgi.FieldStorage()

def main():
	cgi_id = ""
	if "id" in cgi_form: cgi_id = cgi_form["id"].value
	print_html("toy")
	print cgi_id

if __name__ == '__main__':
	main()
