.. _sql_server_terms:

================
 SQL Server Key
================


Database Master Key(DMK)
==============================

마스터 키는 SQL Server의 각 데이터베이스(Database)에서 인증서의 비밀키, 비대칭 키, 대칭 키를 보호하기 위해 사용되는 대칭키를 뜻한다. DMK는 생성 시 사용자가 제공한 암호와 Triple DES를 사용하여 암호화 된다. 기본적으로 *OPEN MASTER KEY* 구문을 사용해 마스터키를 복호화 하여 사용한다. 일반적으로 자동 복호화를 위해 DMK의 암호화 키의 복사본을 SMK로 암호화하여 데이터베이스 및 master에 저장하고 자동 복호화에 이용한다.

Service Master Key(SMK)
====================================

서비스 마스터 키는 Linked Server password, Credential, DMB(Database Master Key)를 암호화 하기 위한 키이다. 이 키는 SQL Server 인스턴스당 1개씩 생성된다. AES 256으로 암호화 되어 저장된다.

참조
====

- **SQL Server Keys.** https://msdn.microsoft.com/en-us/library/bb964742.aspx

