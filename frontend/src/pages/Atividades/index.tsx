import React from 'react';
import { Back, Container, Main } from '../../styles/loggedGlobalStyle';

import Header from '../../components/Header'

const Atividades: React.FC = () => {
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

export default Atividades;
