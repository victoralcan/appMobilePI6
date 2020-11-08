import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  padding-top: 14px;
  padding-right: 14px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #c0c0c0;
  border-radius: 3px;
`;

export const Avatar = styled.TouchableOpacity`
  background: ${colors.tag};
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 20px;
`;

export const AppName = styled.Text`
    font-weight: bold;
`