import { Platform } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../styles/colors'
import Constants from 'expo-constants'

const statusBarHeight =
    Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
    background-color: ${colors.black};
    flex: 0;
    padding-top: ${statusBarHeight + 'px'};
`;

export const Container = styled.View`
    background-color: ${colors.gray};
    padding-left: 14px;
    ;

`;

export const Main = styled.View`
    background-color: ${colors.back};
`;