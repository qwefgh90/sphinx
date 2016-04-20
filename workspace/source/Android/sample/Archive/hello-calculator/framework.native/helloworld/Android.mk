LOCAL_PATH:= $(call my-dir)

include $(CLEAR_VARS)

LOCAL_SRC_FILES:= \
	main_helloworldservice.cpp

LOCAL_SHARED_LIBRARIES := \
   libutils \
	liblog \			# insert
   libbinder \
   libhelloworld
#   base := $(LOCAL_PATH)/../..

LOCAL_C_INCLUDES := \
	$(LOCAL_PATH)/..

LOCAL_MODULE:= helloworldservice

include $(BUILD_EXECUTABLE)

include $(CLEAR_VARS)

LOCAL_SRC_FILES:= \
   main_helloworldclient.cpp

LOCAL_SHARED_LIBRARIES := \
   libutils \
	liblog \			# insert
   libbinder \
   libhelloworld
#   base := $(LOCAL_PATH)/../..

LOCAL_C_INCLUDES := \
	$(LOCAL_PATH)/..
   
LOCAL_MODULE:= helloworldclient

include $(BUILD_EXECUTABLE)
