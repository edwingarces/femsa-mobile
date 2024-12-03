import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { logout } from '../services/AuthService';

// @ts-ignore
const LoginScreen: React.FC = ({ navigation }) => {
  const [error, setError] = useState('');

  const handleLogout = async () => {
    try {
      await logout();
      navigation.popToTop();
    } catch (err) {
      setError('Logout failed');
    }
  };

  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default LoginScreen;
