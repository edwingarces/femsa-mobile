import Foundation
import UIKit

@objc(BatteryModule)
class BatteryModule: RCTEventEmitter {
  private var hasListeners = false

  override init() {
    super.init()
    UIDevice.current.isBatteryMonitoringEnabled = true
    NotificationCenter.default.addObserver(self,
                                           selector: #selector(batteryLevelDidChange(_:)),
                                           name: UIDevice.batteryLevelDidChangeNotification,
                                           object: nil)
  }

  deinit {
    NotificationCenter.default.removeObserver(self)
  }

  override static func requiresMainQueueSetup() -> Bool {
    // El EventEmitter suele necesitar acceso al hilo principal para emitir eventos sin problemas.
    return true
  }

  override func supportedEvents() -> [String]! {
    return ["batteryLevelDidChange"]
  }

  override func startObserving() {
    hasListeners = true
  }

  override func stopObserving() {
    hasListeners = false
  }

  @objc
  func getBatteryLevel(_ resolve: RCTPromiseResolveBlock, reject: RCTPromiseRejectBlock) {
    let level = UIDevice.current.batteryLevel
    if level < 0 {
      reject("E_NO_BATTERY", "Battery level unavailable", nil)
    } else {
      resolve(Int(level * 100))
    }
  }

  @objc
  func addListener(_ eventName: String) {
    // requerido por RN, se implementa pero no hace nada especial aquí
  }

  @objc
  func removeListeners(_ count: Double) {
    // requerido por RN, se implementa pero no hace nada especial aquí
  }

  @objc
  private func batteryLevelDidChange(_ notification: Notification) {
    guard hasListeners else { return }
    let level = UIDevice.current.batteryLevel * 100
    sendEvent(withName: "batteryLevelDidChange", body: ["level": Int(level)])
  }
}