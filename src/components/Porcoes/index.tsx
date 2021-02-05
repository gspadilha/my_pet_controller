import React from 'react';
import {Text} from 'react-native';
import {PorcoesContainer, Porcao, Consumido} from './styles';

interface Informacao {
  normal: number;
  renal: number;
  hora: string;
  dia: Date;
}

interface TextProps {
  informacoes: Array<Informacao>;
  onChangeText: Function;
}

const Porcoes: React.FC<TextProps> = ({informacoes, onChangeText}) => (
  <PorcoesContainer>
    {informacoes.map((porcao, index) => (
      <Porcao key={index}>
        <Text>Normal</Text>
        <Text>{porcao.normal}</Text>
        <Text>Renal</Text>
        <Text>{porcao.renal}</Text>
        <Text>Consumido</Text>
        <Consumido
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={(e) => onChangeText(e, porcao.dia, porcao.hora)}
        />
      </Porcao>
    ))}
  </PorcoesContainer>
);

export default Porcoes;
