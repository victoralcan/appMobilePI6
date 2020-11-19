import React from 'react';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { AppName, Avatar, Button, Container, RightSide, AppNameContainer } from './styles';
import { connect } from 'react-redux';

import colors from '../../styles/colors';
import { setLoggedOut } from "../../shared/reducers/authentication";

interface IHeaderProps extends StateProps, DispatchProps {
}

const Header: (props: IHeaderProps) => JSX.Element = (props: IHeaderProps) => {
  return (
    <Container>
      <Avatar>
      </Avatar>
      <AppNameContainer>
        <AppName>Nossa EAD</AppName>
      </AppNameContainer>
      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={22}
            color={colors.white}
          />
        </Button>
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
