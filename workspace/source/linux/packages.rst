.. _packages:

==================
리눅스 배포 패키지
==================

APT
===

Advanced Package Tool로 데비안 패키지를 관리해주는 소프트웨어이다. 

주요 기능

- 의존성 관리및 패키지 다운로드를 해주며, 패키지 설치 및 삭제는 dpkg로 위임한다.
- GPG 키 관리 및 패키지 서명 확인을 수행한다.
- *sudo apt-key list* 명령어로 /etc/apt/trusted.gpg에 저장된 공개키를 확인할 수 있음
- /etc/apt/sources.list 에서 저장소 목록을 확인할 수 있다.

서명 확인::

   1) /etc/apt/trusted.gpg 에 공개키가 저장되어 있다.
   2) Release에 Packages의 해시, Packages에 모든 패키지의 해시가 저장되어 있다.
   3) 공개키를 이용해 Release와 함께 있는 서명 파일(Release.gpg)의 서명을 확인한다.
   4) Release.gpg가 없거나 서명이 올바르지 않을 경우 연관된 모든 패키지를 신뢰 할 수 없다고 판단하고 사용자에게 경고한다.

YUM
===

RPM 패키지를 관리해주는 소프트웨어이다.

주요 기능
- 패키지 의존성을 찾아준다.
- GPG 키 관리 및 패키지 서명 확인을 수행한다.
- *rpm -qa gpg-pub* | xargs rpm -qi* 명령어로 /etc/pki/rpm-gpg 공개키의 목록을 확인할 수 있다.
- /etc/yum.repo.d에서 저장소를 추가할 수 있다.

참조
====

- Apt: https://wiki.debian.org/Apt
- Secure Apt: https://wiki.debian.org/SecureApt#How_apt_uses_Release.gpg
- Yum: http://yum.baseurl.org/wiki/SecuredRemoteData
