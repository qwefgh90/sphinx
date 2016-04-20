.. _android_basic:

***********************
안드로이드 핵심정리
***********************

=============================
안드로이드 액티비티와 뷰
=============================

Activity는 사용자와 상호작용하며 UI를 제공하는 화면이라 볼 수 있다. *setContentView()* 라는 함수를 이용하여 UI를 배치할 수 있다. *setContentView()* 는 *OnCreate()* 라는 Activity의 메서드에서 호출되며 인자로 전달된 XML파일을 읽어들여 자바 인스턴스를 생성 하는 역할을 한다. *setContentView()* 가 하는 역할을 *인플레이션(Inflation)* 이라 부른다.

개발자가 직접 XML 레이아웃을 객체화하고 싶다면 먼저 *getSystemService(Context.LAYOUT_INFLATER_SERVICE)* 을 통해 *LayoutInflater* 객체를 반환 받는다. 다음 *LayoutInflater* 객체의 *inflate()* 메서드를 이용해 XML을 객체화 할 수 있다.

안드로이드에서 어플리케이션이 액티비티 또는 어떤 안드로이드  구성 요소들을 포함하는지 알고 싶다면 AndroidManifest.xml 파일을 확인하면 된다. 뿐만 아니라 Android Framework에서 반드시 이 파일에 구성요소를 등록하길 요청 하므로 작성되지 않을 경우 오류가 발생한다.

따라서 크게 Activity를 생성하는 과정은 먼저 AndroidManifest.xml에 Activity 태그를 추가함으로써 시작한다. 다음 Activity의 UI를 구성하는 레이아웃을 작성한다. 마지막으로 Activity 코드를 작성하면 Activity를 시작할 수 있다.

다른 Activity 실행하는 API로는 startActivity, startActivityForResult 가 있다. 첫 번째 인자로 Intent를 전달하면 원하는 Activity를 실행할 수 있다. Intent는 무언가 행동을 하려는 의도에 대한 정보를 포함하고 있다. 첫번째 인자로 Context 두번째 인자로 실행할 컴포넌트의 Class 객체를 전달함으로써 Intent를 생성할 수 있다. Intent의 생성방법은 다양하고 방대한 내용을 가지고 있다.

-----------------
Life Cycle
-----------------

안드로이드는 하나의 OS로서 시스템상에서 동작하는 어플리케이션과 자원을 관리한다. 안드로이드 프레임워크는 어플리케이션에 여러가지 상태변화를 콜백 함수로 제공하여 각 상태에 맞게 처리할 수 있도록 도움을 주고 있다.

.. image: image/activity_lifecycle.png

----------------------
View & View Group
----------------------

View는 일반적으로 컨트롤이나 위젯이라는 이름으로 불리는 UI 구성 요소이다. 이러한 View를 담는 것을 ViewGroup이라고 한다. 

.. image: image/activity_composite.png

View 중에서 일반적인 컨트롤의 역할을 하고 있는것을 **위젯** , 뷰그룹 중에서 뷰를 배치하는 역할을 하는 것을 **레이아웃** 이라고 한다. 

-----------------------
Fragments
-----------------------

프레그먼트는 여러개의 액티비티를 동시에 사용하고 싶은 욕구에서 만들어졌다고 한다. Activity Layout에서 View처럼 사용될 수 있고 또한 액티비티의 성질을 가지고 있어서 다른 뷰를 포함할 수 있다. 쉽게 말해서 소형 Activity 역할을 한다.

프레그먼트를 사용하기 위해 FragmentActivity 사용할 수 있다. 콜백 함수 **onResumeFragments()** 는 FragmentManager의 초기화가 완료되면 호출된다. 따라서 그 시점에 필요한 작업을 하는데 유용한 콜백이다.