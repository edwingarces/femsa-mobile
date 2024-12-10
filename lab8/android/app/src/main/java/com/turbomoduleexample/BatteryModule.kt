package com.turbomoduleexample

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.BatteryManager
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule

class BatteryModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
  private var isObserving = false
  private val batteryLevelReceiver = object : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
      if (isObserving) {
        val level = getBatteryLevelFromIntent(intent)
        sendEvent("batteryLevelDidChange", level)
      }
    }
  }

  override fun getName(): String {
    return "BatteryModule"
  }

  override fun initialize() {
    super.initialize()
    val filter = IntentFilter(Intent.ACTION_BATTERY_CHANGED)
    reactApplicationContext.registerReceiver(batteryLevelReceiver, filter)
  }

  override fun onCatalystInstanceDestroy() {
    reactApplicationContext.unregisterReceiver(batteryLevelReceiver)
    super.onCatalystInstanceDestroy()
  }

  @ReactMethod
  fun getBatteryLevel(promise: Promise) {
    val intent = reactApplicationContext.registerReceiver(null, IntentFilter(Intent.ACTION_BATTERY_CHANGED))
    if (intent == null) {
      promise.reject("E_NO_BATTERY", "Battery level unavailable")
      return
    }
    val level = getBatteryLevelFromIntent(intent)
    promise.resolve(level)
  }

  @ReactMethod
  fun addListener(eventName: String) {
    isObserving = true
  }

  @ReactMethod
  fun removeListeners(count: Int) {
    isObserving = false
  }

  private fun getBatteryLevelFromIntent(intent: Intent): Int {
    val level = intent.getIntExtra(BatteryManager.EXTRA_LEVEL, -1)
    val scale = intent.getIntExtra(BatteryManager.EXTRA_SCALE, -1)
    return if (level == -1 || scale == -1) {
      -1
    } else {
      (level.toFloat() / scale.toFloat() * 100).toInt()
    }
  }

  private fun sendEvent(eventName: String, level: Int) {
    reactApplicationContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
      .emit(eventName, level)
  }
}