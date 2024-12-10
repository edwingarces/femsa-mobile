import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function LoginScreen({ navigation }: any) {
  const { login } = useAuth();

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Pantalla de Login</Text>
      <Button title="Ir a Registro" onPress={() => navigation.navigate('Register')} />
      <Button title="Iniciar Sesión" onPress={login} />
    </View>
  );
}
