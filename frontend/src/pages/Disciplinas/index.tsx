import React, { useEffect } from 'react';
import { Container, Main } from '../../styles/loggedGlobalStyle';
import { connect } from 'react-redux';

import Header from '../../components/Header'
import { IRootState } from "../../shared/reducers";
import { fetchCourses, reset, selectCourse } from '../../shared/reducers/course.reducer';

import { FlatList, StyleSheet, Text } from 'react-native';
import { CourseState } from "../../shared/models/course.model";

import { CourseConteiner, CourseName, CourseSection } from './styles';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

interface IDisciplinasProps extends StateProps, DispatchProps {
}

const Disciplinas: (props: IDisciplinasProps) => JSX.Element = (props: IDisciplinasProps) => {
  const { token, courses, fetchCoursesSuccess } = props;
  useEffect(() => {
    props.reset();
    props.fetchCourses(token, CourseState.ACTIVE);
  }, []);
  return (
    <>
      <Container>
        <Header/>
        <Main>
          {fetchCoursesSuccess ?
            <FlatList
              data={courses}
              // onEndReached={}
              onEndReachedThreshold={0.1}
              keyExtractor={course => course.id}
              renderItem={({ item }) => (
                <CourseConteiner onPress={() => props.selectCourse(item)}>
                  <CourseName numberOfLines={1}>{item.name}</CourseName>
                  <CourseSection numberOfLines={1}>{item.section}</CourseSection>
                </CourseConteiner>
              )}
            />
            : <Text></Text>}
        </Main>
      </Container>
    </>
  );
};

const mapStateToProps = (store: IRootState) => ({
  courses: store.courses.courses,
  token: store.authentication.userToken,
  fetchCoursesSuccess: store.courses.fetchCoursesSuccess
});

const mapDispatchToProps = { fetchCourses, selectCourse, reset };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Disciplinas);
