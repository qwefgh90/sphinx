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

LINQ(Language Integrated Query)
===============================

- **LINQ to Object.** 객체에서 데이터 조회

