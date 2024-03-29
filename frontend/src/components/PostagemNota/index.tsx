import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IRootState } from "../../shared/reducers";
import axios from "axios";
import 'moment/locale/pt-br';
import ICourseWork from "../../shared/models/courseWork.model";
import IStudentSubmission from "../../shared/models/studentSubmission.model";

import { NotaContainer, NotaPoints, NotaTitle } from './styles';

interface IPostagemNotaProps extends StateProps, DispatchProps {
  courseWork: ICourseWork
}

const PostagemNota: (props: IPostagemNotaProps) => JSX.Element = (props: IPostagemNotaProps) => {
  const { token, courseWork } = props;
  const [studentSubmission, setStudentSubmission] = useState([] as Array<IStudentSubmission>);
  const [fetchSuccess, setFetchSuccess] = useState(false);
  useEffect(() => {
    const requestUrl = `https://classroom.googleapis.com/v1/courses/${courseWork.courseId}/courseWork/${courseWork.id}/studentSubmissions`;
    axios.get(requestUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((data) => {
      setStudentSubmission(data.data.studentSubmissions);
      setFetchSuccess(true);
    })
      .catch((er) => {
        console.log(er);
      })
  }, []);

  return (
    <>
      {fetchSuccess && studentSubmission[studentSubmission.length - 1] &&
      <NotaContainer>
          <NotaTitle numberOfLines={1}>{courseWork.title}</NotaTitle>
          <NotaPoints >Pontos: {studentSubmission.length > 0 ?
            studentSubmission[studentSubmission.length - 1].assignedGrade ?
              studentSubmission[studentSubmission.length - 1].assignedGrade : 0 : 0} / {courseWork.maxPoints}</NotaPoints>
      </NotaContainer>}
    </>
  );
};

const mapStateToProps = (store: IRootState) => ({
  token: store.authentication.userToken
});

const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostagemNota);
