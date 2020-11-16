import React from 'react';
import { Button, Text } from 'react-native';
import * as Google from 'expo-google-app-auth';
import { Container } from './styles';

const Login: React.FC = () => {
  const config = {
    androidClientId: "802976640146-rgue20kdeju6vu3i1tqrjj19074tsir7.apps.googleusercontent.com",
    scopes: ["https://www.googleapis.com/auth/classroom.courses"]
  };
  const loginUser = async () => {
    // @ts-ignore
    const { type, accessToken, user } = await Google.logInAsync(config);
    if (type === 'success') {
      console.log('logado');
      console.log(accessToken);
      console.log(user);
    } else {
      console.log("deu ruim");
    }
  };
  return (
    <Container>
      <Text>Login</Text>
      <Button title="Logar" onPress={loginUser}/>
    </Container>
  );
};

export default Login;
