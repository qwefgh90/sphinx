.. _server_terms:

======
 용어
======

유닉스 서버와 x86서버
=====================

유닉스 서버와 x86서버는 사용하는 OS와 칩셋을 기준으로 서버를 나누는 용어이다. **유닉스 서버는** 벤더에서 생산한 CPU 칩셋과 유닉스 기반 OS를 탑재한 서버이다. Oracle, IBM서버가 있다. **x86 서버는** 인텔이나 AMD의 CPU 칩셋을 탑재한 서버이다.

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

I/O 제어
========

- IOH(I/O Handler, North bridge): CPU와 고속 장치들(PCIe, Network) 간 통신을 하게하고 이를 제어하는 칩셋이다.
- ICH(I/O Controller Hub, South bridge): 저속의 주변 장치(USB, CD)와 통신을 하게하고 이를 제어하는 칩셋이다.

Serial ATA(SATA)
================

*SATA(Serial ATA)* 는 HDD, SSD와 같은 저장장치와 직렬로 통신할 수 있는 인터페이스이다. SATA 포트에 데이터 커넥터와 파워 커넥터를 각각 연결하여 SATA HDD를 사용할 수 있다. SATA HDD는 SAS 인터페이스에 사용할 수 있으며 *SFF-8482 커넥터(전원 공급 및 데이터 일체형)을* 이용해 SAS포트에 연결해서 사용할 수 있다. 

SATA 컨트롤러 동작 모드(Operating modes)
========================================

SATA 컨트롤러는 여러가지 운영 모드를 제공한다. 

- PATA(IDE, 에뮬레이션): 레거시 OS에서 SATA 컨트롤러를 사용할 수 있도록 한다.
- AHCI: :ref:`AHCI` 만 지원하는 모드이다.
- RAID: AHCI와 함께 RAID를 지원하는 모드이다. 인텔은 RAID 모드를 권고한다.

.. _ACHI:

AHCI(Advanced Host Controller Interface)
========================================

AHCI는 SATA HBA의 동작을 명시한 인터페이스이다. AHCI는 핫 스와핑(hot swapping), NCQ(native command queuing)과 같은 고급기능을 사용할 수 있게 한다. AHCI는 하드웨어 설계자와 개발자가 SATA/AHCI 어댑터를 개발할 수 있는 방법을 제시한다.

NVM Express(NVMe)
=================

드라이버와 비휘발성 메모리 서브시스템(non-volatile memory subsystem) 간의 통신에 사용되는 레지스터 레벨의 인터페이스를 뜻한다. 기존의 AHCI는 저속의 하드디스크를 위해 설계된 인터페이스 이므로 SSD의 성능을 최대한으로 끌어낼 수 없다. 따라서 NVMe와 같은 PCIe 버스를 기반으로 하는 컨트롤러가 개발되었다.

Serial Attached SCSI (SAS)
==========================

SCSI 저장 장치 간 직렬 전송 프로토콜을 정의한 인터페이스이다. 반대로 SAS 하드디스크를 SATA 포트에 연결할 수 없다.

전송속도

- SAS-2: 6.0 Gbit/s
- SAS-3: 12.0 Gbit/s

구성요소

- 초기자(initiator): 장치 서비스를 시작하는 클라이언트를 갖는 SCSI 장치(SCSI 프로토콜을 지원하는 장치) 이다. HBA나 온보드 형태로 존재한다.
- 타겟(target): SCSI 명령을 수신하고 실행을 위해 1개 이상의 논리적인 장치(HDD, RAID)로 전달하는 SCSI 장치이다.
- 서비스 전달 서브시스템(service delivery subsystem): 초기자와 타겟 사이에서 정보를 전달하는 SCSI I/O 시스템의 부분을 뜻한다.
- 확장 장치(expander device): 여러개의 SAS 장치(초기자, 타겟)간 통신을 하게 해주는 장치를 뜻한다. 서비스 전달 서브시스템의 구성요소이다.

RAID(Redundant array of independent disks)
==========================================

RAID는 디스크 중첩구성(Disk redundancy)이나 성능 향상을 목적으로 **여러개의 물리적 디스크를 하나의 논리적 단위로 묶는 스토리지 가상화 기술이다.** RAID는 소프트웨어 또는 하드웨어 장치로 존재한다.

