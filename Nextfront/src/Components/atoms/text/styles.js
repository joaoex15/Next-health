import styled from "styled-components/native";

export const Textotitulo =styled.Text`

    font-size:${({fonte}) =>fonte || '20px' };
    font-weight:bold;
    color: ${({color}) =>color || '#84C7F1' };
    margin-top : 12px;
     
    `;