import React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ route }: any) {
  const { id } = route.params || {};

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Detalle del Destino {id}</Text>
    </View>
  );
}
