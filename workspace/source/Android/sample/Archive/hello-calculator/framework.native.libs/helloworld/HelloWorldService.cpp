#include <binder/IServiceManager.h>
#include <binder/IPCThreadState.h>
#include <helloworld/BnHelloWorldService.h>
#include <helloworld/HelloWorldService.h>
#include <utils/Log.h>

namespace android {

/*
  void HelloWorldService::instantiate() {
      defaultServiceManager()->addService(
      String16("android.apps.IHelloWorldService"), new HelloWorldService());
  }
*/

  status_t HelloWorldService::helloWorld(const char* str) {
      ALOGI("%s\n", str);
      printf("%s\n", str);
      
      return NO_ERROR;
  }

  int HelloWorldService::add(int numberOne, int numberTwo) {
	int result = numberOne + numberTwo;

	ALOGI("add service call");
	printf("%5d + %5d = %10d\n", numberOne, numberTwo, result);

	return result;
  }

  int HelloWorldService::subtract(int numberOne, int numberTwo) {
	int result = numberOne - numberTwo;

	ALOGI("subtract service call");
	printf("%5d - %5d = %10d\n", numberOne, numberTwo, result);

	return result;
  }

  int HelloWorldService::multiple(int numberOne, int numberTwo) {
	int result = numberOne * numberTwo;

	ALOGI("multiple service call");
	printf("%5d * %5d = %10d\n", numberOne, numberTwo, result);

	return result;

  }

  int HelloWorldService::divide(int numberOne, int numberTwo) {
	int result = numberOne / numberTwo;

	ALOGI("divide service call");
	printf("%5d / %5d = %10d\n", numberOne, numberTwo, result);

	return result;
  }

  HelloWorldService::HelloWorldService() : BnHelloWorldService() 
  {
      ALOGI("HelloWorldService is created");
  }

  HelloWorldService::~HelloWorldService()
  {
      ALOGI("HelloWorldService is destroyed");
  }
// ------------------------------------------------------------

  status_t HelloWorldService::onTransact( uint32_t code, 
                                          const Parcel& data, 
                                          Parcel* reply, 
                                          uint32_t flags)
  {
      return BnHelloWorldService::onTransact(code, data, reply, flags);
  }
// ------------------------------------------------------------

}; // namespace android
