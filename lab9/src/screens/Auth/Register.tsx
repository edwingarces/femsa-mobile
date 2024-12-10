import React from 'react';
import { View, Text, Button } from 'react-native';

export default function RegisterScreen({ navigation }: any) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Pantalla de Registro</Text>
      <Button title="Volver a Login" onPress={() => navigation.replace('Login')} />
    </View>
  );
}
