.. _css_color_background:

.. highlightlang:: css

====================================
 색(Colors)과 배경(Backgrounds)
====================================

'color' 속성은 요소의 텍스트 색을 나타낸다.::

  span { color: red }
  span { color: rgb(255,0,0) }

배경(Backgrounds)
=================

개발자는 배경으로 이미지 또는 색을 지정할 수 있다. 배경은 **content, padding, border 영역까지** 나타낸다. 상속되지 않으며 다른 투명한 배경을 갖는 요소를 비출 수 있다.

문서의 배경을 HTML 요소대신 BODY 요소에 지정하는 것이 권장된다.  캔버스의 배경을 그릴때 HTML 요소의 스타일이 BACKGROUND-COLOR: TRANSPARENT 이면서 BACKGROUND-IMAGE: NONE일 경우 유저 에이전트는 BODY의 속성을 사용해야 한다.

예시::

  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
    <TITLE>Setting the canvas background</TITLE>
    <STYLE type="text/css">
       BODY { background: url("http://example.com/marble.png") }
    </STYLE>
    <P>My background is marble.

위 예시에서 BODY가 태그가 없더라도 HTML Parser는 BODY 태그를 추론 및 추가하며 배경 스타일을 적용한다.

- background-color: <color> | transparent(초기값)
- background-image: <uri> | none(초기값)

background-image를 사용할 수 없을 때 background-color가 적용된다.

예시::

  h1 { background-color: #F00 }
  body { background-image: url("marble.png") }
  p { background-image: none }

- background-repeat: repeat(초기값) | repeat-x | repeat-y | no-repeat 
- background-attachment: scroll(초기값) | fixed 

fixed를 할 경우 배경이 뷰포트에 고정된다. **페이지 미디어에서는 페이지 박스에 고정된다.**

background-position
-------------------

- <percent>: 
- <length>:
- top | left | bottom | right | center
