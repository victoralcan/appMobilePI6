import React from 'react';
import { Feather } from '@expo/vector-icons';
import { AppName, AppNameContainer, Avatar, Button, Container, RightSide } from './styles';
import { connect } from 'react-redux';

import colors from '../../styles/colors';
import { setLoggedOut } from "../../shared/reducers/authentication";

interface IHeaderProps extends StateProps, DispatchProps {
}

const Header: (props: IHeaderProps) => JSX.Element = (props: IHeaderProps) => {
  return (
    <Container>
      <AppNameContainer>
        <AppName>Nossa EAD</AppName>
      </AppNameContainer>
      <RightSide>
        <Button onPress={props.setLoggedOut}>
          <Feather
            name="log-out"
            size={22}
            color={colors.white}
          />
        </Button>
      </RightSide>
    </Container>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = { setLoggedOut };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
