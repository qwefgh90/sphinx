.. _spring_rest:

=============
Rest API
=============

------
Rest
------

Rest(Representational State Transfer) 아키텍처는 WWW와 같이 하이퍼미디어 시스템을 위한 소프트웨어의 한 아키텍처이다. Web API 모델로 각광 받고 있다.

RESTFul 아키텍처의 제약조건

1) Client-Server
2) Stateless
3) Cached
4) Uniform Interface
5) Layered System
6) Code-On-Demend

Client-Server는 클라이언트는 UI 서버는 기능을 담당하여야 한다는 특징이다. Stateless는 서버는 클라이언트의 상태를 저장하지 않아야 한다는 것이고 Cached는 클라이언트의 요청을 캐시로 제공하여 네트워크를 효율적으로 사용할 수 있게 하는것 이다.

Uniform Interface는 Resources의 주소를 통일성있게 작성하고 Method와 Header를 이용해 자기 자신을 잘 서술하는 것이고 Layered System은 클라이언트가 서비스를 요청하였을때 어느 서버에 요청하였는지 알 수 없도록 투명한 분산 시스템을 구현해야한다는 것이다. 마지막으로 Code-On-Demend는 서버가 클라이언트가 실행할 수 있는 코드를 줄 수 있는것이다.



