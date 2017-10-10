.. _server_vender:

=========================
 상용 서버의 기술적 특징
=========================

정확한 내용은 참조를 확인해 보시길 바랍니다.

ETERNUS Multipath Driver
========================

ETERNUS DX 계열의 제품은 Multipath Driver과 함께 서버와 스토리지 사이에 고가용성을 제공한다. 경로(Path)란 서버와 스토리지 사이의 물리적 경로를 뜻하는데, 하나의 경로가 실패할 경우 다중 경로 드라이버(Multipath Driver)는 자동적으로 경로를 스위칭하여 무중단을 보장하게 된다.

또한 I/O 요청을 분산하여 로드밸런싱을 수행할 수도 있다. Windows Server의 장치 관리자에서 FUJISU ETERNUS Multi-Path Disk Device로 보이게 된다. 

Dell PowerEdge RAID Controller H710P
====================================

Dell PowerEdge 서버에 호환되는 RAID 컨트롤러이다. 데이터베이스와 스트리밍용으로 사용할 수 있는 고성능 컨트롤러이다. 8개의 포트(각각 6Gb/s, 서버 내부에 존재) 갖고 있으며 PCIe 2.0 x8 버스에 연결되어 있다.

ServerRAID M5014
================

IBM System x를 위한 RAID 컨트롤러이다. 8개의 SAS/SATA 포트를 갖고 있으며 각 포트당 6Gbps만큼의 대역폭을 갖고 있다. SAS/SATA 드라이브를 32개 까지 연결 할 수 있다.

참조
====

- ETERNUS Multipath Driver: http://www.fujitsu.com/global/products/computing/storage/disk/eternus-dx/feature/strsys-b03.html
- Dell PowerEdge RAID Controller H710P: http://i.dell.com/sites/doccontent/shared-content/data-sheets/Documents/dell-perc-h710p-spec-sheet.pdf
- ServerRAID M5014: http://www.scsi4me.com/ibm-serveraid-m5014-8-port-6-gbps-sas-2-0-sas-sata-raid-controller.html
