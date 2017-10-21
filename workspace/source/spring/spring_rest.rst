.. _spring_rest:

=============
Rest API
=============

-------------------------
Rest(Restful Web Service)
-------------------------

Rest란 분산 시스템을 설계하기 위한 아키텍처 스타일이다. Rest는 표준은 아니지만 몇가지 제약사항을 제시하고 있다. 일반적으로 클라이언트가 웹 리스소(Resource)에 형식적이고 상태가 없는 연산들을 수행할 수 있게 한다.

RESTFul 아키텍처의 제약조건

1) Client-Server architecture
2) Stateless
3) Cacheability
4) Layered System
5) Uniform Interface
6) Code-On-Demend(Optional)

- Client-Server는 클라이언트와 서버의 관심을 분리하여, 서버의 확장성을 높이는 제약이다. 
- Stateless는 요청, 응답중에 상태를 저장하지 않아야 한다는 것이다. 요청에 모든 정보를 저장해야 한다.
- Cached는 클라이언트의 요청을 캐시로 제공하여 네트워크를 효율적으로 사용할 수 있게 하는것 이다.
- Layered System은 클라이언트가 서비스를 요청하였을때 어느 서버에 요청하였는지 알 수 없게 하여 서버의 확장성을 높이는 제약이다.
- Uniform Interface는 요청에 자원을 식별할 수 있는 식별자, 행위, Header를 이용해 메시지를 설명, HATEOAS는 요청에 대한 응답에서 클라이언트가 사용할 수 있는 행위에 대해 반환하게 하는 제약이다. `참고자료가 있다. <https://www.slideshare.net/trilancer/why-hateoas-1547275>`_
- Code-On-Demend는 서버가 클라이언트가 실행할 수 있는 코드를 주는 것 이다.

-------------------
JWT(JSON Web Token)
-------------------

시스템간 자료를 안잔하게 주고받는 방법을 제공해주는 표준이다. 크게 사용자 인증과 데이터 교환을 위해 사용된다.

토큰은 3가지 부분을 포함하고 있다.

- header
- payload
- signature: HMAC으로 생성된 값, 무결성 검증 및 인증에 사용될 수 있다.


