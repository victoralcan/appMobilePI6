import styled from 'styled-components/native';
import colors from '../../styles/colors';


export const ListItem = styled.Text`
        
    padding: 8px 0 24px;

    margin: 10px 6px 5px 6px;
    flex-direction: column; 
    text-align: justify;

    align-items: center;
    border: solid 1px;
    border-radius: 10px;
    border-color: ${colors.primary};
    background-color: ${colors.white};
    height: 66px; 

    justify-content: space-between !important;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
`;