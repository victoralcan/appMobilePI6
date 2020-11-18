import React from 'react';
import { Container, Main } from '../../styles/loggedGlobalStyle';

import Header from '../../components/Header'

const Notas: React.FC = () => {
  return (
    <>
      <Container>
        <Header/>
        <Main/>
      </Container>
    </>
  );
};

export default Notas;
