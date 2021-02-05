import {Text, View} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Label = styled(Text)`
  font-weight: bold;
  border-bottom-width: 1px;
  border-bottom-color: black;
`;
