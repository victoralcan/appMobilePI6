import React from 'react';
import * as Google from 'expo-google-app-auth';
import { connect } from 'react-redux';
import { AppTittle, ButtonText, Container, LoginButton } from './styles';
import { setLoggedIn } from '../../shared/reducers/authentication';
import { AntDesign } from '@expo/vector-icons';

interface ILoginProps extends StateProps, DispatchProps {
}

const Login: (props: ILoginProps) => JSX.Element = (props: ILoginProps) => {
  const config = {
    androidClientId: "802976640146-rgue20kdeju6vu3i1tqrjj19074tsir7.apps.googleusercontent.com",
    iosClientId: "802976640146-nj7fbl2r2vcf4df3msmb71fm852jiv2k.apps.googleusercontent.com",
    scopes: ["https://www.googleapis.com/auth/classroom.courses",
      "https://www.googleapis.com/auth/classroom.coursework.me",
      "https://www.googleapis.com/auth/classroom.announcements",
      "https://www.googleapis.com/auth/classroom.rosters.readonly"],
    androidStandaloneAppClientId: '802976640146-0mq7plli71r0ov7udm1uj5q7k2e1rudq.apps.googleusercontent.com'
  };
  const loginUser = async () => {
    // @ts-ignore
    const { type, accessToken, user } = await Google.logInAsync(config);
    if (type === 'success') {
      props.setLoggedIn(accessToken, user);
    }
  };
  return (
    <Container>
      <AppTittle>NOSSA EAD</AppTittle>

      <LoginButton onPress={loginUser}>
        <AntDesign name="google" size={24} color="black"/>
        <ButtonText>Login With Google</ButtonText>
      </LoginButton>

    </Container>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = { setLoggedIn };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
