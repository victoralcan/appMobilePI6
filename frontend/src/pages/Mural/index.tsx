import React from 'react';
import { Container, Main } from '../../styles/loggedGlobalStyle';
import { connect } from 'react-redux';

import Header from '../../components/Header'
import { IRootState } from "../../shared/reducers";

interface IMuralProps extends StateProps, DispatchProps {
}

const Mural: (props: IMuralProps) => JSX.Element = (props: IMuralProps) => {
  const { token } = props;
  return (
    <>
      <Container>
        <Header/>
        <Main/>
      </Container>
    </>
  );
};

const mapStateToProps = (store: IRootState) => ({
  token: store.authentication.userToken,
});

const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mural);
