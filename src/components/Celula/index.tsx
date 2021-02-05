import React from 'react';
import {IComidaControlada} from '../../interfaces/IComidaControlada';
import CabecalhoData from '../CabecalhoData';
import CabecalhoHora from '../CabecalhoHora';
import Porcoes from '../CelulaAlimentar';
import {Container} from './styles';

interface ICelula {
  informacoes: IComidaControlada;
  onChangeText: Function;
}

const Celula: React.FC<ICelula> = ({informacoes, onChangeText}) => {
  console.log('informacoes :>> ', informacoes);
  let horas = informacoes.map((item) => item.hora);

  return (
    <Container>
      <CabecalhoData dia={informacoes[0].dia.toISOString()} />
      <CabecalhoHora horas={horas} />
      <Porcoes
        informacoes={informacoes}
        onChangeText={(e: string, dia: Date, hora: string) =>
          onChangeText(e, dia, hora)
        }
      />
    </Container>
  );
};

export default Celula;
