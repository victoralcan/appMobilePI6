import React from 'react';
import { Wrapper, Container, Main, Back} from './styles';

import Header from '../../components/Header'

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main />
      </Container>
      <Back>
        
      </Back>
    </Wrapper>
    
  );
};

export default Home;