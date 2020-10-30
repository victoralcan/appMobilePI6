import React from 'react';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Container, Avatar, RightSide, Button, AppName } from './styles';

import colors from '../../styles/colors';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        
      </Avatar>

      <AppName>Nossa EAD</AppName>

      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Button>

        <Button>
          <Feather
            name="log-out"
            size={26}
            color={colors.black}
          />
        </Button>

      </RightSide>
    </Container>
  );
};

export default Header;
