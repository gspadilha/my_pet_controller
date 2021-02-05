import {TextInput, View} from 'react-native';
import styled from 'styled-components/native';

export const PorcoesContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Porcao = styled(View)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Consumido = styled(TextInput)`
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  text-align: center;
`;
