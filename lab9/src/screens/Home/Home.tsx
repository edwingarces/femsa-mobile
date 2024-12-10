import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Pantalla Principal - Destinos</Text>
      <Button title="Ver Detalle de un Destino" onPress={() => navigation.navigate('Details', { id: 1 })} />
    </View>
  );
}
