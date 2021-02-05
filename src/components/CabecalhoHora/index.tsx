import React from 'react';
import {Horas, Hora} from './styles';

interface TextProps {
  horas: Array<string>;
}

const CabecalhoHora: React.FC<TextProps> = ({horas}) => {
  return (
    <Horas>
      {horas.map((hora: string) => (
        <Hora key={hora}>{hora}</Hora>
      ))}
    </Horas>
  );
};

export default CabecalhoHora;
