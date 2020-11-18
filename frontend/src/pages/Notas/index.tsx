import React from 'react';
import { Back, Container, Main } from '../../styles/loggedGlobalStyle';

import Header from '../../components/Header'

const Notas: React.FC = () => {
  return (
    <>
      <Container>
        <Header/>
        <Main/>
      </Container>
      <Back>
      </Back>
    </>
  );
};

export default Notas;
