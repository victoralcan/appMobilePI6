import React, { useEffect } from 'react';
import { Container, Main } from '../../styles/loggedGlobalStyle';
import { connect } from 'react-redux';
import Header from '../../components/Header'
import { IRootState } from "../../shared/reducers";
import { fetchCourseWorks, reset } from "../../shared/reducers/courseWork.reducer";
import { FlatList } from "react-native";

import {
  AcitivitiesDueContainer,
  ActivitiesContainer,
  ActivitiesCreationTime,
  ActivitiesDateContainer,
  ActivitiesDescription,
  ActivitiesDueDate,
  ActivitiesDueTime,
  ActivitiesMaxPoints,
  ActivitiesTitle,
  ActivitiesUpdatedTime
} from './styles';

import moment from 'moment';
import 'moment/locale/pt-br';


interface IAtividadesProps extends StateProps, DispatchProps {
}

const Atividades: (props: IAtividadesProps) => JSX.Element = (props: IAtividadesProps) => {
  const { token, selectCourse, courseWorks, fetchCourseWorksSuccess } = props;
  useEffect(() => {
    props.reset();
    props.fetchCourseWorks(token, selectCourse.id);
  }, []);

  // Formatando datas
  moment.locale('pt-br');
  const CreationTime = moment().format('DD MMM')

  function getDueData(day, month, year) {

  }
// `https://classroom.googleapis.com/v1/courses/${courseId}/courseWork/${courseWorkId}/studentSubmissions`
  return (
    <>
      <Container>
        <Header/>
        <Main>
          {fetchCourseWorksSuccess &&
          <FlatList
                  data={courseWorks}
                  keyExtractor={courseWork => courseWork.id}
                  renderItem={({ item }) => (
                    <ActivitiesContainer>
                      <ActivitiesTitle>{item.title}</ActivitiesTitle>
                      <ActivitiesDateContainer>
                        <ActivitiesCreationTime>{moment(item.creationTime).format('DD MMM') + '.'}</ActivitiesCreationTime>
                        <ActivitiesUpdatedTime>{'Editado às ' + moment(item.updateTime).format('h:mm, DD MMM.')}</ActivitiesUpdatedTime>
                      </ActivitiesDateContainer>
                      {item.maxPoints && <ActivitiesMaxPoints>{item.maxPoints + ' Pontos'}</ActivitiesMaxPoints>}
                      <AcitivitiesDueContainer>
                        <ActivitiesDueDate>{'Data de entrega: ' + item.dueDate?.day + '/' + item.dueDate?.month + '/' + item.dueDate?.year}</ActivitiesDueDate>
                        <ActivitiesDueTime>{'às ' + item.dueTime?.hours + ':' + item.dueTime?.minutes}</ActivitiesDueTime>
                      </AcitivitiesDueContainer>
                      <ActivitiesDescription>{item.description}</ActivitiesDescription>
                    </ActivitiesContainer>
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
)(Atividades);
