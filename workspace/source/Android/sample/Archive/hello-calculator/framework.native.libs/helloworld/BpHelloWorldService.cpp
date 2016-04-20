#include <binder/Parcel.h>
#include <helloworld/BpHelloWorldService.h>

namespace android{

  status_t BpHelloWorldService::helloWorld(const char *str) {
      Parcel data, reply;
   
      //송신용 데이터에 서비스 인터페이스의 이름을 저장한다.
      data.writeInterfaceToken(IHelloWorldService::getInterfaceDescriptor());

      //송신용 데이터에 출력 문자열을 저장한다.
      data.writeCString(str);

      //BpBinder 클래스의 transact() 메서드를 호출한다.
      status_t status = remote()->transact(HW_HELLOWORLD, data, &reply);
   
      if (status != NO_ERROR) {
          ALOGE("print helloworld error: %s", strerror(-status));
      } else {
          //helloWorld() 메서드의 호출 결과를 읽어들인다.
          status = reply.readInt32();
      }
      
      return status;
  }

 status_t BpHelloWorldService::add(int numberOne, int numberTwo) {
      Parcel data, reply;
   
      data.writeInterfaceToken(IHelloWorldService::getInterfaceDescriptor());

      data.writeInt32(numberOne);
      data.writeInt32(numberTwo);
      status_t status = remote()->transact(TRANSACTION_add, data, &reply);
   
      if (status != NO_ERROR) {
          ALOGE("function add error: %s", strerror(-status));
      } else {
          status = reply.readInt32();
      }
      
      return status;
  }

 status_t BpHelloWorldService::subtract(int numberOne, int numberTwo) {
      Parcel data, reply;
   
      data.writeInterfaceToken(IHelloWorldService::getInterfaceDescriptor());

      data.writeInt32(numberOne);
      data.writeInt32(numberTwo);
      status_t status = remote()->transact(TRANSACTION_subtract, data, &reply);
   
      if (status != NO_ERROR) {
          ALOGE("function add error: %s", strerror(-status));
      } else {
          status = reply.readInt32();
      }
      
      return status;
  }

 status_t BpHelloWorldService::multiple(int numberOne, int numberTwo) {
      Parcel data, reply;
   
      data.writeInterfaceToken(IHelloWorldService::getInterfaceDescriptor());

      data.writeInt32(numberOne);
      data.writeInt32(numberTwo);
      status_t status = remote()->transact(TRANSACTION_multiple, data, &reply);
   
      if (status != NO_ERROR) {
          ALOGE("function add error: %s", strerror(-status));
      } else {
          status = reply.readInt32();
      }
      
      return status;
  }

 status_t BpHelloWorldService::divide(int numberOne, int numberTwo) {
      Parcel data, reply;
   
      data.writeInterfaceToken(IHelloWorldService::getInterfaceDescriptor());

      data.writeInt32(numberOne);
      data.writeInt32(numberTwo);
      status_t status = remote()->transact(TRANSACTION_divide, data, &reply);
   
      if (status != NO_ERROR) {
          ALOGE("function add error: %s", strerror(-status));
      } else {
          status = reply.readInt32();
      }
      
      return status;
  }

  BpHelloWorldService::BpHelloWorldService (const sp<IBinder>& impl)
                                         : BpInterface<IHelloWorldService>(impl)
  {}

}; // namespace android
