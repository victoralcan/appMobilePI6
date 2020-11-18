import React, { useEffect } from 'react';
import { Container, Main } from '../../styles/loggedGlobalStyle';
import { connect } from 'react-redux';

import Header from '../../components/Header'
import { IRootState } from "../../shared/reducers";
import { FlatList, StyleSheet, Text } from "react-native";
import { fetchAnnouncements } from '../../shared/reducers/announcement.reducer';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

interface IMuralProps extends StateProps, DispatchProps {
}

const Mural: (props: IMuralProps) => JSX.Element = (props: IMuralProps) => {
  const { token, selectCourse, announcements } = props;
  useEffect(() => {
    props.fetchAnnouncements(token, selectCourse.id);
  }, []);
  return (
    <>
      <Container>
        <Header/>
        <Main>
          <FlatList
            data={announcements}
            keyExtractor={announcement => announcement.id}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.text}</Text>
            )}
          />
        </Main>
      </Container>
    </>
  );
};

const mapStateToProps = (store: IRootState) => ({
  token: store.authentication.userToken,
  selectCourse: store.courses.selectedCourse,
  announcements: store.announcement.announcements
});

const mapDispatchToProps = { fetchAnnouncements };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mural);
