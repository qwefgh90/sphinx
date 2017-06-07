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
-----------------------------------------

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

셀렉터(Selectors)
=================

**셀렉터는 문서의 요소를 선택하는 패턴이다.** CSS 스타일 프로퍼티를 요소와 연결 시킬때 사용된다. 

셀렉터는 다음의 함수로 표현된다. 각 요소에 표현식을 계산함으로써 해당 요소를 선택할지 안할지 결정한다.::

  표현식 * 요소 -> 참거짓

셀렉터는 다음과 같은 문법을 따른다.(EBNF)::

  셀렉터 = 시퀀스 [콤비네이터 시퀀스]* (* 셀렉터는 시퀀스의 연속이다. *)
  시퀀스 = [type selector | universal selector] [attribute selector | class selector | id selector | pseudo-class] * | [attribute selector | class selector | id selector | pseudo-class]+ (* 시퀀스는 심플 셀렉터(타입, 유니버셜, ...)의 연속이다. *)
  셀렉터 그룹 = 셀렉터 [, 셀렉터]* (* 각각 셀렉터에 일치하는 요소들의 합을 나타낸다. *)


`셀렉터(패턴) 요약 테이블 <https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#selectors>`_ 을 참고하면 좋다.

심플 셀렉터(Simple Selectors)
-----------------------------

셀렉터를 구성하는 최소 단위의 셀렉터들이다.

