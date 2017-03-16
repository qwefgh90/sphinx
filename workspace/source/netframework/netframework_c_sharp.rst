.. _netframework_c_sharp:

.. highlightlang:: c#

=========
 C# 기초
=========

C++에서 기능이 더 추가되서 C# 이라는 이름을 사용함. 2000년 6월에 만들어진 언어다.


네이밍 컨벤션
=============

1. PascalCasing Convention
- **all public member**, type, namespace

2. camelCasing Convention
- parameter names

자료형
======

제공하는 자료형은 다음과 같다.

- Value type 값 형식
- Reference type 참조 형식

int는 Int32 구조체(struct)이다. string은 System.String의 약어이다.

값 형식
-------

상수 필드나 지역 상수로 사용할 수 있으며 simple::

  const int x = 0; // only used for simple types 
  private readonly string ProductName = "C#"; //computed at compile-time

문자

- **char.** 2byte unicode

숫자 

- **short.** 2bytes
- **int.** 4bytes
- **long.** 8bytes

실수

- **float.** 4bytes
- **double.** 8bytes
- **decimal.** 16bytes

불리언

- **bool.** 1byte

signed vs unsigned

- 음수: 2의 보수법으로 생성

형변환
-------

형변환은 반드시 *Type Cast Operator* 나 메서드를 이용해서 명시적으로 형변환을 해야한다. 참조 타입의 경우 xas 키워드를 사용해서 변환할 수 있다.::
  
  long b = 3;
  int a = (int)b;
  string c = "hello";
  a = int.Parse(c);
  a = Convert.ToInt32(c);

문자열
-----------

연결::
  
  string s = "hello" + "world";

Escape sequence는 특수문자를 나타낼때 사용한다.

문자열에서 Escape sequence를 사용하고 않고 문자 그대로를 사용하고 싶다면 *@* 을 문자, 문자열 리터럴 앞에 붙이면 된다.

배열
----

System.Array의 메서드와 필드를 사용할 수 있다.

예시::
 
  int[] ar = new Int[10];
  int[] ar1 = {1,2,3};
  int[,] ar2 = new int[2,2];
  int[,] ar3 = new int[2,2]{{1,2},{3,4}};
  int[,] ar4 = new int[,]{{1,2},{3,4}};
  
정렬::
  
  Array.Sort(ar1); //Call static method
  
복사::

  ar1.Clone(); //Call instance method

기타::

  Array.Clear(ar,0,ar.Length);

클래스
------

클래스는 데이터와 데이터의 연산을 함께 저장하는 데이터 구조이다. (속성, 이벤트, 연산자, 생성자도 갖는다.)

- 정적 클래스: static 한정자(Modifier)를 갖으며 오직 정적 멤버만 갖고 인스턴스 생성이 안되는 클래스를 뜻한다.

생성자
~~~~~~

인스턴스 생성자는 클래스의 인스턴스의 초기화 코드를 정의한 멤버이다.

메서드
~~~~~~

클래스에서 계산이나 특정 동작을 수행하는 코드를 뜻한다. 메서드는 정적 메서드놔 인스턴스 메서드로 나눠진다.

매개변수를 전달하는 방법이 3가지 있다.

- **값 매개변수(value parameter)** : 기본값을 명시함으로써 선택적(optional) 매개변수를 사용할 수 있다. 
- **참조 매개변수(reference parameter)** : 결과값이 여러개 일때 사용(입력,출력값을 모두 사용할때)
- **출력 매개변수(output paramter)** : 결과값이 여러개일때 사용(호출자가 전달한 매개변수의 값이 중요하지 않을때, 함수 종료 시 출력 매개변수를 할당해야 함, 다른 매개변수와 달리 초기값이 없어도 됨)

확장 메서드(Extension method)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

클래스에 없는 기능을 추가할때 사용할 수 있는 멤버이다.

