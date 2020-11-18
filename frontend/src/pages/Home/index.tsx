import React, { useEffect } from 'react';
import { Container, Main, Back } from '../../styles/loggedGlobalStyle';
import { connect } from 'react-redux';

import Header from '../../components/Header'
import { IRootState } from "../../shared/reducers";
import { fetchCourses } from '../../shared/reducers/course.reducer';

import { FlatList, StyleSheet, Text } from 'react-native';

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

interface IHomeProps extends StateProps, DispatchProps {
}

const Home: (props: IHomeProps) => JSX.Element = (props: IHomeProps) => {
  const { token, courses, fetchSuccess } = props;
  useEffect(() => {
    props.fetchCourses(token);
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
                <Text style={styles.item}>{item.name}</Text>
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

const mapDispatchToProps = { fetchCourses };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