- 타입 셀렉터(Type selector) : 타입의 이름을 사용해 요소를 선택하는 패턴이다.
- 유니버셜 셀렉터(Universal selector) : 어떠한 타입이든 상관없이 선택하는 패턴이다.
- 애트리뷰트 셀렉터(Attribute selectors) : 요소의 속성을 사용해 요소를 선택하는 패턴이다. 부가적으로 다양한 종류의 패턴을 지원한다.
- 클래스 셀렉터(Class selectors) : Attribute selector로 class attribute를 선택하는 것과 같다. **"."** 고 함께 매칭할 클래스 이름을 입력하면 관련된 요소들을 선택할 수 있다. (.bird와 class~=bird 는 같음, 연속으로 클래스 셀렉터를 주면 모두 포함할때만 동작)
- ID 셀렉터(ID selectors) : 요소의 식별자(id attribute)로 요소를 선택하는 패턴이다. (#red, red를 값으로 갖는 요소를 선택)

의사 클래스(Psuedo-classes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

DOM 트리 외에 다른 정보를 바탕으로 요소를 선택하는 패턴이다. 항상 *콜론:* 과 함께 의사 클래스의 이름이 온다. (괄호와 함께 값을 전달할 수 도 있음)

동적 의사 클래스(Dynamic pseudo-classes)
++++++++++++++++++++++++++++++++++++++++

**링크(link)를 위한 의사 클래스**

- :link : 아직 방문하지 않음
- :visited : 한번 방문함

**사용자 행동을 위한 의사 클래스**

- :hover : 요소의 박스위로 마우스를 올렸을때 (몇몇 미디어에서 동작 안함)
- :active : 사용자에 의해 요소가 활성화 되었을때 (마우스 버튼을 누르고 올렸을때)
- :focus : 요소에 포커스가 있을때 (키보드나 마우스 이벤트로 포커스)

타겟 의사 클래스(target pseudo-class)
+++++++++++++++++++++++++++++++++++++

- :target : URL에 있는 타겟을 찾는 패턴 (p.head1:target)

언어 의사 클래스(language pseudo-class)
+++++++++++++++++++++++++++++++++++++++

- :lang(xxx) : DOM 언어에서 각 요소에서 사용하는 언어를 선택할 수 있다면 lang은 요소의 언어에 매칭되는 패턴이다. (HTML은 lang attribute로 가능)

UI 요소 상태 의사 클래스(UI element states pseudo-classes)
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

- :enabled, :disabled : 요소가 활성화 되어 있는지
- :checked : 라디오나 체크박스 요소가 선택되었는지
- :indeterminate : 체크되거나 되지않은 비 결정적 상태일때

구조적 의사 클래스(Structural pseudo-classes)
+++++++++++++++++++++++++++++++++++++++++++++

- :root : 문서의 루트 요소
- :nth-child(an+b) : 선택된 요소중 an+b 선택하는 패턴 (1부터 시작) (p:nth-child(1)은 p 태그 형제요소 중 첫번째 형제를 선택)
- :nth-last-child(an+b) : 선택된 요소중 an+b 선택하는 패턴 (뒤에서 부터 1)
- :nth-of-type(an+b), :nth-of-last-type(an+b) : 선택된 요소 중 타입으로 그룹을 지은 다음 각각의 그룹에서의 an+b 인덱스만 매칭 
- :first-child : :nth-child(1)와 같음
- :last-child : :nth-last-child(1)와 같음
- :only-child : 선택된 요소중 유일한 자식 요소인 경우만 
- :only-of-type : 선택된 요소중 타입으로 그룹을 만들었을때 그룹에 홀로 존재하는 경우만
- :empty : 자식을 갖고 있지 않는 요소만 선택(단 DOM Text node, CDATA node, entity references는 카운팅 됨)

부정 의사 클래스(negation pseudo-class)
+++++++++++++++++++++++++++++++++++++++

- :not(x) : x패턴을 제외한 패턴을 따르는 요소를 선택할때 (인자로 심플 셀렉터만 올 수 있음, x)

의사 요소(Pseudo-elements)
~~~~~~~~~~~~~~~~~~~~~~~~~~

DOM 언어 명세된 것 이상의 추상화된 DOM 트리를 만들때 사용한다. 예를들어 DOM 언어에서는 요소의 내용의 첫번째 문자나 첫 줄을 접근할 수 없으나 의사 요소(Pseudo-elements)는 이것을 선택할 수 있다. 또한 DOM에 존재하지 않는 내용을 선택할 수 있으며 내용을 생성할 수 있다. **의사요소는 \:\: 와 이름을 구성된다.**

- ::first-line : 요소의 첫번째 줄(블록 컨테이너에서 동작)
- ::first-letter : 요소의 첫번째 문자
- ::before, ::after : 요소의 전, 후

콤비네이터
~~~~~~~~~~

- 공백 : 자식 요소들
- > : 자식 요소들 중에 부모 바로 밑에 있는 요소
- + : 2개의 요소가 붙어있으면서 같은 부모를 갖는 요소들
- ~ : 같은 부모를 갖는 요소들

셀렉터의 우선순위
~~~~~~~~~~~~~~~~~

셀렉터의 우선순위는 `링크 <https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#specificity>`_ 를 참조하여 계산 할 수 있다. **요소의 style 속성은 가장 높은 우선순위를 갖는다.**

미디어 쿼리(Media Queries)
==========================

미디어 쿼리는 미디어에 의존적인 스타일을 작성하기 위한 도구이다. 미디어에는 *all*, *screen*, *print* 같은 것이 있다. (HTML4에 정의됨)

**미디어 쿼리는 미디어 타입과 미디어의 조건을 검사하기 위한 0개 이상의 표현식으로 구성된다.** 

HTML에서는 다음과 같이 적용할 수 있다.::
  
  <link rel="stylesheet" media="screen and (color)" href="example.css" />

*screen and (color)* 는 논리 식으로 screen이면서 color screen 일 경우에만 적용되는 스타일을 뜻한다.

CSS에서는 다음과 같이 적용할 수 있다.::

  @import url(color.css) screen and (color);
  또는
  @media all and (min-width:500px) { … }

not 키워드 및 콤마를 통한 OR 연산을 사용할 수 있다.::

  <link rel="stylesheet" media="not screen and (color), projection and (color)" href="example.css" />

미디어 특성(Media features)
---------------------------

미디어 특성은 미디어에 대한 요구사항을 표현할때 사용된다.

*width 특성은* 출력 장치의 표시 영역의 너비를 나타낸다. *연속적인 미디어(continuous media)에서는* 스크롤 바를 포함한 viewport의 너비와 같으며 *페이지 미디어(paged media)에서는* 페이지 박스(page box)의 너비를 뜻한다. *페이지 미디어에* 대한 내용은 다음 `링크 <https://www.w3.org/TR/2011/REC-CSS2-20110607/page.html#page-intro>`_ 에서 확인할 수 있다. ::
  
  @media screen and (min-width: 400px) and (max-width: 700px) { … }

페이지 미디어(Paged media, CSS 2.1)
===================================

*페이지 미디어(Paged media)는* 문서의 내용이 1개 이상의 페이지로 분할되는 미디어를 뜻한다. 이는 *연속적인 미디어(continuous media)와* 다르다. 페이지 미디어를 다루기 위해 CSS 2.1에서는 페이지의 마진(margin)과 어떻게 페이지를 나눌지를 정의할 수 있다.

브라우저는 문서의 페이지 박스(page box)를 실제 시트(sheet)에 전달한다. 페이지 박스와 실트는 종종 1:1 관계지만 언제나 그렇지는 않다. 단면 인쇄, 양면 인쇄, 여러개의 페이지를 하나의 시트에 올리는 등의 부가적인 특징이 있기 때문이다.

*페이지 박스(page box)는* 2가지 영역을 포함한다.

- *페이지 영역(page area)*
- *여백 영역(margin area)*: 페이지 영역을 감싸는 영역이다. @page 규칙을 사용하여 지정할 수 있다.

@page
-----

@page는 페이지를 설정할때 사용하는 규칙이며 페이지 셀렉터, 스타일 블록이 따라온다. 

페이지 여백
~~~~~~~~~~~

margin-top, margin-right, margin-bottom, margin-left @page 규칙에서 사용할 수 있다.::

  @page {
  margin: 3cm;
  }

페이지 선택자
~~~~~~~~~~~~~

- :first: 이 의사 클래스를 사용하여 첫번째 페이지를 설정할 수 있다.

페이지 분할(Page breaks)
------------------------

페이지 분할에 관련하여 요소에 적용할 수 있는 5가지 속성값이 있다. 각 페이지 분할은 페이지 박스에 내용을 채운뒤 DOM 트리의 남은 내용을 새로운 페이지 박스에 채우는 식으로 동작한다.

- page-break-before: auto | always | avoid | left | right | inherit
- page-break-after: auto | always | avoid | left | right | inherit
- page-break-inside: avoid | auto | inherit

위 속성들은 블록 요소에만 적용되며 기본적으로 auto로 동작한다. always를 주면 항상 페이지 분할이 발생하고 avoid는 분할이 발생하지 않게 한다.


참조
====

- CSS Snapshot: https://www.w3.org/Style/2011/CSS-process
- CSS Processing: https://www.w3.org/TR/CSS2/intro.html#q2.0
- CSS Selector: https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#selectors
- Paged Media: https://www.w3.org/TR/2011/REC-CSS2-20110607/page.html#page-intro
- Visual formatting model: https://www.w3.org/TR/2011/REC-CSS2-20110607/visuren.html#block-boxes
