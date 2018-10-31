.. _scala_terms:

.. highlightlang:: scala

=============
 용어
=============

일급 계층 시민(First-class citizen)
===================================

프로그래밍 언어에서 `일급 계층 시민 <https://en.wikipedia.org/wiki/First-class_citizen>`_ 이란 사회 계급에 빗대 인자값, 반환값, 변수 할당에 사용 가능한 존재를 뜻한다. 숫자, 문자열, 배열, 객체, 함수등이 있을 수 있다.

일급 계층 함수(First-class functions)
=====================================

프로그래밍 언어에서 `일급 계층 함수 <https://en.wikipedia.org/wiki/First-class_function>`_ 란 일급 계층 시민으로 다뤄지는 함수를 뜻한다. 다른 함수의 인자와 반환값으로 사용할 수 있으며 변수에 할당 할 수 있다.

.. _scala_terms_제네릭_클래스:

제네릭 클래스/트레이트(Generic class/trait)
===========================================

타입 생성자(type constructor)라고 불리우며, 타입 파라미터를 받을 수 있는 포괄적인 클래스나 트레이트를 제네릭 클래스/트레이트라고 부른다.

.. _scala_terms_파라미터화된_타입:

파라미터화된 타입(Parameterized type)
=====================================

파라미터화된 타입은 :ref:`제네릭 클래스 <scala_terms_제네릭_클래스>` 에 파라미터 타입을 인자로 넘겨서 생성된 타입을 뜻한다.


.. _scala_terms_서브타이핑:

서브타이핑(Subtyping)
=====================

`서브타이핑 <https://en.wikipedia.org/wiki/Subtyping>`_ 이란 타입 다형성의 한 종류로서 슈퍼타입(supertpye)과 동작하는 프로그램 요소에서 서브타입(subtype)을 쓸 수 있는 것을 의미한다. 만약 S가 T의 서브타입이라면 서브 타이핑 관계는 **S<: T** 로 나타내고 이는 타입 T가 사용되는 문맥에서 타입 S를 안전하게 사용할 수 있다는 의미를 갖는다. 부모로 치환 가능성이 있을때 서브타입이라 할 수 있다.

.. _scala_terms_변성:

변성 (Variances)
====================

어떤 타입 파라미터의 공변, 반공변, 무공변 여부를 변성이라고 한다.

.. _scala_terms_참조_투명성:

참조 투명성(referentially transparent)
======================================

참조 투명성이란 표현식의 속성 중 하나로써, 표현식 e의 모든 출현(occurrence)을 표현식의 평가 결과로 치환해도 프로그램 p에 아무런 영향을 주지 않는다면, 표현식 e는 참조에 투명하다고 한다.

.. _scala_terms_순수_함수:

순수 함수(pure function)
========================

표현식 *f(x)가* 모든 x에 대해 참조에 투명하다면 함수 f는 순수 함수(pure function)이다.

예시는 다음과 같다.::
  
  def buyCar(c: Card): Car = {
    val car = new Car()
    c.charge(car) // 사이드 이펙트
    car
  }
  
위 함수가 순수함수가 아님을 증명하려면 p가 프로그램이라 할때 p(buyCar(myCard)) == p(new car) 가 동일하게 동작함을 증명해야한다. buyCar() 내부의 charge() 함수가 카드사에 대금을 청구하는 부수효과를 갖고 있으므로 buyCar() 는 순수함수가 아니다.

두번째 예시 다음과 같다.::

  val str1 = builder.toString
  builder.append("Hello World")
  val str2 = builder.toString
  builder.append("It's Appended")
  val str3 = builder.toString
  str1 == str2
  str1 == str3

append()가 순수함수라면 호출한 뒤에 str1과 str2과 str3는 같아야 한다. 하지만 서로 다르므로 순수함수라 할 수 없다. append()는 StringBuilder를 제자리(in place) 조작한다.


표현식(expression)
==================

표현식은 변수, 연산, 함수, 괄호로 구성된 조합을 뜻한다.

참조
====

- 표현식: https://en.wikipedia.org/wiki/Expression_(mathematics)
- 스칼라로 배우는 함수형 프로그래밍(제이펍)
- 
