import React, { useEffect } from 'react';
import { Container, Main } from '../../styles/loggedGlobalStyle';
import { connect } from 'react-redux';

import Header from '../../components/Header'
import { IRootState } from "../../shared/reducers";
import { FlatList } from "react-native";
import { fetchAnnouncements, reset } from '../../shared/reducers/announcement.reducer';
import PostagemMural from "../../components/PostagemMural";

interface IMuralProps extends StateProps, DispatchProps {
}

const Mural: (props: IMuralProps) => JSX.Element = (props: IMuralProps) => {
  const { token, selectCourse, announcements, fetchAnnouncementsSuccess } = props;
  useEffect(() => {
    props.reset();
    props.fetchAnnouncements(token, selectCourse.id);
  }, []);

  return (
    <>
      <Container>
        <Header/>
        <Main>
          {fetchAnnouncementsSuccess &&
          <FlatList
                  data={announcements}
                  keyExtractor={announcement => announcement.id}
                  renderItem={({ item }) => (
                    <PostagemMural userID={item.creatorUserId} announcement={item}/>
                  )}
          />}
        </Main>
      </Container>
    </>
  );
};

const mapStateToProps = (store: IRootState) => ({
  token: store.authentication.userToken,
  selectCourse: store.courses.selectedCourse,
  announcements: store.announcement.announcements,
  fetchAnnouncementsSuccess: store.announcement.fetchAnnouncementsSuccess
});

const mapDispatchToProps = { fetchAnnouncements, reset };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mural);
