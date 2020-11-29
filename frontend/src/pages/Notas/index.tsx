import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Main } from '../../styles/loggedGlobalStyle';

import Header from '../../components/Header'
import { IRootState } from "../../shared/reducers";
import { fetchCourseWorks, reset } from "../../shared/reducers/courseWork.reducer";
import { FlatList } from "react-native";
import PostagemNota from "../../components/PostagemNota";

interface INotasProps extends StateProps, DispatchProps {
}

const Notas: (props: INotasProps) => JSX.Element = (props: INotasProps) => {
  const { token, selectCourse, courseWorks, fetchCourseWorksSuccess } = props;
  useEffect(() => {
    props.reset();
    props.fetchCourseWorks(token, selectCourse.id);
  }, []);
  const scoredCourseWorks = courseWorks.filter(courseWork => courseWork.maxPoints);
  return (
    <>
      <Container>
        <Header/>
        <Main>
          {fetchCourseWorksSuccess &&
          <FlatList
                  data={scoredCourseWorks}
                  keyExtractor={courseWork => courseWork.id}
                  renderItem={({ item }) => (
                    <PostagemNota courseWork={item}/>
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
  courseWorks: store.courseWork.courseWorks,
  fetchCourseWorksSuccess: store.courseWork.fetchCourseWorksSuccess
});

const mapDispatchToProps = { fetchCourseWorks, reset };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notas);
