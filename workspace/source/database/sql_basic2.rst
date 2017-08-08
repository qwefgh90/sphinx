.. highlightlang:: sql

.. _sql_basic2:

********************
SQL 활용
********************

본 내용은 `DBGuide.net <http://www.dbguide.net/db.db?cmd=view&boardUid=148404&boardConfigUid=9&categoryUid=216&boardIdx=132&boardStep=1>`_ 목차/내용을 기반으로 작성자의 입장에서 요점을 정리한 문서입니다.

표준 조인(STANDARD JOIN)
=================================

표준조인에는 INNER JOIN이 있다. INNER JOIN에 대한 설명은 :ref:`inner_join` 을 확인해보라. 

NATURAL JOIN은 두 테이블 간의 동일한 이름을 갖는 모든 칼럼들에 대해 EQUI(=) JOIN을 수행한다. 하지만 이는 SQL Server에서는 지원하지 않는 기능이다. 주의할 사항으로는 칼럼명 뿐만 아니라 도메인 역시 같아야 한다는 점이다. (데이터 성격)

NATURAL JOIN은 모든 일치되는 칼럼들에 대해 JOIN이 이루어지지만, FROM 절의 USING 조건절을 이용하면 같은 이름을 가진칼럼들 중에서 원하는 칼럼에 대해서만 선택적으로 EQUI JOIN을 할 수 있다. using 사용법은 :ref:`sql_using` 에서 확인할 수 있다.

*USING절* 이외에도 *ON 조건절* 을 사용하여 칼럼명이 다르더라도 조인을 수행할 수 있다.

예시::

	SELECT *
	FROM STUDENT STU
	INNER JOIN STUDENT_TEMP STUT ON STU.AGE = STUT.TAGE	

.. _sql_using:

USING 조건절
-----------------

예시::

	SELECT *
	FROM DEPT JOIN DEPT_TEMP
	USING (DEPTNO);

DEPT와 DEPT_TEMP 테이블을 DEPTNO 칼럼을 이용하여 JOIN(INNER JOIN)의 USING 조건절로 수행한다. 

잘못된 예시::

	SELECT DEPT.DEPTNO
	FROM DEPT JOIN DEPT_TEMP
	USING (DEPTNO);

위와같이 JOIN 칼럼에 대해서는 ALIAS나 테이블 이름 같은 접두사를 붙일 수 없다. 하지만 MySQL에서 테스트해본 문제없이 결과 잘 수행된다.

.. _cross_join:

CROSS JOIN
---------------------------

곱집합을 반환하는 JOIN이라고 보면된다. 예를들어 EMP 칼럼의 개수가 14건, DEPT 칼럼의 개수가 4건일 경우 총 56건의 데이터가 반환된다.

예시::
		
	SELECT *
	FROM student stu
	CROSS JOIN student_temp stut

.. _outer_join:

OUTER JOIN
---------------------------

기본적으로 INNER JOIN의 결과를 가져오고 JOIN 조건에 동일한 조건이 없을 경우에도 행을 반환할 수 있다. *LEFT OUTER JOIN* 은 A테이블과 B테이블의 JOIN 칼럼에 같은 값이 있는경우 해당 데이터를 가져오고 없는경우 B의 칼럼에서 가져오는 칼럼들은 NULL 값으로 채운다. RIGHT OUTER JOIN은 LEFT JOIN과 반대로 결과를 생성한다.

FULL OUTER JOIN은 LEFT OUTER JOIN과 RIGHT OUTER JOIN 의 결과를 합친결과를 반환한다. 이때 UNION ALL이 아닌 UNION 처럼 중복되는 데이터는 삭제한다.

예시 ::
		
	SELECT * FROM STUDENT STU
	LEFT OUTER JOIN STUDENT_TEMP STUT
	ON STU.AGE = STUT.AGE


:ref:`cross_join` 과 :reF:`outer_join` 의 차이점은 OUTER JOIN은 NULL로 채워서 반환한다는 점이고 CROSS는 NULL을 포함하지 않고 존재하는 모든행을 곱해서 반환한다는 점이다. 

.. _set_operator:

집합 연산자
=============

