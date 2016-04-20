.. _python_requests:

.. highlightlang:: python

.. _road_to_contributor:

**********************
Road to Contributor
**********************

*Requests* 오픈소스 활동 시작과 함께 진행한 내용을 정리한 글이다. 관련 `링크 <http://docs.python-requests.org/en/latest/dev/todo/>`_ 를 보면 커미터가 되는데 도움이 되는 글이 있다. 

.. _road_to_contributor_start:

============
환경 구축
============

소스코드 분석을 위해 설치한 툴은 다음과 같다.

- Sublime Text2 (Terminal Package)
- python 2.7
- pip

먼저 클론을 받은 후 테스트 환경을 구축하는게 우선이라 생각한다.

시작::

	git clone https://github.com/kennethreitz/requests.git
	pip install -r requirements.txt

*requirements.txt* 에 있는 패키지들을 설치하는 명령이다.

테스트::

	py.test

pytest를 이용해 파이썬 테스트를 시작한다. *test_* 접두사를 갖는 파일을 읽어들여 파이썬 테스트를 진행한다. test_requests.py이 테스트 코드이다.

=======================
Requests 모듈 정리
=======================

-------------------
14.12.29 (월)
-------------------

Requests 모듈은 크게 7가지 인터페이스를 제공한다. HTTP 라이브러리인 만큼 HTTP 메소드 별로 요청함수가 존재한다. request, head, get, post, put, patch, delete 이다. 

::

	requests.request(method, url, **kwargs)
		Constructs and sends a Request. Returns Response object.

	Parameters:	
		method – method for the new Request object.
		url – URL for the new Request object.
		params – (optional) Dictionary or bytes to be sent in the query string for the Request.
		data – (optional) Dictionary, bytes, or file-like object to send in the body of the Request.
		json – (optional) json data to send in the body of the Request.
		headers – (optional) Dictionary of HTTP Headers to send with the Request.
		cookies – (optional) Dict or CookieJar object to send with the Request.
		files – (optional) Dictionary of 'name': file-like-objects (or {'name': ('filename', fileobj)}) for multipart encoding upload.
		auth – (optional) Auth tuple to enable Basic/Digest/Custom HTTP Auth.
		timeout (float or tuple) – (optional) How long to wait for the server to send data before giving up, as a float, or a (connect timeout, read timeout) tuple.
		allow_redirects (bool) – (optional) Boolean. Set to True if POST/PUT/DELETE redirect following is allowed.
		proxies – (optional) Dictionary mapping protocol to the URL of the proxy.
		verify – (optional) if True, the SSL cert will be verified. A CA_BUNDLE path can also be provided.
		stream – (optional) if False, the response content will be immediately downloaded.
		cert – (optional) if String, path to ssl client cert file (.pem). If Tuple, (‘cert’, ‘key’) pair.

출처는 `requests interface <http://docs.python-requests.org/en/latest/api/#requests.request>`_ 이다. 위에서 method에 http 메서드를 입력해도 되고 전용 함수인 head, get, post, patch, delete를 사용해도 된다. 모든 요청 함수는 위 인터페이스 명세의 *optional* 파라미터들을 사용할 수 있다.

1)params

2)data

3)json

4)headres

5)cookies

6)files

7)auth

`Basic access authentication <http://en.wikipedia.org/wiki/Basic_access_authentication>`_ , `Digest access Athentication <http://en.wikipedia.org/wiki/Digest_access_authentication>`_

8)timeout

커넥션 타임아웃 또는 데이터를 읽어들일때의 타임아웃을 튜플 또는 실수형으로 입력할 수 있다.




