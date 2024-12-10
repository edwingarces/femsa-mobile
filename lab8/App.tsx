import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import BatteryModule from './src/BatteryModule';

const LOW_BATTERY_THRESHOLD = 20;

const App = () => {
  const [batteryLevel, setBatteryLevel] = useState<number>(0);

  useEffect(() => {
    // Obtener el nivel de batería inicial
    BatteryModule.getBatteryLevel().then(level => {
      setBatteryLevel(level);
      if (level < LOW_BATTERY_THRESHOLD) {
        Alert.alert('Warning', 'Battery is low!');
      }
    });

    // Escuchar cambios en el nivel de batería
    const subscription = BatteryModule.onBatteryLevelChange(level => {
      setBatteryLevel(level);
      if (level < LOW_BATTERY_THRESHOLD) {
        Alert.alert('Warning', 'Battery is low!');
      }
    });

    return () => {
      subscription.remove(); // Limpiar listener al desmontar
    };
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Battery Level: {batteryLevel}%</Text>
    </View>
  );
};

export default App;
