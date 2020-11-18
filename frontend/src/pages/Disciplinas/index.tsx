import React, { useEffect } from 'react';
import { Container, Main } from '../../styles/loggedGlobalStyle';
import { connect } from 'react-redux';

import Header from '../../components/Header'
import { IRootState } from "../../shared/reducers";
import { fetchCourses, selectCourse, reset } from '../../shared/reducers/course.reducer';

import { FlatList, StyleSheet, Text } from 'react-native';
import { CourseState } from "../../shared/models/course.model";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

interface IDisciplinasProps extends StateProps, DispatchProps {
}

const Disciplinas: (props: IDisciplinasProps) => JSX.Element = (props: IDisciplinasProps) => {
  const { token, courses, fetchSuccess } = props;
  useEffect(() => {
    props.reset();
    props.fetchCourses(token, CourseState.ACTIVE);
  }, []);
  return (
    <>
      <Container>
        <Header/>
        <Main>
          {fetchSuccess ?
            <FlatList
              data={courses}
              keyExtractor={course => course.id}
              renderItem={({ item }) => (
                <Text style={styles.item} onPress={() => props.selectCourse(item)}>{item.name}</Text>
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
  fetchSuccess: store.courses.fetchSuccess
});

const mapDispatchToProps = { fetchCourses, selectCourse, reset };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Disciplinas);
