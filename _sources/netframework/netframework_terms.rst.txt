.. _netframework_terms:


======
 용어
======


.NET Framework
==============

CLR과 Class Libray로 구성된다.

.NET Framework 예시
===================

Console ,Windows Forms ,WPF ,Class Library, ASP.NET Web, ASP.NET MVC, WCF Service


.NET Framework 버전
===================

버전 VS 윈도우 특징 
1.0, 1.1 / 2002, 2003 / Windows 2003
2.0 / 2005 / - / Generic
3.0 / - / - / WPF, WCF
3.5 / 2008 / Windows 2008, 7 / LINQ
4.0 / 2010 / -
4.5,4.51 / 2012, 2013 / Windows 2012, 8 / Windows Store App(Windows 8) /
4.6 / 2015 / - / -
\- / 2017 / - / -


CLR(Common Language Runtime)
============================

코드가 실행되는 전반적인 환경을 제공한다. 공용 언어런 타임이라 불린다. JIT 컴파일러를 제공한다.

- **기계어까지.** .cs => 빌드(Compile/Link) => .exe (MSIL Code) => JIT Compiler(처음 한번만) => Machine code (natvie code)

Class Library
=============

많은 언어를 지원하지만 동일한 클래스를 참조한다.

코드 비교 ::
  string s = "hello"; //System.String
  int i = 10; //System.Int32

  Dim s as string = "hello"
  Dim i as Integer = 10

네임 스페이스
=============

코드 ::

    namespace System
    {
      class String{}
      namespace IO
      {
        class StringWriter
        {
      
        }
      }
    }

Managed Code, Unmanaged Code
============================

CLR이 관리하는 코드는 Managed Code 아닐경우 Unmanaged Code가 된다.
