.. highlightlang:: sql

.. _sql_basic:

*****************
SQL 기본
*****************

`DBGuide.net <http://www.dbguide.net/db.db?cmd=view&boardUid=148404&boardConfigUid=9&categoryUid=216&boardIdx=132&boardStep=1>`_ 의 요점만 정리 하여 정리한 글입니다. SQL 기본 파트는 SQL 기본, SQL 활용, SQL 최적화 기본 원리로 구성되어 있습니다.

관계형 데이터베이스는 IBM의 SQL 개발단계를 거쳐 Oracle을 중심으로 여러회사가 상용화된 제품을 내놓았다. 관계형 데이터베이스는 파일 시스템을 저장소로 사용하는것 보다 훨씬 안정적인데 여러 프로그램이 동시에 데이터를 공유 및 조작할 수 있고 데이터 중복 제거가 가능하며 무결성 제약조건을 이용해 데이터 무결성을 보장할 수 있다. 또한 데이터 성격 및 속성, 표현방법 등을 체계화 할수 있어 데이터 품질을 확보할 수 있다.

*SQL* 이란 관계형 데이터베이스에서 데이터 정의, 조작, 제어를 하기 위해 사용하는 언어이다. 최초 SQL은 ANSI/ISO 표준화 되었고 계속해서 새로운 표준이 나오고 있다. 

SQL은 DML(Data Manipulation Language), DDL(Data Definition Language), DCL(Data Control Language), TCL(Transaction Control Language)로 구성된다. (TCL은 DDL에 포함될 수 있음)

- DML : 데이터 조작어로 *SELECT* , *INSERT* , *UPDATE* , *DELETE* 등이 있다.
- DDL : 데이터 정의어로 *CREATE* , *ALERT* , *DROP* , *RENAME* 등이 있다.
- DCL : 데이터 제어어로 *GRANT* , *REVOKE* 등이 있다.
- TCL : 트랜잭션 제어어로 *COMMIT* , *ROLLBACK* 등이 있다. 


*테이블(Table)* 은 RDBMS의 기본 단위로 어떤 목적으로 만들어지는 집합과 같다. 테이블은 로우(Row), 칼럼(Column), 필드(Field)로 구성된다. 

DDL(DATA DEFINITION LANGUAGE)
================================================

DDL의 경우 명령어를 실행하는 순간 즉시(AUTO COMMIT) 이 완료된다.

데이터 유형::

	CHAR(s) : s만큼의 최대 길이를 고정으로 갖고 데이터가 채워지고 남은 공간은 비어있게 된다.
	VARCHAR(s) : s만큼의 최대 길이를 갖지만 가변길이로 조정되어 할당된 변수의 길이만큼만 적용된다.
	NUMERIC : 정수, 실수 등 숫자 정보
	DATETIME : 날짜와 시각 정보

데이터 유형은 테이블 설계시 고려해야할 중요한 요소이다.

CREATE TABLE 문
------------------------------------

생성 예시::

	CREATE TABLE STUDENT(

	NAME VARCHAR(10),
	AGE	INTEGER,
	SCHOOLIDX VARCHAR(20),

	CONSTRAINT STUDENT_PK PRIMARY KEY (NAME),
	CONSTRAINT SCHOOL_FK FOREIGN KEY (SCHOOL) REFERENCES SCHOOL(SCHOOLIDX)
	);

테이블 생성 시 대/소문자 구별은 없다. 칼럼과 칼럼의 구분은 콤마로 하고 제약조건이 있으면 CONSTRAINT로 추가할 수 있다. 제약조건의 종류는 다음과 같다.

