.. _pr_language_terms:

=============
 용어
=============

문맥 자유 문법(Context-free grammar)
===================================

문맥 자유 문법은 모든 가능한 문자열을 표시하기 위한 :ref:`production_rules` 의 집합이다. 또한 형식적 문법(Formal Grammar)의 한 종류이다.

`문맥 자유 문법은 4개의 튜플로 정의된다. <https://en.wikipedia.org/wiki/Context-free_grammar#Formal_definitions>`_ 

- **비단말 문자의 유한 집합.** 비단말 문자 또는 변수(nonterminal charactor or varibale), variable은 구문 분류(syntatic category)
- **단말 문자의 유한 집합.** 실제 문장을 구성하는 단말 문자(terminal charactor)
- **관계.** 비단말 -> (단말+비단말)* 
- **시작 심볼.** 전체 문장 또는 프로그램

.. _production_rules:

생성 규칙(Production rules)
===========================

생성 규칙은 심볼(Symbol)을 재귀적으로 치환하여 새로운 심볼의 결과를 만드는 재작성 규칙(rewrite rule) 이다.

배커스 정규형(Backus normal form)
=================================

배커스 정규형은 문맥 자유 문법을 위한 **표기법** 이다. 배커스 정규형은 주로 프로그래밍 언어의 문법을 묘사하며, `메타언어 <https://en.wikipedia.org/wiki/Metalanguage>`_ 으로서 구절의 허용 가능한 구조와 문장의 구성과 문장을 묘사한다.

BNF는 파생규칙의 집합이며 다음과 같이 작성한다.::

   <symbol> ::= __expression__

<symbol>은 비단말이고 __expression__은 1개 이상의 심볼로 구성된다. 2개 이상의 시퀀스는 수직바로 구분하여 표시하면 되고 시퀀스중 하나를 선택하여 치환 가능함을 뜻한다. 왼쪽에는 단말이 올 수 없고 왼쪽편의 심볼은 언제나 **< >** 로 감싸야 한다.

::= 은 왼쪽의 심볼이 오른쪽의 표현식으로 치환 될 수 있다는 의미를 갖는다.

.. _language_terms_ebnf:

확장된 배커스 정규형 (Extended Backus–Naur form, EBNF)
================================================

EBNF는 BNF을 확장한 국제표준 메타언어이다. `이곳 <http://standards.iso.org/ittf/PubliclyAvailableStandards/s026153_ISO_IEC_14977_1996(E).zip>`_ 에서 EBNF 표준을 확인할 수 있다.

문법, 구문론(Syntax)
====================

어떤 문장 구조가 타당한지 나타내는 규칙이다.

문법적 메타언어(Syntactic Metalanguage)
=========================================

메타언어란 다른 언어(Language)의 문법(Syntax)을 정의하기 위한 **표기법** 이다. 이때 몇가지의 규칙을 사용하여 문법을 정의하게된다. 시스템에서 사용하는 명령어나 데이터의 포맷 부터 프로그래밍 언어의 문법까지 정의할 수 있다. 대표적인 메타언어로 :ref:`language_terms_ebnf` 가 있다.

메타문법(Metasyntax)
====================

`메타문법 <https://en.wikipedia.org/wiki/Metasyntax>`_ 은 메타언어에서 사용 가능한 문장의 조합이나 구조를 나타내는 문법이다.

형식적 문법 정의(Formal syntax definition)
============================

언어의 문법에 대한 정의를 뜻한다. 형식적 문법 정의는 크게 3가지 사용법을 갖고 있다.

- 언어의 비 단말 심볼(non-terminal symbols)에 이름을 붙힐때
- 연속된 심볼(symbols)이 타당한 문장인지 확인할 때
- 문장에 대한 문법적 구조를 보일때


매개변수, 인자값
================

함수에서 인자로 참조되는 변수를 매개변수(Parameter)라고 부르며 메서드를 호출할때 함수로 전달하는 값을 인자(Arguments)라고 한다.

시퀀스(Sequence)
================

0개 이상의 항목을 포함하는 순서가 있는 리스트이다. 서브 시퀀스(Subsequence)는 시퀀스 안에 있는 시퀀스를 뜻한다. 

메타 식별자(Meta-identifier)
============================

비 단말 심볼(Non-terminal symbol)의 이름을 뜻한다.

문장(Sentence)
==============

심볼(Symbols)의 시퀀스를 뜻한다.

단말 심볼(Terminal symbol)
==========================

문자들의 시퀀스를 뜻한다. 더이상 쪼갤 수 없다.

비 단말 심볼(Non-terminal symbol)
==========================

언어의 문법적 부분을 뜻한다. 더이상 쪼갤 수 없다.

모나드(Monad)
===================

특정한 타입의 값을 저장하거나 특정 연산으로 부터 새로운 타입을 만들어내는 것을 뜻한다.


References
==========

- 문맥자유문법: https://en.wikipedia.org/wiki/Context-free_grammar#Formal_definitions
- 배커스 정규형: https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form
- 확장된 배커스 정규형: https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form
- [네이버 지식백과] 구문론 [syntax] (실험심리학용어사전, 2008., 시그마프레스㈜): http://terms.naver.com/entry.nhn?docId=271494&cid=41990&categoryId=41990
- Monad: https://en.wikipedia.org/wiki/Monad_(functional_programming)#Monad_laws
- ISO/IEC 14977: http://standards.iso.org/ittf/PubliclyAvailableStandards/s026153_ISO_IEC_14977_1996(E).zip
- 메타문법: https://en.wikipedia.org/wiki/Metasyntax
- 매개변수 vs 아규먼트: https://en.wikipedia.org/wiki/Parameter_(computer_programming)#Parameters_and_arguments
