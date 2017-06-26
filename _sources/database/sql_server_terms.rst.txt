.. _sql_server_terms:

================
 SQL Server Key
================


Database Master Key(DMK)
==============================

마스터 키는 SQL Server의 데이터베이스(Database)에서 인증서의 비밀키나 비대칭 키를 보호하기 위한 대칭키를 뜻한다. 보통 SMK로 암호화된 복사본이 키가 사용되는 데이터베이스에 저장된다. 마스터 키가 SMK로 암호화 되지 않는다면 명시적으로 *OPEN MASTER KEY* 를 사용해 마스터키를 사용해야한다.

Service Master Key(SMK)
====================================

서비스 마스터 키는 Linked Server password, Credential, DMB(Database Master Key)를 암호화 하기 위한 키이다. 이 키는 SQL Server 인스턴스에 의해 생성된다.

참조
====

- **SQL Server Keys.** https://msdn.microsoft.com/en-us/library/bb964742.aspx

