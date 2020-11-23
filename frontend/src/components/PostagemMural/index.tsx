import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IRootState } from "../../shared/reducers";
import { Text } from "react-native";
import axios from "axios";
import { UserProfile } from "../../shared/models/course.model";
import moment from 'moment';
import 'moment/locale/pt-br';


import { 
  AnnouncementContainer,
  AnnouncementUser,
  AnnouncementCreationTime,
  AnnouncementDateContainer,
  AnnouncementMaterial,
  AnnouncementText,
  AnnouncementUpdatedTime
} from "./styles";

import IAnnouncement from "../../shared/models/announcement.model";

interface IPostagemMuralProps extends StateProps, DispatchProps {
  userID: string;
  announcement: IAnnouncement
}

const PostagemMural: (props: IPostagemMuralProps) => JSX.Element = (props: IPostagemMuralProps) => {
  const { token, userID, announcement } = props;
  const [user, setUser] = useState({} as UserProfile);
  useEffect(() => {
    const requestUrl = `https://classroom.googleapis.com/v1/userProfiles/${userID}`;
    axios.get(requestUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((data) => {
      setUser(data.data);
    })
      .catch((er) => {
        console.log(er);
      })
  }, []);

  // Formatando datas
  moment.locale('pt-br');
  const CreationTime = moment(announcement.creationTime).format('DD MMM')
  const UpdatedTime = moment(announcement.updateTime).format('h:mm, DD MMM.')

  return (
    <>
      <AnnouncementContainer>
        <AnnouncementUser>{user.name && user.name.fullName}</AnnouncementUser>
        <AnnouncementDateContainer>
          <AnnouncementCreationTime>{CreationTime+'.'}</AnnouncementCreationTime>
          <AnnouncementUpdatedTime>{'Editado às '+UpdatedTime}</AnnouncementUpdatedTime>
        </AnnouncementDateContainer>
        <AnnouncementText numberOfLines={3}>{announcement.text}</AnnouncementText>
        <AnnouncementMaterial>
          <Text>MATERIAIS</Text>
        </AnnouncementMaterial>
      </AnnouncementContainer>
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
)(PostagemMural);
