import React from 'react';
import {Container, Label} from './styles';

interface TextProps {
  horaParaMostrar: Array<IReteste>;
}
interface IReteste {
  hora: string;
  normal: number;
  renal: number;
  consumido: number;
}

const CabecalhoHora: React.FC<TextProps> = ({horaParaMostrar}) => {
  return (
    <Container>
      {horaParaMostrar.map((h: IReteste) => (
        <Label key={h.hora}>{h.hora}</Label>
      ))}
    </Container>
  );
};

export default CabecalhoHora;
