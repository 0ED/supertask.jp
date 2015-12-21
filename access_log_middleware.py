from bottle import request,response
from datetime import datetime

class AccessLogMiddleware(object):
	def __init__(self, app):
		self.app = app

	def log_after_request(self):
		try:
			length = self.response.content_length
		except:
			try:
				length = len(self.response.body)
			except:
				length = '???'
		log_line = 'MYLOG: {ip} - - [{time}] "{method} {uri} {protocol}" {status} {length}'.format(
			ip=request.environ.get('REMOTE_ADDR'),
			time=datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
			method=request.environ.get('REQUEST_METHOD'),
			uri=request.environ.get('REQUEST_URI'),
			protocol=request.environ.get('SERVER_PROTOCOL'),
			status=response.status_code,
			length=length,
		)
		log_line+='\n'
		with open('access.log','a+') as wf:
			wf.write(log_line)
		

	def __call__(self, e, h):
		ret_val = self.app(e, h)
		self.log_after_request()
		return ret_val
