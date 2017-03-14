.. _netframework_c_sharp:

.. highlightlang:: c#

=========
 C# 기초
=========

C++에서 기능이 더 추가되서 C# 이라는 이름을 사용함. 2000년 6월에 만들어진 언어다.


네이밍 컨벤션
=============

1. PascalCasing Convention
- all **public** member, type, namespace

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

형변환은 반드시 *Type Cast Operator* 나 메서드를 이용해서 명시적으로 형변환을 해야한다.::
  
  long b = 3;
  int a = (int)b;
  string c = "hello";
  a = int.Parse(c);
  a = Convert.ToInt32(c);

문자열
-----------

연결::
  
  string s = "hello" + "world"

Escape sequence는 특수문자를 나타낼때 사용한다.

문자열에서 Escape sequence를 사용하고 않고 문자 그대로를 사용하고 싶다면 *@* 을 문자, 문자열 리터럴 앞에 붙이면 된다.

정규표현식 예시는 다음과 같다.::
  
  var textToTest = "hell0 w0rld";
  
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

- 정적 클래스: 오직 정적 멤버만 갖는 클래스를 뜻한다.

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

속성,프로퍼티(Properties)
~~~~~~~~~~~~~~~~~~~~~~~~~

객체나 클래스의 데이터에 접근할때 사용하는 멤버이다. 사용하는 방법이 필드와 비슷하다. 프로퍼티는 *별도의 저장소를 갖고 있지 않으며 항상 접근자(accessors)를 통해서 값에* 접근한다.

*자동 구현 속성(Automatically implemented properties)* 는 숨겨진 필드를 만들고 접근자로 필드를 접근하도록 자동 구현되는 속성이다.

아래 2개의 클래스는 같은 의미를 지닌다.::
 
  public class Point {
    public int X = { get; set; } //자동 구현
    public int Y = { get; set; } //자동 구현
  }

  public class Point {
    public int x;
    public int y;
    public int X = { get { return x; } set { x = value; } } 
    public int Y = { get { return y; } set { y = value; } } 

  }

*자동 구현 속성* 은 읽기전용, 쓰기전용이 허락되지 않는다.

접근자(Accessors)
~~~~~~~~~~~~~~~~~

접근자에는 프로퍼티를 읽고 쓸때 실행되는 코드가 정의되어 있다.

메서드 오버로드
~~~~~~~~~~~~~~~

유일한 메서드 시그니처를 바탕으로 같은 메서드 이름을 사용할 수 있는 특징을 뜻한다.

명명된 인자
~~~~~~~~~~~

다음과 같이 인자에 이름을 붙여서 사용할 수 있다.::
  
  StopService(true, serviceID: 1)

이벤트(Event)
~~~~~~~~~~~~~

객체나 클래스에서 알림을 주고 싶을때 사용하는 클래스의 멤버이다. 이벤트가 발생할 경우 등록된 *이벤트 핸들러(Event Handler)* 가 호출된다.

**반드시 이벤트는 대리자(delegate) 타입이여야 한다.**::
  
  class ...{
    delegate void MyEventHandler (object sender, EventArgs e);//대리자 선언
    public event MyEventHandler MyClick;//대리자 타입의 이벤트 멤버 선언
  }

대리자(delegate)
----------------

대리자는 *1개 이상의 메서드의 참조값과 인스턴스를 함께 저장하는 데이터 타입* 이다. 내부적으로 System.Delegate를 상속받은 클래스이다.

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

접근 한정자(Accessibility)
--------------------------

- **public.** 접근에 제한이 없음
- **protected.** 파생된 타입이나 현재 클래스에서 접근 가능
- **protected internal.** 파생된 타입이나 현재 어셈블리에서 접근 가능
- **internal.** 현재 어셈블리에서 접근 가능
- **private.** 현재 클래스에서만 접근 가능

클래스, 구조체와 같은 타입과 네임스페이스는 *public* 이나 *internal* 접근 한정자를 사용할 수 있다. 클래스 멤버는 5가지 종류의 접근 한정자를 갖을 수 있다.

타입은 기본적으로 *internal* 접근 한정자를 갖는다. (클래스의 멤버로 선언된 타입은 제외)

클래스 멤버는 기본적으로 *private* 접근자를 갖는다.

네임 스페이스는 한정자를 사용할 수 없다.


예외처리
========

예시::

  try{
    string a = "12345x";
    int x = Convert.ToInt32(a); //예외 발생
  }catch(Exception e){
    MessageBox.Show("Error: " + e.Message);
  }


LINQ(Language Integrated Query)
===============================

- **LINQ to Object.** 객체에서 데이터 조회

Collection
==========

- List<T>
- Dictionary<K,V>
- Stack<T>
- Queue<T>


References
==========

- C# 스펙: https://msdn.microsoft.com/en-us/library/ms228593.aspx
- 파라미터: https://msdn.microsoft.com/en-us/library/0f66670z.aspx
