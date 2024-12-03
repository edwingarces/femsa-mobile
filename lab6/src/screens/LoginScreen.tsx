import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { login } from '../services/AuthService';

type ErrorType = {
  username?: string;
  password?: string;
  general?: string;
};

// @ts-ignore
const LoginScreen: React.FC = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<ErrorType>({});

  const validateInputs = (): boolean => {
    let valid = true;
    let usernameError = '';
    let passwordError = '';

    if (username !== '' && username.trim().length < 3) {
      usernameError = 'Username must be at least 3 characters long.';
      valid = false;
    }

    if (password !== '' && password.trim().length < 8) {
      passwordError = 'Password must be at least 8 characters long.';
      valid = false;
    }

    setError({ username: usernameError, password: passwordError, general: '' });
    return valid;
  };

  const handleLogin = async () => {
    try {
      await login(username, password);
      navigation.navigate('Profile');
    } catch (err) {
      console.log(err);
      setError({ general: 'Login failed' });
    }
  };

  useEffect(() => {
    if (username || password) {
      validateInputs();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, password]);

  return (
    <View>
      <TextInput
        placeholder="Username"
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      {error.general ? <Text>{error?.general}</Text> : null}
      {error.username ? <Text>{error?.username}</Text> : null}
      {error.password ? <Text>{error?.password}</Text> : null}
    </View>
  );
};

export default LoginScreen;
