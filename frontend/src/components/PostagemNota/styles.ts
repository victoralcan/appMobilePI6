import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const NotaContainer = styled.View`   
    padding: 8px 0;

    margin: 10px 6px 6px 6px;

    border: solid 1px;
    border-radius: 10px;
    border-color: ${colors.primary};

    background-color: ${colors.white};
`;

export const NotaTitle = styled.Text`
    font-weight: bold;
    font-size: 16px;

    margin-left: 4px;
    margin-right: 4px
`;

export const NotaPoints = styled.Text`
    color: ${colors.black};
    margin-top: 6px;
    margin-left: 4px
`;

export const NotaDateContainer = styled.View`
    flex-direction: row;
    align-items: center;
    color: ${colors.white};

    margin-left: 4px
`;

export const NotaCreationTime = styled.Text`
    color: ${colors.tag};
    font-size: 12px;
    margin-right: 4px;
`;

export const NotaUpdatedTime = styled.Text`
    color: ${colors.tag};
    font-size: 12px;
    margin-left: 4px
`;