디스크 구성 방법은 RAID와 그뒤에 숫자를 붙여서 표현한다.

- **RAID 0:** 미러링이나 패리티없는 스트라이핑 구성이다. 볼륨의 크기는 전체 디스크 크기의 합이다.
- **RAID 1:** 패러티나 스트라이핑 없는 미러링 구성이다. 데이터가 동시에 여러개의 디스크에 쓰기된다. 컨트롤러나 소프트웨어에서 성능최적화를 하였다면 RAID의 처리량은 전체 디스크의 처리량의 합과 같지만, 일반적으로 실제 읽기속도는 가장 빠른 드라이브의 읽기 속도보다 느리다. 쓰기시에 여러개의 디스크를 업데이트해야 하므로 필연적으로 느리며, 가장 느린 디스크의 성능 만큼 성능이 저하된다.
- **RAID 1+0:** 미러링된 드라이브들을 스트라이핑한 구성이다.



키비, 메비, 기비 바이트(KiB, MiB, GiB)
=====================================

기존의 메가 바이트(MB)는 10의 거듭제곱이지만 **키비(KiB), 메비(MiB) ,기비(GiB) 바이트는** 이진 접두어로 사용된다. 따라서 이 단위는 2진 컴퓨터에 더 적절하다고 할 수 있다. 이 용어는 IEC(International Electrotechnical Commission)에 의해 1998년에 정의되었으며 정확하게 2의 거듭제곱을 표현하기 위해 MB를 대체했다. 여기서 정확하게라는 의미는 국제 단위 체계(International System of Units)와 차이를 둔다는 의미이다. 하지만 아직 널리 인정받고 있고 있지 않다. 

SMB
=========

**SMB(Server Message Block)** 는 네트워크 파일 공유 프로토콜이다. CIFS는 SMB의 표현식(dialects) 중 하나이다.

NFS
==========
**NFS(Network File System)** 은 컴퓨터 사용자가 네트워크상의 파일에 접근할 때 직접 연결된 스토리지에 접근하는 것 처럼 접근하도록 지원해주는 프로토콜이다.

Link Aggregation
=======================================

링크 어그리게이션 여러개의 네트워크 연결을 묶어 더 높은 대역폭과 링크의 장애를 대비한 복제/중복(redundancy)를 제공하는 기술을 뜻한다. 포괄적인 용어로 *NIC teaming, NIC bonding, port trunking* 등이 사용된다. 이는 IEEE802.3ad에 정의된 :ref:`LACP` 와 같은 표준기술을 포함하며 다양한 솔루션을 포함한다.

.. _LACP:

LACP(Link Aggregation Control Protocol)
=======================================

*IEEE 802.3ad에* 정의되어 있으며 물리적인 포트를 하나의 논리적인 채널로 묶는 프로토콜을 뜻한다. LACP는 LACP 패킷을 전송하여 협상하므로써 링크 묶음(bundle) 작업을 진행한다. 이때 직접 연결된 장치(스위치) 역시 LACP를 지원해야 한다.

포트(Port)
=================

포트는 케이블이나 플러그가 연결되는 부분이다. 모니터, 키보드나 다른 장치를 연결하기 위해 사용된다.

Fibre Channel Adapter
=====================

서버와 SAN의 연결을 제공하는 어댑터이다.

참조
====

- AHCI: https://en.wikipedia.org/wiki/Advanced_Host_Controller_Interface
- 다중 채널 메모리 구조: https://en.wikipedia.org/wiki/Multi-channel_memory_architecture
- LACP: https://en.wikipedia.org/wiki/Link_aggregation#Link_Aggregation_Control_Protocol
- RAID: https://answers.microsoft.com/en-us/windows/forum/windows_8-hardware/what-does-ahci-mode-ide-mode-raid-mode-sata-mean/d622d5cd-41c4-4b84-90ef-cea69aa47089?auth=1
- SAS: http://www.t10.org/drafts.htm#SCSI3_SAS
- SAS: http://www.seagate.com/staticfiles/support/disc/manuals/Interface%20manuals/100293071c.pdf
- NVME: http://www.kbench.com/?q=node/149517
- SFF-8482: http://www.bodnara.co.kr/bbs/article.html?num=94364
- RAID: https://en.wikipedia.org/wiki/RAID
