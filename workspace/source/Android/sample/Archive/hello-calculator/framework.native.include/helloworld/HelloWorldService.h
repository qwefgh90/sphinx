#ifndef Hello_World_Service_H
#define Hello_World_Service_H

#include <binder/Parcel.h>
#include <helloworld/BnHelloWorldService.h>
#include <utils/Log.h>
#include <binder/BinderService.h>

namespace android {

  class HelloWorldService : 
	public BinderService<HelloWorldService>, 
	public BnHelloWorldService
  {
    friend class BinderService<HelloWorldService>;

    public:
	static char const* getServiceName() { return "android.apps.IHelloWorldService"; }

       //HelloWorldService 초기화. 시스템에 서비스를 등록한다.
       //static void instantiate();
      
       //서비스 인터페이스를 실질적으로 구현한 메서드
       virtual status_t helloWorld(const char *str);
       virtual int add(int numberOne, int numberTwo);
       virtual int subtract(int numberOne, int numberTwo);
       virtual int multiple(int numberOne, int numberTwo);
       virtual int divide(int numberOne, int numberTwo);

       //BnHelloWorldService()의 onTransact() 메서드를 호출한다.
       virtual status_t onTransact( uint32_t code,
                                    const Parcel& data,
                                    Parcel* reply,
                                    uint32_t flags);
    private:
       //new 연산자를 이용해 직접 생성할 수 없도록 private 영역에 생성자를 선언
       HelloWorldService();

       virtual ~HelloWorldService();
  };
  
};// namespace android

#endif
