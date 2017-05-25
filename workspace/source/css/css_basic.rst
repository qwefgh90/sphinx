.. _java_basic:

.. highlightlang:: css

==========
 CSS 기본
==========

CSS 스펙
========

:ref:`CSS` 는 HTML, XML과 같은 구조화된 문서를 어떻게 화면에 보여줄지 기술하는 언어이다. CSS는 W3C의 CSS 워킹 그룹에서 스펙을 정의하고 있다. `CSS 스펙 테이블 <https://www.w3.org/Style/CSS/current-work>`_ 을 참조하면 안정화된 스펙들을 묶어 CSS Snapshot 2017로 발표된 것을 확인할 수 있다.

CSS Level 1과 CSS Level 2는 각각 하나의 스펙 문서로 정의되었지만 *CSS Level 3* 부터는 Level 2를 기반으로 각 CSS 특징별로 모듈화하여 스펙 문서가 작성되고 있다. 이 모듈은 CSS 2.1의 각 부분을 대체하고 있다.

CSS 기본
========

CSS 규칙의 각 부분을 설명하고 있다.::

   h1 { /* h1은 셀렉터과 선언들(declarations)로 구성됨  */
     color: green; /* 선언(declaration)은 프로퍼티 이름, 값으로 구성되고 세미콜론으로 구분됨 */
   }

여러개의 CSS 규칙이 어떻게 마크업에 적용될지는 HTML 스펙에서 정의하고 있다.

HTML 문서 내에서는 LINK 요소(element)를 이용해 외부 CSS와 연결된다.

.. code-block:: html
                
   <HTML>
      <HEAD>
         <LINK rel="stylesheet" href="bach.css" type="text/css">
      </HEAD>
      <BODY>
      </BODY>
   </HTML>

STYLE 요소를 사용하면 HTML 문서에 삽입할 수 있다.::

   <HTML>
      <HEAD>
         <STYLE type="text/css">
            h1 { color: green }
         </STYLE>
      </HEAD>
      <BODY>
      </BODY>
   </HTML>

CSS 2.1 주소 지정 모델 (addressing model)
----------------------------------------

브라우저(user agent)와 문서(document)에서 CSS 2.1 셀렉터(Selector)와 프로퍼티가 나타낼 수 있는 부분은 다음과 같다.

- 요소와 요소들 간의 관계
- 각 요소의 특성(attributes)와 그 특성의 값
- 몇몇 요소의 일부분
- 특정 상태를 갖는 요소(Element)
- 몇몇 캔버스(canvas)의 관점
- 몇몇 시스템의 정보

캔버스(canvas)란 미디어에서 서식 구조(formatting structure)가 렌더링되는 공간을 뜻한다.

CSS 2.1 처리 모델 (processsing model)
-------------------------------------

브라우저(유저 에이전트)가 CSS와 HTML 문서를 처리하는 절차는 다음과 같다.

1. HTML 문서를 분석하고 문서 트리(Document tree)를 생성한다.
2. 미디어 타입(media type)을 확인한다. (미디어 타입은 화면, 종이 등이 있음)
3. 대상이 되는 미디어 타입과 문서와 연관된 모든 스타일시트(style sheets)를 가져온다.
4. 캐스캐이딩과 상속 매커니즘에 따라 모든 프로퍼티에 값을 할당한다. (이때 대상에 적용 가능한 프로퍼티만)
5. 문서의 모든 요소에 프로퍼티를 주석으로 표시한다.
6. 주석이 달린 문서를 기반으로 서식 구조(formatting structure)를 생성한다. 이는 문서 트리와 유사하지만 각 스타일을 적용한 결과물이라 볼 수 있다. 추가적인 정보(이미지 추가)를 더 저장하거나 오히려 문서트리보다 크기가 작을 수 있다.(diplay:none 일 경우 요소를 삭제)
7. 서식 구조를 대상 매체에 전달한다. (화면에 결과를 출력함)


참조
====

- CSS Snapshot: https://www.w3.org/Style/2011/CSS-process
- CSS Processing: https://www.w3.org/TR/CSS2/intro.html#q2.0
