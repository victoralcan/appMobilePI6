import React, { useEffect } from 'react';
import { Container, Main } from '../../styles/loggedGlobalStyle';
import { connect } from 'react-redux';
import Header from '../../components/Header'
import { IRootState } from "../../shared/reducers";
import { fetchStudents } from "../../shared/reducers/course.reducer";
import { FlatList, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

interface IPessoasProps extends StateProps, DispatchProps {
}

const Pessoas: (props: IPessoasProps) => JSX.Element = (props: IPessoasProps) => {
  const { token, selectCourse, students } = props;
  useEffect(() => {
    props.fetchStudents(token, selectCourse.id);
  }, []);
  console.log(students);
  return (
    <>
      <Container>
        <Header/>
        <Main>
          <FlatList
            data={students}
            keyExtractor={student => student.userId}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.profile.name.fullName}</Text>
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
  students: store.courses.students
});

const mapDispatchToProps = { fetchStudents };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pessoas);

