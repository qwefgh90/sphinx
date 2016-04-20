#define LOG_TAG "main_helloworldclient"

#include <binder/IPCThreadState.h>
#include <binder/ProcessState.h>
#include <binder/IServiceManager.h>

#include <utils/Log.h>
#include <utils/RefBase.h>

#include <helloworld/IHelloWorldService.h>

using namespace android;

int main(int argc, char *argv[])
{
   ALOGI("HelloWorldService client is now starting");

   sp<IServiceManager> sm = defaultServiceManager();
   sp<IBinder> b;
   sp<IHelloWorldService> sHelloWorldService;

   int result;

   do {
      b = sm->getService(String16("android.apps.IHelloWorldService"));
      if (b != 0)
      break;
      ALOGI("HelloWorldSerivce is not working, waiting...");
      usleep(500000);
   } while(true);

   sHelloWorldService = interface_cast<IHelloWorldService>(b);
   sHelloWorldService -> helloWorld("hello, world");

   result = sHelloWorldService -> add(30, 40);
   printf("\tadd service return ----> %10d\n\n", result);

   result = sHelloWorldService -> subtract(40,  30);
   printf("\tsubtract service return ----> %10d\n\n", result);

   result = sHelloWorldService -> multiple(30, 40);
   printf("\tmultiple service return ----> %10d\n\n", result);

   result = sHelloWorldService -> divide(390, 7);
   printf("\tdivide service return ----> %10d\n\n", result);

   return(0);
}
