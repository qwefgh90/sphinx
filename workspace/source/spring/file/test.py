import requests as rs
import json
token = 'a5402704b9bfed20e29d8140f7b54bd4a7ce70b54b4ad38248e884c915cebf2c'
def login() :
	url = 'http://127.0.0.1:8080/v1/auth/login'
	headers = {'X-Id' : 'qwefgh90', 'X-Password' : 'password'}
	res = rs.post(url, headers=headers)
	print res
	print res.headers

def register() :
	url = 'http://127.0.0.1:8080/v1/member'
	payload = {'id':'qwefgh90','password' : 'password','phone':'01073144993'}
	headers = {'Accept': 'application/json,text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8','Content-type':'application/json'}
	res = rs.post(url, data=json.dumps(payload), headers=headers)
	print res
	print res.headers
	print res.content
def logout():
	url = 'http://127.0.0.1:8080/v1/auth/logout'
        headers = {'X-Auth-Token' : token}
        res = rs.post(url, headers=headers)
        print res
        print res.headers

def hello():
	url = 'http://127.0.0.1:8080/v1/hello'
        headers = {'X-Auth-Token' : token}
        res = rs.get(url, headers=headers)
        print res
        print res.headers
	print res.content
	
if __name__ == '__main__':
        register();
	hello();
