.. _server_terms:

======
 용어
======

M.2
===

M.2는 컴퓨터 확장 카드와 관련된 커넥터를 위한 폼팩터이다. NGFF(Next Generation Form Factor)로 불리운다. M.2는 작고, 가볍고, 슬림하며 노트북이나 태블릿과 같은 소형 장치에 유용하다. M.2는 PCIe 3.0(최대 4레인)와 SATA 3.0, USB 3.0 인터페이스를 지원한다. 

다중 채널 메모리 구조(Multi-channel memory architecture)
========================================================

다중 채널 메모리 구조는 DRAM과 메모리 컨트롤러 사이에 채널을 추가함으로써 데이터의 전송속도를 빠르게 하는 기술이다.

듀얼 채널 메모리 구조(Dual-channel memory architecture)
=======================================================

듀얼 채널이 허용되는 컨트롤러는 2개의 64비트의 데이터 채널을 이용한다.

호스트 버스 어댑터(Host bus adapter)
====================================

호스트 컨트롤러, 호스트 어댑터 등으로 불리며 **서버와 외부 장치간의 연결을 위한 인터페이스를 뜻한다.** SCSI 호스트 어댑터, FC 인터페이스 카드, 네트워크 인터페이스 카드, SATA 컨트롤러 등이 있다.

SATA 컨트롤러 운영 모드(Operating modes)
========================================

SATA 컨트롤러는 여러가지 운영 모드를 제공한다.

- PATA(IDE, 에뮬레이션): 레거시 OS에서 SATA 컨트롤러를 사용할 수 있도록 한다.
- AHCI
- RAID: 인텔은 RAID 모드를 권고한다.

AHCI(Advanced Host Controller Interface)
========================================

AHCI는 SATA의 동작을 명시한 기술 표준이다. AHCI는 메모리와 저장 장치 사이에 데이터를 교환을 위한 메모리 구조와 SATA 컨트롤러 프로그래밍 방법을 정의한다.

키비, 메비, 기비 바이트(KiB, MiB, GiB)
=====================================

기존의 메가 바이트(MB)는 10의 거듭제곱이지만 **키비(KiB), 메비(MiB) ,기비(GiB) 바이트는** 이진 접두어로 사용된다. 따라서 이 단위는 2진 컴퓨터에 더 적절하다고 할 수 있다. 이 용어는 IEC(International Electrotechnical Commission)에 의해 1998년에 정의되었으며 정확하게 2의 거듭제곱을 표현하기 위해 MB를 대체했다. 여기서 정확하게라는 의미는 국제 단위 체계(International System of Units)와 차이를 둔다는 의미이다. 하지만 아직 널리 인정받고 있고 있지 않다. 

참조
====

- AHCI: https://en.wikipedia.org/wiki/Advanced_Host_Controller_Interface
- 다중 채널 메모리 구조: https://en.wikipedia.org/wiki/Multi-channel_memory_architecture