두 개 이상의 테이블에서 조인을 사용하지 않고 연관된 데이터를 조회하는 방법 중에 또 다른 방법이 있는데 그 방법이 바로 집합 연산자(Set Operator)를 사용하는 방법이다.

- UNION : 여러 개의 SQL문의 결과에 대한 합집합으로 결과에서 모든 중복된 행은 하나의 행으로 만든다.
- UNION ALL : 여러 개의 SQL문의 결과에 대한 합집합으로 중복된 행동 그대로 결과로 표시된다.
- INTERSECT : 여러 개의 SQL문의 결과에 대한 교집합이다. 중복된 행은 하나의 행으로 만든다.
- EXCEPT : 앞의 SQL문의 결과에서 뒤의 SQL문의 결과에 대한 차집합이다. 중복된 행은 하나의 행으로 만든다.

계층형 질의와 셀프 조인
===================================

Oracle 계층형 질의
------------------------------------

형식::

	SELECT ...
	FROM [TABLE_NAME]
	WHERE [CONDITION]
	START WITH [CONDITION]
	CONNECT BY [NOCYCLE] [CONDITION]

START WITH절은 계층 구조 전개에서 시작 위치를 지정하는 구문이다. CONNECT BY 절은 다음에 전개될 자식 데이터를 지정하는 구문이다. PRIOR은 CONNECT BY절에 사용되며, 현재 읽은 칼럼을 지정한다. PRIOR 자식 = 부모 형태를 사용하면 계층구조에서 부모 데이터에서 자식 데이터(부모 -> 자식) 방향으로 전개한다. NOCYCLE은 데이터를 전개하면서 이미 나타났던 데이터가 나타면 사이클이 발생한 것이다. 이때 멈추는 옵션이다. ORDER SIBLINGS BY는 형제 노드 사이에서 정렬을 수행한다. WHERE은 모든 전개를 수행한 후 지정된 조건에 만족하는 데이터만 추출한다.

- LEVEL : 루트 데이터이면 1, 그 하위 데이터이면 2
- CONNECT_BY_ISLEAF : 전개 과정에서 해당 데이터가 리프 데이터이면 1, 그렇지 않으면 0이다.
- CONNECT_BY_ISCYCLE : 전과 과정에서 자식을 갖는데, 해당 데이터가 ㅈ상으로 부터 존재하면1 그렇지 않으면 0이다.

샘플데이터는 다음과 같다.

=========  =========
사원         관리자
=========  =========
A             
B             A
C             A
D             C
E             C
=========  =========

예시::

	SELECT LEVEL, CONCAT(LPAD('-', 4 * (LEVEL-1)), 사원) as 사원, 관리자, CONNECT_BY_ISLEAF ISLEAF
	FROM 사원
	START WITH 관리자 IS NULL
	CONNECT BY PRIOR 사원 = 관리자;

=====  ==========  =========  ==========
LEVEL  사원         관리자        ISLEAF
=====  ==========  =========  ==========
1      A                      0  
2      -B           A         1
2      -C           A         0
3      ---D         C         1
3      ---D         C         1
=====  ==========  =========  ==========

셀프 조인
------------------

셀프 조인이란 동일 테이블 사이의 조인을 말한다. 

예시::

	SELECT E1.사원, E1.관리자, E2.관리자 차상위 관리자
	FROM 사원 E1 LEFT OUTER JOIN 사원 E2
	ON (E1.관리자 = E2.사원)
	ORDER BY E1.사원

결과

=========  =============  =======================
사원         관리자           차상위_관리자
=========  =============  =======================
A
B              A
C              A
D              C               A
E              C               A
=========  =============  =======================

서브 쿼리와 뷰(View)
==============================

종류

- 단일 행 서브쿼리 : <, >= 와 같은 비교연산자와 사용되며 실행 결과가 항상 1건 이하인 서브쿼리를 뜻한다.
- 다중 행 서브쿼리 : 실행 결과가 여러 건인 서브쿼리를 의미한다. IN, ALL, ANY, SOME, EXISTS와 사용된다.
- 다중 칼럼 서브쿼리 : 서브쿼리의 결과로 여러 컬럼을 반환할 수 있다.

