import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IRootState } from "../../shared/reducers";
import { StyleSheet, Text } from "react-native";
import axios from "axios";
import { UserProfile } from "../../shared/models/course.model";
import { ListItem } from "./styles";
import IAnnouncement from "../../shared/models/announcement.model";

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

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
  return (
    <>
      <ListItem>{announcement.text}</ListItem>
      <Text>{user.name && user.name.fullName}</Text>
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