첫번째 파라미터에 *this 한정자를* 갖고 포인터는 파라미터 타입으로 사용할 수 없다. 확장 메서드는 제네릭이나 중첩 클래스에서는 사용할 수 없다. 기존의 클래스에 없는 기능을 확장할때 좋다. (스칼라의 암시적 변환과 유사함)


.. _netframework_c_sharp_속성:

속성,프로퍼티(Properties)
~~~~~~~~~~~~~~~~~~~~~~~~~

객체나 클래스의 데이터에 접근할때 사용하는 멤버이다. 사용하는 방법이 필드와 비슷하다. 프로퍼티는 **별도의 저장소를 갖고 있지 않으며 항상 접근자(accessors)를 통해서 값에** 접근한다.

*자동 구현 속성(Automatically implemented properties)* 는 숨겨진 필드를 만들고 접근자로 필드를 접근하도록 자동 구현되는 속성이다.

아래 2개의 클래스는 같은 의미를 지닌다.::
 
  public class Point {
    public int X { get; set; } //자동 구현
    public int Y { get; set; } //자동 구현
  }

  public class Point {
    public int x;
    public int y;
    public int X { get { return x; } set { x = value; } } 
    public int Y { get { return y; } set { y = value; } } 

  }

*자동 구현 속성* 은 읽기전용, 쓰기전용이 허락되지 않는다.

이벤트(Events)
~~~~~~~~~~~~~~

객체나 클래스에서 알림을 주고 싶을때 사용하는 클래스의 멤버이다. 이벤트가 발생할 경우 등록된 *이벤트 핸들러(Event Handler)* 가 호출된다.

**반드시 이벤트는 대리자(delegate) 타입이여야 한다.**::
  
  class ...{
    delegate void MyEventHandler (object sender, EventArgs e);//대리자 선언
    public event MyEventHandler MyClick;//대리자 타입의 이벤트 멤버 선언
  }

인덱서(Indexers)
~~~~~~~~~~~~~~~~

배열과 같이 객체의 데이터를 인덱스를 통해서 접근하도록 해주는 멤버이다. 인덱서는 멤버의 이름이 **[ ] 구분자로 묶인 파라미터 리스트 가 따르는 this** 라는 점을 제외하고 :ref:`속성 <netframework_c_sharp_속성>` 과 유사하다.

소멸자(Destructors)
~~~~~~~~~~~~~~~~~~~

인스턴스가 제거될때 호출되는 코드를 정의한 멤버이다.

대리자(delegate)
----------------

대리자는 **1개 이상의 메서드의 참조값과 인스턴스를 함께 저장하는 데이터 타입** 이다. 내부적으로 System.Delegate를 상속받은 클래스이다.

대리자는 내부적으로 **호출 리스트(invocation list)** 를 사용하여 1개 이상의 메서드를 저장한다. *각각의 메서드는 호출가능한 개체(callable entity)로* 불린다. *인스턴스 메서드* 를 위해 객체와 인스턴스로 구성된 호출가능한 개체를 저장하며 *정적 메서드* 를 위해서는 메서드로 구성된 호출가능한 개체를 저장한다.

예시::

  delegate void MyDelegate(string s);
  MyDelegate d;
  d += (string s) => Console.Write("Hi " + s);
  d += new MyDelegate(Hello) // 대리자의 생성자에 메서드를 넣어서 사용할 수 있음
  d += Hello // 정적 메서드를 사용할 수 있음
  d += delegate(){}
  d("changwon");

열거형(Enumeration)
-------------------

이름있는 상수를 뜻한다. 열거형은 값 타입의 한 종류이다.

구조체
------

클래스와 유사하게 필드와 함수를 갖는 데이터 타입이다. 클래스와 달리 힙 할당을 하지 않고 참조값이 아닌 **직접 데이터의 구조를 저장** 한다. 기본적으로 구조체는 internal, 필드는 private을 사용한다.

인터페이스
----------

인터페이스는 기능에 대한 계약(contract)이다. .NET Remoting, WCF에서 원격 메서드 호출을 위해 인터페이스가 사용된다. 구현을 공개하지 않고 인터페이스만 제공함으로써 보안성도 제공한다.

