.. _redis_basic:


Redis
=============

설치 방법
------------

Ubuntu 기준 **설치** 방법입니다.

| **1. 패키지 업데이트**

| sudo apt-get update

| **2. Redis 빌드에 필요한 패키지**

| sudo apt-get install build-essential (데비안 패키지 빌드 및 환경 구성을 위해 필요함)
| sudo apt-get install tcl8.5

| **3. 최신 버전 다운로드**

| `Redis <http://redis.io/download>`_ 최신 버전 다운로드 (wget **URL**)

| **4. 압축 해제 및 컴파일**

| tar -xzvf redis-2.8.19.tar.gz
| make
| make test
| sudo make install

| **5. Redis 설정 스크립트로 편하게 환경설정**

| cd utils
| sudo sh install_server.sh

| **6. 실행 및 정지**

| sudo redis-server /etc/redis/6379.conf
| redis-cli -p 6379 shutdown

===================================
Redis 와 Line 메신저 정리
===================================

`라인 스토리지, 한달에 수십억건의 데이터를 Redis와 HBase에 저장하다. <https://charsyam.wordpress.com/2012/04/29/%EB%B0%9C-%EB%B2%88%EC%97%AD-line-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%ED%95%9C%EB%8B%AC%EC%97%90-%EC%88%98%EC%8B%AD%EC%96%B5-%EA%B1%B4%EC%9D%98-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-redis%EC%99%80/>`_

**초기에 Line 메신저는 Redis 클러스터를 여러개로 샤딩하여 저장 서버를 구축하였다고 한다. 이는 주키퍼와 클러스터 매니저 데몬으로 관리되었고 Consistent Hashing과 유사한 방식으로 관리하고 자동 Fail over(장애 복구) 기능을 포함하고 있었다고 한다.**

이후 Line 사용자가 **수 천만명에서 계속** 기하급수적으로 증가하면서 Redis 클러스터 운영 비용과 안정적으로 운영하기 어려워 졌다고 한다. 이후 LINE의 목표는 수천만명에서 수억명의 규모를 처리할 수 있는 것으로 바뀌었다.

라인 개발자들은 데이터 규모 분석(사용자, 라인 시스템 운영시간)과 각 데이터들의 요구사항을 분석하였다. 

- O(1) : 전송 큐의 메세지, 잡큐의 비동기 작업 -> 빠른 읽기 (Workload) -> Redis
- O(n) : 유저 프로필, 주소록, 그룹 -> 빠른 읽기 및 쓰기 (Workload) 
- O(n*t) : 메세지, 프로필, 그룹, 주소록 데이터 변경 -> 빠른 연속적인 쓰기 및 최신 데이터 읽기 (Workload)

**Workload** 란 컴퓨터가 주어진 시간 동안 처리하는 양을 뜻한다.

이중 HBase는 메세지 타임라인에 적합한 스토리지였다. HDFS 위에서 동작하므로 쉽게 파티셔닝 된다. 단점으로는 랜덤 읽기와 삭제가 느리고 SPOF도 가끔 존재한다고 한다. SPOF(Single Point of Failure)는 하둡의 네임노드에서 주로 발생할 수 있다고 한다.

**최종 아키텍처는 App Server + Local Redis(큐잉 용도) + Dispatcher가 하나의 클러스터로 존재하고 메인 저장소로 Shared Redis Cluster와 HBase를 사용한다. 

