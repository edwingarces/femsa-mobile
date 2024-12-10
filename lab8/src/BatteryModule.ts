import {
  NativeModules,
  NativeEventEmitter,
  EmitterSubscription,
} from 'react-native';

type BatteryModuleType = {
  getBatteryLevel(): Promise<number>;
  addListener(eventName: string): void;
  removeListeners(count: number): void;
};

const {BatteryModule} = NativeModules as {BatteryModule: BatteryModuleType};

const batteryEventEmitter = new NativeEventEmitter(BatteryModule);

export default {
  getBatteryLevel: BatteryModule.getBatteryLevel,
  onBatteryLevelChange: (
    callback: (level: number) => void,
  ): EmitterSubscription => {
    // Suscribirse al evento
    return batteryEventEmitter.addListener('batteryLevelDidChange', event => {
      callback(event.level);
    });
  },
};