보통 **대문자 I** 로 시작한다.

인터페이스를 구현한 클래스에서 **명시적 또는 암시적으로** 멤버를 구현할 수 있다.

**암시적 구현은** 다음과 같다.::

  interface IBeverage
  {
    int GetTemp();
    void Paint();
  }
  
  class Coffee : IBeverage
  {
    public int GetTemp(){ return 0;}
    public void Paint()
    {

    }
  }

**명시적 구현은** 다음과 같다.::
  
  interface IBeverage
  {
    int GetTemp();
    void Paint();
  }
  
  class Coffee : IBeverage
  {
    int IBeverage.GetTemp(){ return 0;}
    void IBeverage.Paint()
    {

    }
  }

인터페이스 멤버의 명시적 구현은 크게 2가지 목적으로 사용된다.

- 인터페이스 멤버의 명시적 구현이 클래스 구현으로 부터 제외되기 때문에, 클래스 사용자 입장에서 인터페이스 메서드가 필요 없을 경우에 유용하다.
- 다중 상속을 하였을때 여러개의 동일한 메서드 시그니처를 사용할 수 있다.

명시적 구현은 *인터페이스 인스턴스를* 통해서만 호출이 가능하다. 위의 예제에서 Coffee 클래스를 IBeverage 타입으로 형변환 한 뒤 구현된 메서드를 호출할 수 있다. 또한 *접근 한정자* 를 사용할 수 없다. 그리고 *abstract, virtual, override, static* 도 사용할 수 없다.

또한 명시적 구현은 메서드의 전체 이름으로 호출할 수 없다. 따라서 private멤버로 보이지만 *인터페이스 인스턴스를* 사용하면 public 멤버처럼 접근할 수 있다. 


접근자(Accessors)
-----------------

접근자에는 프로퍼티를 읽고 쓸때 실행되는 코드가 정의되어 있다.

메서드 오버로드
---------------

유일한 메서드 시그니처를 바탕으로 같은 메서드 이름을 사용할 수 있는 특징을 뜻한다.

명명된 인자
-----------

다음과 같이 인자에 이름을 붙여서 사용할 수 있다.::
  
  StopService(true, serviceID: 1)

접근 한정자(Accessibility)
--------------------------

- **public.** 접근에 제한이 없음
- **protected.** 파생된 타입이나 현재 클래스에서 접근 가능
- **protected internal.** 파생된 타입이나 현재 어셈블리에서 접근 가능
- **internal.** 현재 어셈블리에서 접근 가능
- **private.** 현재 클래스에서만 접근 가능

클래스, 구조체와 같은 타입은 *public* 이나 *internal* 접근 한정자를 사용할 수 있다. 클래스 멤버는 5가지 종류의 접근 한정자를 갖을 수 있다. 네임 스페이스는 한정자를 사용할 수 없다.

**기본 접근 한정자는 다음과 같다.**

- 타입은 기본적으로 *internal* 접근 한정자를 갖는다. (클래스의 멤버로 선언된 타입은 제외)

- 클래스 멤버는 기본적으로 *private* 접근자를 갖는다.




예외처리
========

예시::

  try{
    string a = "12345x";
    int x = Convert.ToInt32(a); //예외 발생
  }catch(Exception e){
    MessageBox.Show("Error: " + e.Message);
  }

타입 파라미터
=============

*제네릭 타입(generic type)*, *언바운드 제네릭 타입(unbound generic type), 제네릭 클래스, 제네릭 인터페이스* 은 타입 인자를 전달하여 다른 타입을 생성할때 사용된다. 다른 언어에서는 :ref:`제네릭 클래스/트레이트 <scala_terms_제네릭_클래스>` 처럼 해석되기도 한다.

타입 인자가 전달된 경우 *생성된 타입(constructed type)* 이라 불린다. 또는 *파라미터화된 타입* 라고 불린다.

타입 파라미터는 클래스의 멤버의 타입을 정의하기 위해 클래스에 명시할 수 있다.


