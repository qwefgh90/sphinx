#ifndef IHello_World_Service_H
#define IHello_World_Service_H

#include <binder/IInterface.h>

namespace android {

  //HelloWorldService에서 사용할 RPC 코드 정의
  enum {
    HW_HELLOWORLD = IBinder::FIRST_CALL_TRANSACTION,
    TRANSACTION_add,
    TRANSACTION_subtract,
    TRANSACTION_multiple,
    TRANSACTION_divide
  };

  //서비스 인터페이스인 IHelloWorldService 클래스를 정의한다.
  class IHelloWorldService: public IInterface 
  {
    public:
      //서비스 인터페이스 매크로
      DECLARE_META_INTERFACE(HelloWorldService);
      // 서비스 함수
      virtual status_t helloWorld(const char *str)=0;
      virtual int add(int numberOne, int numberTwo)=0;
      virtual int subtract(int numberOne, int numberTwo)=0;
      virtual int multiple(int numberOne, int numberTwo)=0;
      virtual int divide(int numberOne, int numberTwo)=0;
  };
  
}; // namespace android

#endif