- PRIMARY KEY : 행 데이터를 식별하기 위한 기본키로서 *NOT NULL 과 고유키 제약조건* 이라고 할 수 있다. (존재하지 않아도 테이블이 생성될 수 있음)
- UNIQUE KEY : 행 데이터를 고유하게 식별하기 위한 고유키를 정의할 수 있다. 기본키와 달리 NULL 입력 가능
- NOT NULL :
- CHECK : 논리식을 작성하여 TRUE, FALSE 평가를 할 수 있다.
- FOREIGN KEY : 기본키를 다른 테이블의 외래키로 복사하는 경우 외래키가 생성된다. 외캐리 지정시 참조 무결성 제약조건 옵션을 선택할 수 있다.

생성된 테이블은 DESCRIBE [TABLE_NAME] 을 이용해 확인할 수 있다. (오라클, MYSQL)

생성 예시2::

	CREATE TABLE TEAM_TEMP
	AS SELECT * FROM TEAM;

테이블이 복사 생성된다. 다만 기본키, 고유키, 외래키, CHECK등의 제약조건은 복사되지 않는다. NOT NULL 제약조건만 복사된다.

ALTER TABLE 문
------------------------------------

칼럼 추가 예시(GRADE)::

	ALTER TABLE [TABLE_NAME]
	ADD (COLUMN) GRADE VARCHAR(4);

칼럼 삭제 예시(GRADE)::

	ALTER TABLE [TABLE_NAME]
	DROP COLUMN GRADE;

칼럼 수정 예시::

	ALTER TABLE [TABLE_NAME]
	MODIFY (COLUMN_NAME COLUMN_TYPE [DEFAULT] [NOT NULL],
	COLUMN_NAME2 COLUMN_TYPE ...);

칼럼명에 대한 데이터 타입 제약사항을 변경할 수 있다.

제한 사항

- NOT NULL 은 NULL이 없을때만 가능하다.
- 데이터가 있을 경우 칼럼의 크기를 줄일 수 없으나 NULL이나 비어있을 경우 칼럼의 폭을 줄일 수 있다.

칼럼 이름 변경::

	ALTER TABLE 
	RENAME COLUMN [OLD_NAME] TO [NEW_NAME];

제약 조건 삭제::

	ALTER TABLE [TABLE_NAME]
	DROP CONSTRAINT [CONSTRAINT_NAME];

제약 조건 추가::

	ALTER TABLE [TABLE_NAME]
	ADD CONSTRAINT [CONSTRAINT_NAME] [CONSTRAINT] ...;

테이블명 변경
------------------------------------

테이블명 변경::

	RENAME [OLD_TABLE_NAME] TO [NEW_TABLE_NAME];

DROP TABLE
------------------------------------

예시::

	DROP TABLE [TABLE_NAME]

TRUNCATE TABLE
------------------------------------

예시::

	TRUNCATE TABLE PLAYER

해당 테이블에 들어있던 모든 행들이 제거되고 저장 공간을 재사용 가능하도록 해제한다.

DML(DATA MANIPULATION LANGUAGE)
================================================

DML 명령어의 경우 조작하려는 테이블을 메모리에 버퍼에 올려 놓고 작업을 하기 때문에 실시간으로 테이블에 영향을 미치는 것이 아니다. 따라서 COMMIT 명령어를 입력하여 TRANSACTION을 종료 해야한다. 하지만 SQL Server의 경우 DML도 AUTO COMMIT으로 처리되기 때문에 실제 테이블에 반영하기 위해 COMMIT 명령어를 입력할 필요가 없다. 

INSERT
------------------------------------

예시::

	INSERT INTO STUDENT (NAME, AGE, GRADE)
	VALUES ('창원', 26, '4');

테이블명 다음 괄호가 없다면 모든 값을 다 넣어야한다.

UPDATE
------------------------------------

예시::
	
	UPDATE STUDENT SET NAME = '최창원';

SET 칼럼명 = 데이터 순으로 작성 해야하는 것을 이해하자.

DELETE
------------------------------------

예시::

	DELETE FROM [TABLE_NAME]

예시::
	
	SELECT [ALL/DISTINCT] COLUMN_NAME1, COLUMN_NAME2
	FROM [TABLE_NAME]