상속(Inheritance)
=================

이미 만들어 놓은 클래스의 멤버를 재사용할때 사용한다. 베이스 클래스로부터 접근 한정자에 상관없이 생성자, 소멸자, 정적 생성자를 제외하고 **모든 멤버를 상속 받는다.** 또한 상속은 전이되기 때문에 베이스 클래스의 베이스 클래스의 멤버도 상속받는다.

용어

- Super class <-> Sub class (자바)
- Base class <-> Derived class (C++, C#)
- Parent class <-> Child class

특징

- 파생 클래스를 베이스 클래스 타입으로 바꿀 경우 암시적 변환이 일어난다. 즉 파생클래서의 인스턴스는 베이스 클래스의 타입처럼 다룰 수 있다.
- virtual 클래스를 사용하지 않을 경우 같은 이름과 같은 시그니처를 갖는 메서드를 만들어서 베이스 클래스의 멤버를 **숨길 수(hide)** 있다.
- virtual 키워드를 통해 메서드, 프로퍼티, 인덱서를 재정의 할 수 있다. 이는 *다형성(polymorphic)* 동작을 할 수 있게 해준다. 즉 메서드를 호출하는 시점의 인스턴스 타입에 따라 실제 호출되는 메서드를 다르게 할 수 있다는 뜻이다.

재정의(override) 관련 키워드

- override : 베이스 클래스의 메서드를 *오버라이드* 할때 사용할 수 있다.
- virtual : 파생 클래스에서 재정의할 경우 메서드를 *오버라이드* 가능하게 한다. 이 키워드는 *다형성 동작을* 할 수 있게 한다.


추상 클래스와 메서드
---------------------

abstract 라는 한정자를 쓸 경우 *추상 메서드(abstract method)* 라고 불린다. 추상 메서드는 virtual 한정자가 암시적으로 들어가므로 virtual 키워드를 사용할 수 없다.

추상 메서드는 *추상 클래스(abstract class)에서만* 선언할 수 있다. 추상 클래스의 추상 클래스가 아닌 파생 클래스는 반드시 추상 메서드를 오버라이드 해야한다.

봉인 클래스(sealed class)
-------------------------

sealed 한정자는 파생 클래스를 만들지 못하게 막는다. sealed는 추상 클래스에 사용할 수 없다.

목적
- 의도치 않은 상속을 막을 수 있으며 **런타임 최적화를 가능하게 한다.**


구문(statement)
===============

foreach
-------

foreach는 콜렉션(Collection)의 원소를 열거하고 각 원소를 열거할때마다 내장된 구문을 실행하는 구문이다.

Collection
==========

자주 사용하는 제네릭이다.

- List<T>
- Dictionary<K,V>
- Stack<T>
- Queue<T>

익명 함수 표현
==============

예시::

  (param) => expr
  param => expr


LINQ(Language Integrated Query)
===============================

LINQ는 에릭 마이어가 만든 C#의 통합 질의 기술들의 집합이다.

종류

- **LINQ to Object.**
- **LINQ to DataSet.**
- **LINQ to XML.**
- **LINQ to Entity.**
- **LINQ to SQL.**

쿼리 표현(Query Expressions)
----------------------------

예시::

  var num = 1
  var a = from a in db.Employees
          where a.id = num
          select a


익명 타입(Anonymous type)
-------------------------

컴파일러에 의해서 자동 생성되며 프로그럄에서 참조될 수 없는 타입을 뜻한다. 프로퍼티의 이름과 순서가 같을 경우 같은 타입에 대한 인스턴스가 생성된다.

예시::

  var p1 = new { Name = "Changwon", Country = "Korea" };



References
==========

- C# 스펙 : https://msdn.microsoft.com/en-us/library/ms228593.aspx
- 파라미터 : https://msdn.microsoft.com/en-us/library/0f66670z.aspx
- LINQ : https://msdn.microsoft.com/en-us/library/bb308959.aspx
