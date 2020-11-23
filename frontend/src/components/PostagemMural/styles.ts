import styled from 'styled-components/native';
import colors from '../../styles/colors';


// Conteirner da publicação
export const AnnouncementContainer = styled.View`
    flex: 1;
    
    padding: 8px 0 24px;

    margin: 10px 6px 6px 6px;

    border: solid 1px;
    border-radius: 10px;
    border-color: ${colors.primary};

    background-color: ${colors.white};
`;

// Usuário
export const AnnouncementUser = styled.Text`
    font-weight: bold;
    font-size: 16px;

    margin-left: 4px
`;

// Container das datas
export const AnnouncementDateContainer = styled.View`
    flex-direction: row;
    align-items: center;
    color: ${colors.white};

    margin-left: 4px
`

// Data de criação
export const AnnouncementCreationTime = styled.Text`
    color: ${colors.tag};
    font-size: 12px;
    margin-right: 4px;
`;

// Data da atualização
export const AnnouncementUpdatedTime = styled.Text`
    color: ${colors.tag};
    font-size: 12px;
    margin-left: 4px
`;

// Texto da publicação
export const AnnouncementText = styled.Text`
    margin-top: 6px;
    margin-left: 4px
`;

// Materiais anexados
export const AnnouncementMaterial = styled.TouchableOpacity`
    margin-top: 6px;
`;