사용 가능한 위치는 SELECT, FROM, WHERE, HAVING, ORDER BY, INSERT의 VALUES 절, UPDATE문의 SET 절이 있다. 서브쿼리가 FROM 에서 사용된다면 INLINE 뷰라고 부르며 절차성있는 특징을 보여주게된다.

EXISTS 사용 예시::

	select * from student
	where exists (select name from student where age = 3)

서브쿼리의 반환 레코드의 칼럼이 한개라도 존재하면 참이다. 단순히 특정 컬럼의 값을 사용할 땐 IN , 서브쿼리를 사용할 땐 EXISTS가 더좋은 성능을 나타낸다고 한다. `참조 사이트 <http://blog.uphs.co.kr/72>`_

뷰(View)
-------------------

테이블과 달리 뷰는 실제 데이터를 가지고 있지 않고 정의로만 구성 되어있다. (Select 문으로 구성되어 있음) 뷰의 장점으로는 *독립성* , *편리성* , *보안성* 등이 있다. 여기서 독립성은 테이블 구조가 변경되어도 뷰를 사용하는 응용 프로그램은 변경되지 않아도 된다는 점을 말하고 편리성은 복잡한 쿼리를 뷰로 정의했을때 편리하다는 것을 뜻한다. 보안성은 직원의 금여정보와 같이 숨기고 싶은 정보가 존재한다면 숨길 수 있는 성질이다. 단순하게 뷰에서 해당 칼럼을 제외하면 된다. 


뷰생성 ::

	CREATE VIEW V_STUDENT AS
	SELECT NAME, AGE FROM STUDENT

뷰삭제 ::

	DROP VIEW V_STUDENT


.. _sql_group_function:

그룹 함수(GROUP FUNCTION)
================================

일반적인 GROUP BY 예시::

	SELECT DNAME, JOB,
			COUNT(*) "Total Empl"
			SUM(SAL) "Total Sal"
	FROM EMP, DEPT
	WHERE DEPT.DEPTNO = EMP.DEPTNO
	GROUP BY DNAME, JOB
	ORDER BY DNAME, JOB;

실행 결과

===============  ==============  ===============  ============
DNAME              JOB           Total Empl        Total Sal
===============  ==============  ===============  ============
ACCOUNTING         CLERK             1               1300
ACCOUNTING         MANAGER           1               2450
SALES              CLERK             1                950
SALES              MANAGER           3               2850
===============  ==============  ===============  ============

ROLLUP 함수 사용예시::

	SELECT DNAME, JOB,
			COUNT(*) "Tota Empl",
			SUM(SAL) "Total Sal"
	FROM EMP, DEPT
	WHERE DEPT.DEPTNO = EMP.DEPTNO
	GROUP BY ROLLUP (DNAME, JOB);

실행 결과

===============  ==============  ===============  ============
DNAME              JOB           Total Empl        Total Sal
===============  ==============  ===============  ============
ACCOUNTING         CLERK             1               1300
ACCOUNTING         MANAGER           1               2450
ACCOUNTING                           2               3750
SALES              CLERK             1                950
SALES              MANAGER           3               2850
SALES                                4               3800
                                     6               7550
===============  ==============  ===============  ============

L1 - GROUP BY 수행시 생성되는 표준 집계
L2 - DNAME 별 모든 JOB의 SUBTOTAL
L3 - GRAND TOTAL

만약 정렬을 하고 싶다면 ORDER BY DNAME, JOB 을 붙여주면 된다.

GROUPING 함수를 사용한다면 소집계를 내주는 칸에 문자열을 넣을 수 있다. GROUPING은 GROUP BY 에 명시한 칼럼에 사용할 수 있으며 소집계를 하는 레코드는 1 아닐 경우 0을 반환한다.

GROUPING 함수 사용::

	SELECT CASE GROUPING(DNAME) WHEN 1 THEN 'All Departments' ELSE DNAME END AS DNAME
			, CASE GROUPING(JOB) WHEN 1 THEN "All Job" ELSE JOB END AS JOB
			, COUNT(*) "Tota Empl"
			, SUM(SAL) "Total Sal"
	FROM EMP, DEPT
	WHERE DEPT.DEPTNO = EMP.DEPTNO
	GROUP BY ROLLUP (DNAME, JOB);

