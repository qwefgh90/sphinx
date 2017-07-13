.. _sql_server_terms:

================
 SQL Server Key
================


Database Master Key(DMK)
==============================

마스터 키는 SQL Server의 각 데이터베이스(Database)에서 인증서의 비밀키, 비대칭 키, 대칭 키를 보호하기 위해 사용되는 대칭키를 뜻한다. 보통 DMK의 복사본은 SMK로 암호화 되어 사용되는 데이터베이스 및 master에 저장되어 활용된다. 마스터 키가 SMK로 암호화 되어 저장되지 않는다면 명시적으로 *OPEN MASTER KEY* 를 사용해 마스터키를 복호화 하여 사용해야한다. AES 256으로 암호화 되어 저장된다.

Service Master Key(SMK)
====================================

서비스 마스터 키는 Linked Server password, Credential, DMB(Database Master Key)를 암호화 하기 위한 키이다. 이 키는 SQL Server 인스턴스당 1개씩 생성된다. AES 256으로 암호화 되어 저장된다.

참조
====

- **SQL Server Keys.** https://msdn.microsoft.com/en-us/library/bb964742.aspx

