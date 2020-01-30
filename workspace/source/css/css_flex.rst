.. _css_flex:

.. highlightlang:: css

====================================
 Flex 정렬 
====================================

----------------
축(diection)
----------------

row(행, x축)는 가로 방향으로 아이템을 배치하며 col(열, y축)은 세로방향으로 아이템을 배치한다.

----------------------------
justify-content
----------------------------

Flex가 설정되어 있는 상태에서 Flex Direction(flex-direction)으로 설정되는 **방향 축에 따라** 요소들을 정렬하는 방법이다. 그 축의 시작(justify-content: flex-start, **기본값** ), 중앙 정렬(justify-content: center), 그 축의 끝(justify-content: flex-end)
, 사이사이에만 공간을 넣는 나눔 정렬(justify-content: space-between), 사이사이와 시작과 끝에 공간을 넣는 나눔 정렬(justify-content: space-around) 등이 있다.

----------------------------
align-items
----------------------------

Flex가 설정되어 있는 상태에서 Flex Direction(flex-direction)으로 설정되는 **방향 축에 수직에 따라** 요소들을 정렬하는 방법이다. 그 축의 시작(align-items: flex-start), 중앙 정렬(align-items: center), 그 축의 끝(align-items: flex-end)
, 각 요소의 글자의 baseline 기준으로 정렬 (align-items: baseline), 각 요소를 flex-box의 끝까지 늘리는(align-items: stretch, **기본값** ) 등이 있다.