실행 결과

===============  ==============  ===============  ============
DNAME              JOB           Total Empl        Total Sal
===============  ==============  ===============  ============
ACCOUNTING         CLERK             1               1300
ACCOUNTING         MANAGER           1               2450
ACCOUNTING         All Jobs          2               3750
SALES              CLERK             1                950
SALES              MANAGER           3               2850
SALES              All Jobs          4               3800
All Departments    All Jobs          6               7550
===============  ==============  ===============  ============

ROLL UP 함수 결합 칼럼::

	SELECT ...
	GROUP BY ROLLUP (DNAME, (JOB,MGR))

위와 같이 GROUP BY를 주면 부서별, (잡, 매니저)별 소집계를 수행하게 된다.

*CUBE* 함수는 ROLL UP과 비슷하지만 더 많은 결합에 대해 집계를 생성한다. 위의 ROLL UP 예제에서 ROLL UP을 CUBE로 바꿔보면 결과는 다음과 같다.

===============  ==============  ===============  ============
DNAME              JOB           Total Empl        Total Sal
===============  ==============  ===============  ============
All Departments    All Jobs          6               7550
All Departments    CLERK             ..              ...
All Departments    MANAGER           ..              ...
ACCOUNTING         CLERK             1               1300
ACCOUNTING         MANAGER           1               2450
ACCOUNTING         All Jobs          2               3750
SALES              CLERK             1                950
SALES              MANAGER           3               2850
SALES              All Jobs          4               3800
===============  ==============  ===============  ============


GROUPING SETS를 사용하여 더욱 다양한 소계 집합을 만들 수 있다::

	SELECT CASE GROUPING(DNAME) WHEN 1 THEN 'All Departments' ELSE DNAME END AS DNAME
			, CASE GROUPING(JOB) WHEN 1 THEN "All Job" ELSE JOB END AS JOB
			, COUNT(*) "Tota Empl"
			, SUM(SAL) "Total Sal"
	FROM EMP, DEPT
	WHERE DEPT.DEPTNO = EMP.DEPTNO
	GROUP BY GROUPING SETS (DNAME, JOB);

부서별, JOB별 인원수와 급여의 합을 구할 수 있다.

윈도우 함수(WINDOW FUNCTION)
============================

윈도우 함수는 **함수가 기반으로 하는 쿼리의 결과 집합의 부분 집합을 대상으로 각 행별로 스칼라 값을 계산하여** 출력하는 함수를 뜻한다. *분석 함수* , *순위 함수* 로 알려져 있다.

결과 집합의 부분 집합을 *윈도우(Window)* 라 한다. 윈도우는 *OVER* 이라는 절을 기반으로 정의된다. 

