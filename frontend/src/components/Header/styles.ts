import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  padding-top: 14px;
  padding-right: 14px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #38A8B8;
  border-radius: 3px;
  color: ${colors.white}
`;

export const Avatar = styled.TouchableOpacity`
  background: ${colors.tag};
  width: 32px;
  height: 32px;
  border-radius: 16px;
  padding-botton: 14px;
`;

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
  color: ${colors.white}
`;

export const Button = styled.TouchableOpacity`
  margin-left: 20px;
  color: ${colors.white}
`;

export const AppName = styled.Text`
    font-weight: bold;]
    color: ${colors.white}
`