import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const CourseConteiner = styled.TouchableOpacity`
    padding: 8px 0 24px;

    margin: 10px 6px 5px 6px;
    flex-direction: column; 
    text-align: justify;

    align-items: center;
    border: solid 1px;
    border-radius: 10px;
    background-color: ${colors.primary};
    height: 66px;
`;

export const CourseName = styled.Text`
    color: ${colors.white};
    font-weight: bold;
    justify-content: space-between !important;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
    
`;

export const CourseSection = styled.Text`
    margin-top: 2px;
    padding-left: 3px;
    padding-right: 3px;
`;

// export const List = styled

