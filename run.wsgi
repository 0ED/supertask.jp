#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys,os
# Change working directory so relative paths (and template lookup) work again
dirpath = os.path.dirname(os.path.abspath(__file__))
sys.path.append(dirpath)
os.chdir(dirpath)

import bottle
# ... build or import your bottle application here ...
# Do NOT use bottle.run() with mod_wsgi
import supertask
application = bottle.default_app()
