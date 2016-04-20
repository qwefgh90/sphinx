package android.app;

import android.os.RemoteException;
import android.content.Context;
import android.util.Log;

public class HelloWorldService extends IHelloWorld.Stub
{
	private static final String TAG = "HelloWorldService";
	Context mContext;

	public HelloWorldService(Context context) {
		mContext = context;
	}

	public void printHello() throws RemoteException {
		Log.i(TAG, "Hello, World");
	}

	public int add(int numberOne, int numberTwo) throws RemoteException  {
		Log.i(TAG, "Add");
		return numberOne + numberTwo;
	}

	public int subtract(int numberOne, int numberTwo)  throws RemoteException {
		Log.i(TAG, "Subtrac");
		return numberOne - numberTwo;
	}

	public int multiple(int numberOne, int numberTwo)  throws RemoteException {
		Log.i(TAG, "Multiple");
		return numberOne * numberTwo;
	}

	public int divide(int numberOne, int numberTwo)  throws RemoteException {
		Log.i(TAG, "Divide");
		return numberOne / numberTwo;
	}
}
