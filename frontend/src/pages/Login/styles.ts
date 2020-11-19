import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center
`;

export const AppTittle = styled.Text`
    font-weight: bold;
    margin-bottom: 20px;
    font-family: roboto_700;
    font-size: 30px;
`;

export const LoginButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    border: solid 2px;
    border-radius: 10px;
    background-color: ${colors.white};
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    margin-left: 6px;
    margin-right: 4px;
    color: ${colors.black};
`;