예시::

  SLEECT id, birth, val, SUM(val) OVER(PARTITION BY id
  ORDER BY birth ROWS
  BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS runval

OVER 절에는 윈도우를 설정하는 **파티셔닝(PARTITION), 정렬, 프레임을** 입력받는다. 이 값을 기반으로 윈도우를 세부적으로 설정할 수 있다. *파티션 절(PARTITION BY)는* 현재 행에서의 값과 동일한 값을 갖는 행들의 집합이다. *정렬 절(ORDER BY)은* 윈도우내에서 정렬 방식을 설정한다. (쿼리 결과의 출력 순서는 아니다.) *윈도우 프레임절(ROWS)은* 윈도우 안의 행들의 필터링에 관여한다. 

비어있는 OVER() 절은 전체 집합을 윈도우로 설정한다.


그룹 내 순위 함수
----------------------

RANK 예시::

	SELECT JOB, ENAME, SAL
			,RANK() OVER (ORDER BY SAL DESC) ALL_RANK
			,RANK() OVER (PARTITION BY JOB ORDER BY SAL DESC) JOB_RANK
	FROM EMP;

이때 SAL을 기준으로 정렬되고 두번째 ORDER BY 절은 무시한다. (만약 PARTITION만 사용되었다면 PARTITION을 기준으로 정렬 되었을것)

전체 급여 랭킹과 직업 별 급여 랭킹을 찾을 수 있다. 이때 PARTITION은 하나의 소그룹으로 제한하고 ORDER BY 는 랭킹의 기준이 된다. RANK와 비슷한 함수로 DENSE_RANK는 동일한 순위를 하나의 건수로 취급한다. 2등이 두명이면 그 다음엔 3등이 온다. ROW_NUMBER 함수는 동일한 값이더라도 다른 순위룰 매겨준다. (둘다 200 만원을 월급으로 받아도 2등, 3등으로 등수가 매겨짐)

일반 집계 함수
------------------------

SUM 예시::

	SELECT MGR, ENAME, SAL
		SUM(SAL) OVER (PARTITION BY MGR ORDER BY SAL RANGE UNBOUNDED PERCEDING)
		AS MGR_SUM
	FROM EMP;

RANGE UNBOUNDED PERCEDING은 현재 행을 기준으로 파티션 내의 첫 번째 행까지의 범위를 지정한다. 이 구문을 사용하면 SALARY의 누적값을 출력한다. 

MAX 예시::

	SELECT MGR, ENAME, SAL
	FROM ( SELECT MGR, ENAME, SAL, MAX(SAL) OVER (PARTITION BY MGR) AS IV_MAX_SAL
		   FROM EMP)	
WHERE SAL = IV_MAX_SAL;

같은 매너지를 가진 사람중 최대 급여를 받는 사원들을 구한다.

AVG 예시::

	SELECT MGR, ENAME, HIREDATE, SAL
		AVG(SAL) OVER (PARTITION BY MGR ORDER BY HIREDATE
		ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING)) AS MGR_AVG 
		AS MGR_SUM
	FROM EMP;

그룹내에서 고용일자로 정렬했을때 앞~뒤 사람과 급여의 평균을 내는 식이다.

COUNT 예시::

	SELECT ENAME, SAL
		COUNT(*) OVER (ORDER BY SAL
		RANGE BETWEEN 50 PRECEDING AND 150 FOLLOWING)) AS SIM_CNT 
		AS MGR_SUM
	FROM EMP;

현재 행의 급여값을 기준으로 급여가 -50에서 +150의 범위 내에 포함된 모든 행을 대상으로 개수를 구한다. 이 외에도 FIRST_VALUE 함수, LAST_VALUE 함수, LAG 함수, LEAD 함수등 어떤 조건에서 다른 레코드의 값을 가져올 수 있는 함수가 있다.


그룹 내 비율 함수
------------------------------

종류 

- RATIO_TO_REPORT : SUM 칼럼에 대한 행별 칼럼 값의 비율
- PERCENT_RANK : 랭킹이 몇 번째 쯤 있는지 0~1 사이 값으로 출력하는 함수
- CUME_DIST : 현재 행보다 작거나 같은 건수에 대한 누적백분율을 구함
- NTILE : 정렬한 후 인자 값만큼의 그룹으로 나눈다. ('4'면 4개로 쪼갬)

DCL(DATA CONTROL LANGUAGE)
===================================

DCL은 유저를 생성하고 권한을 제어할 수 있는 명령어이다.

유저 생성과 시스템 권한 부여
--------------------------------

로그인한 후 DDL을 수행하려면 적절한 권한이 있어야 한다.
 
사용자 생성 / 로그인 권한 주기 (SYSTEM 계정으로 접속 한후)::

	GRANT CREATE USER TO SCOTT;
	GRANT CREATE SESSION TO SCOTT;
	CONN SCOTT/TIGER; -- 로그인 가능
	CREATE USER PJS IDENTIFIED BY KOREAD7; -- 사용자 생성 가능함

테이블 생성 권한 주기::

	GRANT CREATE TABLE TO SCOTT;

테이블 조회 권한 주기::

	GRANT SELECT ON MENU TO SCOTT;

권한 제거::

	REVOKE CREATE SESSION, CREATE TABLE FROM SCOTT

이런식으로 일일히 권한을 줄 수도있지만 :ref:`rbac` 를 사용하면 훨씬 편하게 권한을 관리할 수 있다. 

권한 생성::

	CREATE ROLE LOGIN_TABLE
	GRANT CREATE SETTION, CREATE TABLE TO LOGIN_TABLE
	GRANCT LOGIN_TABLE TO JISUNG

