import React from 'react';
import { Button, Text } from 'react-native';

import { Container } from './styles';

const Login: React.FC = (props) => {
  return (
    <Container>
      <Text>Login</Text>
      <Button
        title="loggin"
        // @ts-ignore
        onPress={() => props.navigation.navigate('LoggedIn')}
      />
    </Container>
  );
};

export default Login;
