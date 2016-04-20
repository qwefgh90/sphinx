package android.app;

import android.os.RemoteException;

public class HelloWorldManager
{
	private final IHelloWorld mService;

	HelloWorldManager(IHelloWorld service) {
		mService = service;
	}

	public void printHello() {
		try {
			mService.printHello();
		} catch (RemoteException ex) {
		}
	}

	public int add(int numberOne, int numberTwo) {
		int retVal = 0;

		try {
			retVal = mService.add(numberOne, numberTwo);
		} catch (RemoteException ex) {
		}

		return retVal;
	}

	public int subtract(int numberOne, int numberTwo) {
		int retVal = 0;

		try {
			retVal = mService.subtract(numberOne, numberTwo);
		} catch (RemoteException ex) {
		}

		return retVal;
	}

	public int multiple(int numberOne, int numberTwo) {
		int retVal = 0;

		try {
			retVal = mService.multiple(numberOne, numberTwo);
		} catch (RemoteException ex) {
		}

		return retVal;
	}

	public int divide(int numberOne, int numberTwo) {
		int retVal = 0;

		try {
			retVal = mService.divide(numberOne, numberTwo);
		} catch (RemoteException ex) {
		}

		return retVal;
	}

}
