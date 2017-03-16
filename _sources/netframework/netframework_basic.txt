.. _netframework_basic:

================
 .NET Framework
================

App.config
==========

- Framework 버전

메모리 구조
===========

- Kernel
- Shared object
- Application

Application의 메모리 구조

- Stack(Data Segment)
- Heap
- Static Data Area
- Code (Code Segment)

Heap은 CLR에서 제거한다.

로깅, 추적 및 성능 진단
=======================

- 윈도우 이벤트 로그 (관리도구 - 이벤트 뷰어 - Windows 로그 - 응용프로그램)
- Debug.Assert를 활용한 디버그 (VS의 Debug 모드에서 사용가능)
- Debug.WriteLine를 활용한 추적 (VS의 Debug 모드)
- Trace.WriteLine를 활용한 추적 (VS의 Debug, Release 모드)
- Visual Studio의 [분석 - 성능 및 진단]을 사용해서 성능 분석
- `PerformanceCounter <https://msdn.microsoft.com/ko-kr/library/system.diagnostics.performancecounter(v=vs.110).aspx>`_ 객체와 성능 모니터를 활용한 성능 분석 (관리도구 - 성능 및 모니터)

IL 디스어셈블러
===============

ildasm을 통해 타입정보 및 참조정보를 확인할 수 있다. 

[VS2013용 개발자 명령 프롬프트] - ildasm 실행


단위 테스트
===========

1) 테스트 프로젝트를 추가해야한다.

- [솔루션] -> [추가] -> 테스트 프로젝트 추가

2) 다른 프로젝트를 테스트하기 위해서 참조를 추가를 해야한다.

- [참조 추가] -> [솔루션] -> [프로젝트] -> 프로젝트 선택

3) 테스트 실행

- [테스트] -> [실행] -> 테스트 선택

DLL 만들기
==========

클래스 라이브러리 프로젝트를 만들어서 DLL을 만들 수 있다.

TaskList
========

TaskList를 이용해서 Visual Studio에서 진행할 작업을 넣을 수 있다.


FILE I/O
========

- **File.** 정적 메서드를 멤버로 갖음
- **FileInfo.** 인스턴스화 해서 사용함
- **Directory.** 정적 메서드를 멤버로 갖음
- **DirectoryInfo.** 인스턴스화 해서 사용함
- **Path.** 패스 유틸리티 클래스
- **FileStream.** 이미지나 사운드 파일
- **StreamReader/StreamWriter.** 텍스트 파일
- **BinaryReader/BinaryWriter.** 바이너리 파일

직렬화
======

[Serializable] 이라는 속성을 이용해 객체 직렬화가 가능하다. 바이너리, XML, Json등으로 직렬화가 가능하다.

- **BinaryFormatter.** 바이너리 데이터로 직렬화
- **SoapFormatter.** SOAP 형식의 데이터로 직렬화
- **DataContractJsonSerializer.** Json 형식의 데이터로 직렬화

XML 처리
========

- **XmlTextReader/XmlTextWriter.**

데이터베이스
============

- **ADO.NET class.**
- **ADO.NET Entity Framework.**
- **LINQ to SQL.**


ADO.NET Entity Framework
------------------------

**데이터 기반(Data oriented) 소프트웨어를 개발할때** 필요한 기술의 집합이다. 

ADO.NET 엔터티 추가

- [새 항목] - [데이터] - [ADO.NET 엔터티 데이터 모델] - [데이터베이스의 EF Designer] - DB 연결 정보 입력 및 테이블 선택

엔터티를 추가하면 edmx 라는 파일이 생성되고 이 파일에서 객체 - 테이블의 관계를 확인할 수 있다. 모델 클래스도 같이 생성된다.

간단하게 엔터티 인스턴스를 만들어서 데이터를 조회할 수 있다.::

  MyEntity e = new MyEntity();
  var result = e.Employees.FirstOrDefault();

데이터 저장::

  r.FirstName = "Choe";
  db.SaveChnages();

간단한 HTTP 통신
------------------------

HTTP 요청::

  HttpWebRequest request = WebRequest.Create("http://www.naver.com") as HttpWebRequest;
  HttpWebResponse response = request.GetResponse() as HttpWebResponse;
  //Response
  System.IO.Stream s = response.GetResponseStream();

WCF(Windows Communication Foundation)
-------------------------------------

응용 프로그램에서 여러 컴퓨터와 비동기적으로 통신할 수 있도록 해주는 프레임워크이다. 

WCF로 여러가지 서비스를 구성할 수 있다.

- WCF Service
- WCF Data Service

WCF Data Service(ADO.NET Data Services)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

REST를 사용하여 WWW을 통해 데이터를 제공하는 하나의 컴포넌트이다.

절차

1) 먼저 ASP.NET 웹 프로젝트를 만들어야 한다.
2) 새 항목 추가 - WCF Data Service를 추가한다.
3) 새 항목 추가 - ADO.NET 엔터티 데이터 모델 추가한다.
4) DataService의 타입 파라미터로 생성된 엔터티 타입을 전달한다.
5) InitializeService 메서드에서 권한 설정을 한다.
6) 오퍼레이션(메서드)을 생성하고 *SetServiceOperationAccessRule* 에서 메서드를 등록한다. (메서드 생성시 적절한 속성(attribute)을 줘야한다. [WebGet], [SingleResult])

WCF Client
~~~~~~~~~~

WCF Data Service 접속

1) Winform 프로젝트 생성
2) 서비스 참조 추가
3) 네임스페이스 추가
4) LINQ 쿼리로 데이터 조회

Reference
=========

- WCF Data Service : https://msdn.microsoft.com/en-us/library/cc668792(v=vs.110).aspx

