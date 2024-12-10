import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SearchScreen({ navigation }: any) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Pantalla de Búsqueda</Text>
      <Button title="Ver Detalle del Destino" onPress={() => navigation.navigate('Details', { id: 2 })} />
    </View>
  );
}