JISUNG에게 LOGIN_TABLE 이라는 역할을 주었다.

절차형 SQL
=========================

일반적인 개발 언어처럼 SQL을 절차 지향 프로그램이 가능하도록 DBMS 벤더별로 절차형 SQL을 제공하고 있다. 이중 오라클의 PL/SQL에 대해 알아보자. 

PL/SQL은 Block 구조로 되어 있고 Block 내에는 DML 문장과 QUERY 문장, 그리고 절차형 언어(IF,LOOP) 등을 사용할 수 있으며, 절차적 프로그래밍을 가능하게 하는 트랜잭션 언어이다. 

특징

- Block 구조로 되어있어 각 기능별로 모듈화가 가능
- 변수, 상수 등을 선언하여 SQL 문장 간 값을 교환 가능
- IF, LOOP 등의 절차형 언어를 사용하여 절차적인 프로그램이 가능
- DBMS 정의 에러나 사용자 정의 에러를 정의하여 사용가능
- 응용 프로그램 성능을 향상 시킴
- 여러 SQL 문장을 Block으로 묶어서 한 번에 서버로 보내기 때문에 통신량 감소

구조

.. image::image/plsql.jpeg

문법::

	CREATE [OR REPLACE] Procedure [PROC_NAME]
	(ARGV1 [MODE] TYPE1 , ...)
	 ...
	IS [AS]
	 ...
	BEGIN
	 ...
	EXCEPTION
	 ...
	END;
	/

REPLACE는 덮어 쓰겠다는 의미이다. MODE는 IN/OUT/INOUT 등이 있다. /는 컴파일 하라는 의미이다.

삭제::

	DROP Procedure [PROC_NAME]


T-SQL에 대해 알아보자. SQL Server를 제어하기 위한 언어로서 T-SQL은 ANSI/ISO 기능 뿐만 아니라 추가적인 기능을 포함하고 있다.

특징

- 변수 선언 가능 (전역 @@, 지역 @)
- 지역은 연결 시간동안 유지되고 전역은 SQL서버 내에 저장된 값이다.
- 흐름 제어 가능
- 주석 가능

구조

.. image::image/t-sql.jpeg


문법::

	CREATE [OR ALTER] Procedure [PROC_NAME]
	(@ARGV1 TYPE1 [MODE], ...)
	 ...
	 WITH <proc_option>
	 AS
	 ...
	BEGIN
	 ...
	ERROR 처리
	 ...
	END;

MODE는 VARYING/DEFAULT/OUT(OUTPUT)/READONLY 이 있다. WITH 부분에 지정할 수 있는 옵션은 3가지가 있다. RECOMPILE(런타임에 컴파일), ENCRYPTION(프로시져를 암호화), EXECUTE AS(실행할 보안 컨텍스트 지정) 등이 있다. 

User Defined Function의 생성과 활용
------------------------------------------

프로시져와 유사하지만 차이점은 반드시 하나의 값을 RETURN 해야한다는 점이다. Procedure 대신 Function으로 바꾼 후 프로시저 처럼 작성한다.

Trigger의 생성과 활용
-----------------------------

트리거란 특정한 테이블에 INSERT, UPDATE, DELETE와 같은 DML문이 수행되었을 때, 데이터베이스에서 자동으로 동작하도록 작성된 프로그램이다.

트리거의 간단한 작성 절차는 다음과 같다.

1) Trigger를 선언한다.

| CREATE OR REPLACE Trigger SUMMARY_SALES : Trigger 선언문
| AFTER INSERT : 레코드가 입력이 된 후 Trigger 발생
| ON ORDER_LIST : ORDER_LIST 테이블에 Trigger 설정
| FOR EACH ROW : 각 ROW마다 Trigger 적용

2) 변수 선언
3) BEGIN ~ END

프로시저와 트리거의 차이점
----------------------------------

=============================  ==================================
프로시저                            트리거
=============================  ==================================
Create Procedure 문법사용           Create Trigger 문법사용
EXECUTE 명령어로 실행                생성 후 자동으로 실행
COMMIT, ROLLBACK 실행 가능          COMMIT, ROLLBACK 실행 안됨
=============================  ==================================








