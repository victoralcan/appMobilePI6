import React, { useEffect } from 'react';
import { Container, Main } from '../../styles/loggedGlobalStyle';
import { connect } from 'react-redux';
import Header from '../../components/Header'
import { IRootState } from "../../shared/reducers";
import { fetchCourseWorks } from "../../shared/reducers/courseWork.reducer";
import { FlatList, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

interface IAtividadesProps extends StateProps, DispatchProps {
}

const Atividades: (props: IAtividadesProps) => JSX.Element = (props: IAtividadesProps) => {
  const { token, selectCourse, courseWorks } = props;
  useEffect(() => {
    props.fetchCourseWorks(token, selectCourse.id);
  }, []);
  return (
    <>
      <Container>
        <Header/>
        <Main>
          <FlatList
            data={courseWorks}
            keyExtractor={courseWork => courseWork.id}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.description}</Text>
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
  courseWorks: store.courseWork.courseWorks
});

const mapDispatchToProps = { fetchCourseWorks };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Atividades);
