import React from 'react';
import {Container, Label} from './styles';

interface TextProps {
  dataParaMostrar: string;
}

const CabecalhoData: React.FC<TextProps> = ({dataParaMostrar}) => {
  const dataParsed = dataParaMostrar
    .split('T')[0]
    .split('-')
    .reverse()
    .join('/');

  return (
    <Container>
      <Label>{dataParsed}</Label>
    </Container>
  );
};

export default CabecalhoData;
