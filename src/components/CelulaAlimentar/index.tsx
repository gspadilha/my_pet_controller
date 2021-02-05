import React from 'react';
import {
  Container,
  Content,
  LabelTipo,
  LabelValor,
  InputConsumido,
} from './styles';

interface IReteste {
  hora: string;
  normal: number;
  renal: number;
  consumido: number;
}

interface TextProps {
  informacoes: Array<IReteste>;
  onChangeText: Function;
}

const CelulaAlimentar: React.FC<TextProps> = ({informacoes, onChangeText}) => (
  <Container>
    {informacoes.map((porcao, index) => {
      const {normal, renal, hora} = porcao;

      return (
        <Content key={index}>
          <LabelTipo>Normal</LabelTipo>
          <LabelValor>{normal}</LabelValor>
          <LabelTipo>Renal</LabelTipo>
          <LabelValor>{renal}</LabelValor>
          <LabelTipo>Consumido</LabelTipo>

          <InputConsumido
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={(value) => onChangeText(hora, value)}
          />
        </Content>
      );
    })}
  </Container>
);

export default CelulaAlimentar;
