#ifndef BpHello_World_Service_H
#define BpHello_World_Service_H

#include <binder/Parcel.h>
#include <helloworld/IHelloWorldService.h>

namespace android{

  class BpHelloWorldService: public BpInterface<IHelloWorldService>
  {
    public:
      BpHelloWorldService (const sp<IBinder>& impl);
      virtual status_t helloWorld(const char *str);
      virtual int add(int numberOne, int numberTwo);
      virtual int subtract(int numberOne, int numberTwo);
      virtual int multiple(int numberOne, int numberTwo);
      virtual int divide(int numberOne, int numberTwo);
  };

}; // namespace android

#endif
