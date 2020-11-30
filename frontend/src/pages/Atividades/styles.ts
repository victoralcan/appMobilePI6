import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const ActivitiesContainer = styled.View`   
    padding: 8px 0;

    margin: 10px 6px 6px 6px;

    border: solid 1px;
    border-radius: 10px;
    border-color: ${colors.primary};

    background-color: ${colors.white};
`;

export const ActivitiesTitle = styled.Text`
    font-weight: bold;
    font-size: 16px;

    margin-left: 4px;
    margin-right: 4px;
`;

export const ActivitiesDescription = styled.Text`
    margin-top: 6px;
    margin-left: 4px;
    margin-right: 4px;
`;

export const ActivitiesMaxPoints = styled.Text`
    font-weight: bold;
    margin-top: 4px
`;


export const ActivitiesDateContainer = styled.View`
    flex-direction: row;
    align-items: center;
    color: ${colors.white};

    margin-left: 4px
`

export const AcitivitiesDueContainer = styled.View`
    flex-direction: row;
    align-items: center;
    color: ${colors.white};

    margin-top:4px;
    margin-left: 4px
`;

export const ActivitiesCreationTime = styled.Text`
    color: ${colors.tag};
    font-size: 12px;
    margin-right: 4px
`;

export const ActivitiesUpdatedTime = styled.Text`
    color: ${colors.tag};
    font-size: 12px;
    margin-right: 4px;
`;

export const ActivitiesDueTime = styled.Text`
    color: ${colors.black};
    font-weight: bold;

    margin-left:4px
`;

export const ActivitiesDueDate = styled.Text`
    color: ${colors.black};
    font-weight: bold;
`;
