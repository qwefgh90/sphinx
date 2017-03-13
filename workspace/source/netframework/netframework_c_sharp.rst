.. _netframework_c_sharp:

.. highlightlang:: c#

=========
 C# 기초
=========

C++에서 기능이 더 추가되서 C# 이라는 이름을 사용함. 2000년 6월에 만들어진 언어다.


네이밍 컨벤션
=============

1. PascalCasing Convention
- ClassName,MethodName,PropertyName,NamespaceName

2. camelCasing Convention
- VariableName

자료형
======

제공하는 자료형은 다음과 같다.

- Value type 값 형식 : stack
- Reference type 참조 형식 : heap

int는 Int32 구조체(struct)이다. string은 System.String의 약어이다.

값 형식
-------

상수 필드나 지역 상수::

  const int x = 0;
  private const string ProductName = "C#";

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

메서드
~~~~~~

클래스에서 계산이나 특정 동작을 수행하는 코드를 뜻한다.

매개변수를 전달하는 방법이 3가지 있다.

- **값 매개변수(value parameter)** : 기본값을 명시함으로써 선택적(optional) 매개변수를 사용할 수 있다. 
- **참조 매개변수(reference parameter)** : 결과값이 여러개 일때 사용(입력,출력값을 모두 사용할때)
- **출력 매개변수(output paramter)** : 결과값이 여러개일때 사용(호출자가 전달한 매개변수의 값이 중요하지 않을때, 함수 종료 시 출력 매개변수를 할당해야 함, 다른 매개변수와 달리 초기값이 없어도 됨)


메서드 오버로드
~~~~~~~~~~~~~~~

유일한 메서드 시그니처를 바탕으로 같은 메서드 이름을 사용할 수 있는 특징을 뜻한다.

명명된 인자
~~~~~~~~~~~

다음과 같이 인자에 이름을 붙여서 사용할 수 있다.::
  
  StopService(true, serviceID: 1)

예외처리
~~~~~~~~

예시::

  try{
    string a = "12345x";
    int x = Convert.ToInt32(a); //예외 발생
  }catch(Exception e){
    MessageBox.Show("Error: " + e.Message);
  }


References
==========

- C# 스펙: https://msdn.microsoft.com/en-us/library/ms228593.aspx
- 파라미터: https://msdn.microsoft.com/en-us/library/0f66670z.aspx
