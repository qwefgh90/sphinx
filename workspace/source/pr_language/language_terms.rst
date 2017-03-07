.. _pr_language_terms:

=============
 용어
=============

문맥 자유 문법(Context-free grammar)
===================================

문맥 자유 문법은 모든 가능한 문자열을 표시하기 위한 :ref:`production_rules` 의 집합이다.

`문맥 자유 문법은 4개의 튜플로 정의된다. <https://en.wikipedia.org/wiki/Context-free_grammar#Formal_definitions>`_ 

- **유한 집합.** 비단말 문자 또는 변수(nonterminal charactor or varibale), variable은 구문 분류(syntatic category)
- **유한 집합.** 실제 문장을 구성하는 단말 문자(terminal charactor)
- **관계.** 비단말 -> (단말+비단말)* 
- **시작 심볼.** 전체 문장 또는 프로그램

.. _production_rules:

생성 규칙(Production rules)
===========================

생성 규칙은 심볼(Symbol)을 재귀적으로 치환하여 새로운 심볼의 결과를 만드는 재작성 규칙(rewrite rule) 이다.

배커스 정규형(Backus normal form)
=================================

배커스 정규형은 문맥 자유 문법을 위한 **표기법** 이다. 배커스 정규형은 주로 프로그래밍 언어의 문법을 묘사하며, `메타문법 <https://en.wikipedia.org/wiki/Metasyntax>`_ 으로서 구절의 허용 가능한 구조와 문장의 구성과 문장을 묘사한다.

BNF는 파생규칙의 집합이며 다음과 같이 작성한다.::

   <symbol> ::= __expression__

<symbol>은 비단말이고 __expression__은 1개 이상의 심볼로 구성된다. 2개 이상의 시퀀스는 수직바로 구분하여 표시하면 되고 시퀀스중 하나를 선택하여 치환 가능함을 뜻한다. 왼쪽에는 단말이 올 수 없고 왼쪽편의 심볼은 언제나 **< >** 로 감싸야 한다.

::= 은 왼쪽의 심볼이 오른쪽의 표현식으로 치환 될 수 있다는 의미를 갖는다.

확장된 배커스 정규형 (Extended Backus–Naur form)
================================================

EBNF는 프로그래밍 언어와 같은 형식 언어를 형식적으로 표현하기 위한 메타문법이다. EBNF는 CFG와 같이 생성규칙의 집합이다. `이곳 <http://standards.iso.org/ittf/PubliclyAvailableStandards/s026153_ISO_IEC_14977_1996(E).zip>`_ 에서 EBNF 표준을 확인할 수 있다.

문법, 구문론(Syntax)
====================

어떤 문장 구조가 타당한지 나타내는 규칙이다.

구문론적, 문법적 메타언어(Syntactic Metalanguage)
=========================================

언어(Language)의 문법(Syntax)을 정의하기 위한 표기법이다.(BNF, EBNF)



References
==========

- 문맥자유문법: https://en.wikipedia.org/wiki/Context-free_grammar#Formal_definitions
- 배커스 정규형: https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form
- 확장된 배커스 정규형: https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form
- [네이버 지식백과] 구문론 [syntax] (실험심리학용어사전, 2008., 시그마프레스㈜): http://terms.naver.com/entry.nhn?docId=271494&cid=41990&categoryId=41990
- ISO/IEC 14977: http://standards.iso.org/ittf/PubliclyAvailableStandards/s026153_ISO_IEC_14977_1996(E).zip
