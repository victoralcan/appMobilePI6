import React, { useEffect, useState,} from 'react';
import { connect } from 'react-redux';
import { IRootState } from "../../shared/reducers";
import axios from "axios";
import { UserProfile } from "../../shared/models/course.model";
import { Entypo, AntDesign } from '@expo/vector-icons'; 
import moment from 'moment';
import 'moment/locale/pt-br';
import {Linking} from "react-native"


import {
  AnnouncementContainer,
  AnnouncementCreationTime,
  AnnouncementDateContainer,
  AnnouncementMaterial,
  AnnouncementText,
  AnnouncementUpdatedTime,
  AnnouncementUser,
  AnnouncementMaterialText
} from "./styles";

import IAnnouncement from "../../shared/models/announcement.model";
import IStudentSubmission from "../../shared/models/studentSubmission.model";

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
  // console.log(announcement.materials[1]?.driveFile?.driveFile?.id)

  const driveFiles = announcement.materials ? announcement.materials.map((files) => {
    if('driveFile' in files) { 
      return (<>
        <AnnouncementMaterial>
          <Entypo name="google-drive" size={20} color="black" />
          <AnnouncementMaterialText
            numberOfLines={1}   
            onPress={ () =>{
            Linking.openURL(files.driveFile.driveFile.alternateLink)
             .catch(err => console.error('An error occurred', err));
              }}>{files.driveFile.driveFile.title ? files.driveFile.driveFile.title : "Arquivo Desconhecido"}</AnnouncementMaterialText>
        </AnnouncementMaterial>
        </>)
    }
 }) : null ;

 const links = announcement.materials ? announcement.materials.map((files) => {
  if('link' in files) {
    return (<>
      <AnnouncementMaterial>
        <Entypo name="link" size={20} color="black" />
        <AnnouncementMaterialText
          numberOfLines={1}   
          onPress={ () =>{
          Linking.openURL(files.link.url)
           .catch(err => console.error('An error occurred', err));
            }}>{files.link.title}</AnnouncementMaterialText>
      </AnnouncementMaterial>
      </>)
  } 
}) : null;

const youtubeVideo = announcement.materials ? announcement.materials.map((files) => {
  if('youtubeVideo' in files) {
    return (<>
      <AnnouncementMaterial>
        <Entypo name="youtube" size={20} color="black" />
        <AnnouncementMaterialText
          numberOfLines={1}   
          onPress={ () =>{
          Linking.openURL(files.youtubeVideo.alternateLink)
           .catch(err => console.error('An error occurred', err));
            }}>{files.youtubeVideo.title}</AnnouncementMaterialText>
      </AnnouncementMaterial>
      </>)
  } 
}): null;

const googleForm = announcement.materials ? announcement.materials.map((files) => {
  if('form' in files) {
    return (<>
      <AnnouncementMaterial>
        <AntDesign name="form" size={24} color="black" />
        <AnnouncementMaterialText
          numberOfLines={1}   
          onPress={ () =>{
          Linking.openURL(files.form.formUrl)
           .catch(err => console.error('An error occurred', err));
            }}>{files.form.title}</AnnouncementMaterialText>
      </AnnouncementMaterial>
      </>)
  } 
}): null;


  return (
    <>
      <AnnouncementContainer>
        <AnnouncementUser>{user.name && user.name.fullName}</AnnouncementUser>
        <AnnouncementDateContainer>
          <AnnouncementCreationTime>{CreationTime + '.'}</AnnouncementCreationTime>
          <AnnouncementUpdatedTime>{'Editado às ' + UpdatedTime}</AnnouncementUpdatedTime>
        </AnnouncementDateContainer>
        <AnnouncementText>{announcement.text.trimEnd()}</AnnouncementText>
         {driveFiles}
         {links}
         {youtubeVideo}
         {googleForm}
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