*DISTINCT* 의 경우 중복된 데이터가 있는 경우 1건으로 처리해서 출력한다. *DISTINCT* 뒤에 열거된 *COLUMN_NAME* 모두가 겹칠경우 중복으로 인정하여 제거한다. *ALL* 의 경우 중복된 데이터가 있어도 모두 출력한다.

SELECT, 산술 연산자와 합성 연산자
================================================

SELECT는 데이터를 조회하는 쿼리이다. SELECT 는 실제 디스크의 데이터를 읽어오며 칼럼의 수에 따라 차지하는 메모리가 다르다.

*산술 연산자* 는 NUMBER와 DATE 자료형에 대해 적용되며 일반적으로 수학에서의 4칙 연산과 동일하다. 또한 우선순위를 위한 괄호 적용이 가능하다.

산술 연산자의 종류

- *=* , *\** , */* , *+* , *-* 등이 있다.

예시::

	SELECT NAME, AGE - GRADE AS '나이-학년' FROM STUDENT

여기서 AS 는 생략 가능하다. 칼럼끼리의 산술 연산이 가능한 것을 볼 수 있다.

*합성 연산자* 는 문자와 문자를 합성할 수 있는 연산자이다. (CONCATENATION)

예시::

	SELECT CONCAT ('이름:' ,NAME) AS NAME FROM STUDENT 

각 벤더마다 다른 합성 연산자가 존재하지만 공통적으로 *CONCAT 함수* 를 사용할 수 있다.

TCL (TRANSACTION CONTROL LANGUAGE)
================================================

트랜잭션은 데이터베이스의 논리적 연산단위 이다. 트랜잭션은 분할할 수 없는 최소의 연산단위 이다. 트랜잭션의 특징은 *ACID* 라고 줄여서 부를 수 있다.

- Atomicity(원자성) : 트랜잭션에서 정의된 연산들은 모두 실행되던지 실패되어야 한다.
- Consistency(일관성) : 트랜잭션이 실행되기전 상태에 DB의 내용이 잘못 되어 있지 않으면 트랜잭션이 실행된 후에도 DB의 내용에 잘못이 있으면 안된다.
- Isolation(고립성) : 트랜잭션이 실행되는 중간에 다른 트랜잭션의 영향을 받아선 안된다.
- Durabulity(지속성) : 트랜잭션이 성공적으로 수행되면 그 트랜잭션이 갱신한 데이터베이스의 내용은 영구적으로 저장된다.

트랜잭션 예시(My SQL)::

	START TRANSACTION ;   

	update student set name = '창창원' WHERE NAME = '창창';

	COMMIT;

SQL Server의 경우 START TRANSACTION 대신 BEGIN TRANSACTION 이란 구문을 사용한다. 기본적으로 COMMIT 명령어는 트랜잭션을 완료할 때 ROLLBACK 명령어는 트랜잭션을 취소할 때 사용한다. 

SAVEPOINT 예시::

	
	START TRANSACTION;

	SAVEPOINT SV1;

	update student set name = '원창' WHERE NAME = '창창원';

	ROLLBACK TO SV1;

트랜잭션 중 원하는 저장점을 정한 후 *ROLLBACK TO [저장점]* 이란 명령으로 저장점 위치까지만 트랜잭션을 할 수 있다. 저장점 이후 부분은 전혀 반영되지 않는다.


SAVEPOINT 예시2::

	
	START TRANSACTION;

	INSERT INTO STUDENT VALUES('창원스', 3,4);

	SAVEPOINT SV1;

	update student set name = '창' WHERE NAME = '원창';

	ROLLBACK TO SV1;

위의 예시에서는 INSERT 구문만 실행되고 UPDATE는 실행되지 않는다.



WHERE 절
=======================

- 비교 연산자 : *=* , *>* , *<* , *>=* , *<=*
- SQL 연산자 : BETWEEN , IN , LIKE , IS NULL ( *LIKE* 에서 %는 0개 이상의 문자를 의미, - 는 1개인 단일 문자를 의미)
- 논리 연산자 : AND, OR, NOT
- 부정 비교 연산자 : !=, ^=, <>, NOT 칼럼명 =, NOT 칼럼명 >
- 부정 SQL 연산자 : NOT BETWEEN, NOT IN, IS NOT NUL

NULL 문자는 비교 연산자와 사용될 수 없다. 어떤 비교연산이라도 항상 FALSE를 반환한다. NULL 값의 비교 연산은 IS NULL, IS NOT NULL 이라는 정해진 문구를 사용해야 제대로 된 결과를 얻을 수 있다.

연산 우선순위

1) 괄호 ()
2) NOT 연산자
3) 비교 연산자, SQL 비교 연산자
4) AND
5) OR

IN 연산자 예시::

	SELECT NAME, AGE
	FROM STUDENT
	WHERE (NAME, AGE) IN (('창원', 20), ('창창',25))

IN을 이용해 여러개의 칼럼을 비교할 수 있다. 

- ROWNUM, TOP 구문

ROWNUM은 각 행에 임시로 부여되는 일련번호이다. 원하는 만큼 행을 가져올 수 있다.::

	SELECT NAME FROM STUDENT WHERE ROWNUM <= 2
	SELECT TOP(2) NAME FROM STUDENT 
	SELECT NAME FROM STUDENT LIMIT 2

ORACLE, SQL SERVER, MYSQL 순서 이다. 

함수(FUNCTION)
=====================

- 문자형 함수 : LOWER, UPPER, SUBSTR/SUBSTRING, LENGTH/LEN, LTRIM, RTRIM, TRIM, ASCII
- 숫자형 함수 : ABS, MOD, ROUND, TRUNC, SIGN, CHR/CHAR, CEIL/CEILING, FLOOR, EXP, LOG, LN, POWER, SIN, COS, TAN
- 날짜형 함수 : SYSDATE/GETDATE, EXTRACT/DATEPART, TO_NUMBER(TO_CHAR(d.'YYYY'|'MM'|'DD')) / YEAD|MONTH|DAY
- 반환형 함수 : TO_NUMBER, TO_CHAR, TO_DATE / CAST, CONVERT
- NULL 관련 함수 : NULL을 처리하기 위한 함수, NVL/ISNULL, NULLIF, COALESCE

\* Oracle 함수/ SQL Server함수 표시, 그외 공통함수 

TRIM 예시::
	
	LTRIM(name,'w')
	RTRIM(name,'x')
	TRIM('x' from name)

LTRIM 및 RTRIM 에서 2번쨰 인자(지울 문자)는 Oracle 에서는 지정할 수 있지만 My-SQL과 SQL Server에서는 사용할 수 없다. 1개의 문자만 입력받으며 공백 제거 만 가능하다. 그리고 RTRIM은 공백제거에도 유용하지만 *VARCHAR와 CHAR* 비교할 때 용이하게 사용된다.

*CEIL* , *FLOOR* 은 각각 숫자보다 크거나 같은 정수를 반환하거나 작거나 같은 최소 정수를 반환한다.

ROUND 및 TRUNC 예시::

	ROUND(123.345564, 5)
	TRUNC(123.434353, 3)

*ROUND* 는 5번째 자리까지 나타내며 6번째 자리에 반올림이 적용됨, *TRUNC* 는 3번째 자리까지 나타내고 잘라서 버린다. (MySQL 은 없음)

날짜 관련 예시::

	select extract(YEAR from sysdate()) from student
	select datepart(year, getdate()) from student

위는 Oracle, MySQL에서 사용되는 구문, 밑은 SQL Server에서 사용되는 구문이다. *extract* 대신 *YEAR(sysdate())* 형식으로 년도만 추출할 수 있다. YEAR, MONTH, DAY와 같은 함수로 반환값을 합치고 싶다면 *CONCAT* 을 사용하여 된다.

CASE 표현
======================

CASE 예시::
	
	SELECT 
	CASE WHEN SAL > 2000 THEN SAL
		ELSE 2000
	END
	FROM EMP;

CASE 문의 예시이다. (MySQL 사용가능)

CASE 예시::

	SELECT
	CASE WHEN SAL > 2000 THEN SAL
		WHEN SAL > 1000 THEN SAL*1.5
		ELSE 0
	END
	FROM EMP;

CASE 문은 WHEN .. THEN 을 이용해서 계속 조건을 추가할 수 있다.

NULL관련 함수
=========================

ISNULL 예시::

	SELECT
	ISNULL(NULL) FROM STUDENT

	SELECT
	ISNULL([TARGET], 'NULL_OK') FROM STUDENT

위의 구문은 MySQL에서 사용된다. 값이 NULL 인지 검사하여 참/거짓을 반환한다. 밑은 SQL Server에서 사용되며 TARGET을 판단하여 오른쪽 값을 반환한다. MySQL에서 사용하고 싶다면 IFNULL(판단값, 값)을 사용하면 된다.

중요한 점은 SELECT의 결과가 공집합이 나오면 IFNULL이 동작하지 않는다는 점이다. IFNULL은 레코드가 1개 라도 있어야 판단이 수행된다.

NULLIF 예시::

	SELECT 
	NULLIF(123,123) FROM STDUENT

NULLIF의 인자1,2 가 같으면 NULL을 반환 아니면 인자1을 반환한다.

COALESCE 예시::

	SELECT
	COALESCE(NULL , NULL , 123) FROM STUDENT

모든 값이 NULL일 경우 (AND 연산을 통해) NULL을 반환한다.

GROUP BY, HAVING 절
===============================

집계함수
-------------------

여러 행들의 그룹이 모여서 그룹당 단 하나의 결과를 돌려줄때 사용할 수 있는 함수를 뜻한다.

특성

- 여러 행들의 그룹이 모여서 단 하나의 결과를 돌려주는 함수이다. 
- GROUP BY 절은 행들을 소그룹화 한다.
- *SELECT 절* , *HAVING 절* , *ORDER BY 절* 에 사용할 수 있다.

종류

- COUNT(*) : NULL값을 포함한 모든 행의 수를 출력한다.
- COUNT(표현식) : 표현식의 값이 NULL 값인 것을 제외한 행의 수를 출력한다.
- SUM([DISTINCT | ALL] 표현식) : 표현식의 NULL 값을 제외한 합계를 출력한다.
- AVG(...)
- MAX(...) : 최대값 출력(문자,날짜 포함)
- MIN(...) : 최소값 출력(문자,날짜 포함)
- STDDEV(...) : 표준편차 출력
- VARIAN(...) : 분산 출력

예시 ::

	select count(*), count(grade), max(grade) from student

일반적으로 집계함수는 GROUP BY 절과 같이 사용되지만 위와 같이 테이블 전체가 하나의 그룹이 되는 경우에는 GROUP BY 절 없이 단독으로 사용할 수 있다.

예시 :: 

	SELECT NVL(MGR, 9999) MGR FROM EMP WHERE ENAME='JSC'
	SELECT IFNULL(MGR, 9999) MGR FROM EMP WHERE ENAME='JSC'
	
위 예시는 레코드가 하나도 검색되지 않았을때 NVL이 동작하는지 알 수 있다. 실제로 레코드가 0개라면 NVL은 있으나 마나 공집합을 반환한다. 

다른 예시::

	SELECT NVL(MAX(MGR), 9999) MGR FROM EMP WHERE ENAME='JSC'
	SELECT IFNULL(MAX(MGR), 9999) MGR FROM EMP WHERE ENAME='JSC'
	
다른 함수와 달리 *집계 함수와 Scalar Subquery* 의 경우는 인수의 결과 값이 공집합인 경우에도 NULL을 출력한다. 따라서 위 쿼리 결과는 9999가 된다.


GROUP BY, HAVING 절 
-------------------------------

WHERE 절로 일차적인 결과를 가공한 후 각 팀별 데이터를 얻어오고 싶을때 사용할 수 있다. 예를 들면 팀별 선수의 연봉 평균이나 나이등을 얻을 수 있다.

형식::

	SELECT [DISTINCT] COLUMN [ALIAS]
	FROM [TABLE_NAME]
	[WHERE CONDITION]
	[GROUP BY COLUMN OR EXPR]
	[HAVING CONDITION];

특성은 다음과 같다.

- GROUP BY 절을 통해 소그룹별 기준을 정한 후 SELECT 절에 집계 함수를 사용한다.
- 집계 함수의 통계 정보는 NULL 값을 가진 행을 제외하고 수행된다.
- GROUP BY 절에서는 SELECT 절과 달리 ALIAS 명을 사용할 수 없다.
- 집계 함수는 WHERE절에 올 수 없다. (집계가 수행되기 이전에 WHERE절이 수행된다.)
- WHERE 절은 전체 데이터를 GROUP BY으로 나누기 전에 행들을 미리 제거시킨다.
- HAVING 절은 GROUP BY 절의 기준 항목이나 소그룹의 집계 함수를 이용한 조건을 표시할 수 있다.
- GROUP BY 절로 소그룹을 만든 후 HAVING 절에서 제한 조건을 두어 조건을 만족하는 내용만 출력한다.
- HAVING 절은 일반적으로 GROUP BY 절 뒤에 위치한다.

SQL의 적용순서 (SELECT 조회 시)::
	
	SQL문은 기본적으로 FROM, WHERE, GROUP BY, HAVING, SELECT 출력/계산, ORDER BY 순으로 수행된다.

위 순서는 옵티마이저가 SQL 문장의 SYNTAX, SEMANTIC 에러를 점검하는 순서이기도 하다. 예를 들면 FROM 절에 정의되지 않은 테이블의 칼럼을 WHERE 절, GROUP BY 절, HAVING 절, SELECT 절, ORDER BY 절에서 사용하면 에러가 발생한다. 그러나 ORDER BY 절에는 SELECT 목록에 나타나지 않은 문자형 항목이 포함될 수 있다. 단, SELECT DISTINCT 를 지정하거나 SQL 문장에 GROUP BY 절이 있거나 또는 SELECT 문에 UNION 연산자가 있으면 열 정의가 SELECT 목록에 표시되어야 한다.

이 부분은 관계형 데이터베이스가 데이터를 메모리에 올릴 때 행 단위로 모든 칼럼을 가져오게 되므로, SELECT 절에서 ORDER BY 절에서 메모리에 올라와 있는 다른 칼럼의 데이터를 사용할 수 있다.

`SQL 적용순서 참조 사이트 <http://dayccm.tistory.com/29>`_ 이다. 주의할점은 ORDER BY 시 SELECT 출력/계산 한 이후의 값이 정렬에 사용된다는 점이다. 

GROUP BY 예시::

	SELECT AVG(GRADE) FROM STUDENT WHERE AGE <50 GROUP BY (AGE);

50세 이하인 학생중에서 나이가 같은 사람들 끼리 소그룹을 만든 후 평균 학년을 반환한다는 뜻이다.

HAVING 예시::

	SELECT AVG(GRADE) FROM STUDENT WHERE AGE <50 GROUP BY (AGE) HAVING AVG(GRADE) < 3;
	SELECT AVG(GRADE) FROM STUDENT WHERE AGE <50 GROUP BY (AGE) HAVING GRADE < 3

2번째 구문은 틀린 SQL 문이다. GROUP BY에 의해 소그룹이 생성되었을떄 GRADE는 존재하지 않는다. 단 1번째 구문처럼 값을 계산할 수 있다. 반면 나이로 소그룹을 생성했다면 다음과 같은 구문은 사용할 수 있다.::

	SELECT AGE ,AVG(GRADE) FROM STUDENT WHERE AGE <50 GROUP BY (AGE) HAVING AGE > 3


ORDER BY 정렬
===========================

ORDER BY에 표현식은 집계함수 등이 있다.

형식::

	SELECT [DISTINCT] COLUMN [ALIAS]
	FROM [TABLE_NAME]
	[WHERE CONDITION]
	[GROUP BY COLUMN OR EXPR]
	[HAVING CONDITION]
	[ORDER BY [COLUMN OR EXPR] [ASC OR DESC]]

예시::

	SELECT * FROM STUDENT WHERE GRADE IS NOT NULL ORDER BY AGE DESC, GRADE
	SELECT * FROM STUDENT WHERE GRADE IS NOT NULL ORDER BY AGE, GRADE desc

첫번째 구문은 학년이 NULL이 레코드를 나이순으로 내림차순 정렬하고 다시 학년순으로 오름차순 정렬한 예제이다. 두번째 구문은 AGE은 오름차순, GRADE은 내림차순이 적용된다. 

안되는 예시::

	SELECT AGE, NAME FROM STUDENT GROUP BY AGE HAVING COUNT(*) > 0 ORDER BY GRADE DESC

GROUP BY를 한 후 ORDER BY나 SELECT 칼럼에 일반 칼럼을 사용하면 에러가 나온다고 한다. 하지만 MySQL에서 해본결과 동작한다. (설명이 틀렸거나 MySQL 대표값을 사용하는 느낌이다.)

조인(JOIN)
=========================

JOIN이란 두개 이상의 테이블을 조합하여 데이터를 출력하는것을 뜻한다. 

.. _inner_join:

EQUI JOIN (INNER JOIN)
------------------------------------------

예시 ::
	
	SELECT * FROM A,B WHERE A.ID = B.ID
	SELECT * FROM A INNER JOIN B ON A.ID = B.ID

결과는 같다. 아래 방식은 ANSI/ISO SQL 표준방식이다. 등가조인, 이너조인은 자식 테이블의 FK와 부모 테이블의 PK가 같은 모든 결과를 출력한다. 이는 두 테이블의 교집합의 모든결과라고 할 수 있다.

INNER JOIN에서 INNER를 생략해도 같은 동작을 하게된다.


DBMS별 스키마 정보
==================================================

*해킹방어를 위한 JAVA 시큐어코딩* 내용을 참조하였습니다.

MySQL

INFORMATION_SCHEMA.SCHEMATA : 하나의 스키마는 하나의 데이터베이스다. SCHEMATA는 데이터베이스의 정보를 제공한다.
INFORMATION_SCHEMA.TABLES : 데이터베이스에 존재하는 테이블에 대한 정보를 제공한다.
INFORMATION_SCHEMA.COLUMNS : 테이블 칼럼의 컬렉션 정보, 칼럼이라도 CHAR, VARCHAR, TEXT 형태의 칼럼은 컬렉션을 가진다. 비문자 타입은 컬렉션을 가지지 않는다.

SQLServer

sysdatabases(sys.databases) : 각 행당 하나의 데이터베이스 정보
sysobjects(sys.objects) : 데이터베이스 내에 만들어진 각 사용자 정의 스키마 범위 개체에 대한 행을 포함
syscolumns(sys.columns) : 뷰 또는 테이블과 같이 열을 갖고 있는 개체의 각 열에 대한 행을 반환
systypes(sys.types) : 각 행당 시스템 및 사용자 정의 정보
sysusers(sys.database_principals) : 각 행당 데이터베이스 내의 각 Microsoft Windows 사용자, Windows 그룹, Microsoft SQL Server 사용자 또는 SQL Server 역할 정보



