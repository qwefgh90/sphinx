.. _javascript_browser:

.. highlightlang:: javascript

====================
 페이지 로딩 이벤트
====================

먼저 웹 페이지를 화면에 표시하기 까지 발생하는 일을 알아보자. 브라우저는 해당 서버에 자원을 요청하고 일반적으로 HTML 문서를 내려받는다. 이후 필요한 스타일 시트나 스크립트 파일을 내려받은 뒤 웹 페이지를 화면에 표시한다.

브라우저는 개발자가 몇몇 로딩 단계에 스크립트를 삽입하는 것을 허락한다. 많은 이벤트 중 아래 이벤트는 많이 사용된다.

DOMContentLoaded
----------------

HTML 문서 파싱을 완료하고 DOM 객체를 생성했을때 *document 객체* 에서 발생하는 이벤트이다. 이미지, 스타일시트, 서브 프레임이 로딩되는 것을 기다리지 않고 호출된다.::
  
  document.addEventListener("DOMContentLoaded", ready);

문서를 파싱하는 과정에서 동기적인 내부 또는 외부 스크립트를 만나면 DOM 객체 생성을 일시적으로 중지시키고 스크립트를 실행한다. **async나 defer가 적용된 비동기적 스크립트는 DOM 객체 생성과 페이지 렌더링을 멈추게 하지 않는다. 이 경우 사용자는 스크립트 로딩과 관계 없이 페이지를 볼 수 있다.**

예외적인 경우는 다음과 같다.

- 동기적인 스크립트는 DOM 객체 생성을 멈추게한다.
- async, defer가 적용된 스크립트는 DOM 객체 생성과 별도로 비동기적으로 실행된다.
- **스타일 시트 뒤에 스크립트가 있을 경우 스크립트는 스타일 시트가 실행되는 것을 기다린다.**

load
----

이미지, 스타일 시트 등을 포함한 전체 페이지를 로딩했을때 "window 객체* 에서 발생하는 이벤트이다.::

  window.onload = function() {
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  };

다르게 말하면 모든 자식 프레임(iframe)과 이미지(img)에서 로드(load) 이벤트가 발생했을때 발생하는 이벤트이다.

beforeunload
------------

이 이벤트는 사용자가 다른 페이지로 이동하려 하거나 창을 닫으려 할때 팝업을 통해 이동하는 것을 취소하게 할 수 있게 한다. 모든 브라우저에서 정상 동작하지는 않는다. 문자열을 반환하는 함수를 등록하면 된다.::

  window.onbeforeunload = function() {
    return "There are unsaved changes. Leave now?";
  };

beforeunload, unload 모두 부모가 자식보다 먼저 호출된다.

unload
------

자식 프레임과 문서가 없어지는 과정에서 호출되는 이벤트이다. beforeunload, pagehide 보다 나중에 발생한다.

아래와 같은 특별한 특징을 갖는다.

- 리소스는 존재하지만 사용자에게 보이지 않는다.
- UI와 관련된 API를 사용할 수 없다.(window.open, alert)
- unload 이벤트를 멈출 수 없다.

readyStateChange 그리고 async, readyState
-----------------------------------------

외부 스크립트가 async 속성을 포함할 경우 문서가 로딩된 이후, 이전 어떠한 시점에 작업이 완료될지 알 수 없다. 이러한 경우 readyState는 큰 도움이 된다.

readyState는 로딩 상태에 대한 정보를 주는 *document* 의 속성이다.

- loading: 문서가 로딩 중
- interactive: 문서는 파싱되었지만 이미지, 스타일, 프레임은 여전히 로딩 중
- complete: 모든 리소스가 로딩된 상태

readyState 속성의 변화를 관찰하는 readystatechange 이벤트를 활용하는 예시는 다음과 같다.::

  document.addEventListener('readystatechange', () => console.log(document.readyState));

readystatechange 이벤트는 유사한 역할을 하는 DOMContentLoaded나 load 이벤트보다 먼저 발생한다.

참조
====

- 라이프 사이클: https://javascript.info/onload-ondomcontentloaded
- 이벤트: https://developer.mozilla.org
