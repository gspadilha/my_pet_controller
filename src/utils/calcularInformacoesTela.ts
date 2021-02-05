import calcularPorcao from './calcularPorcao';
import arquivoControle from '../database/controle.json';
import {IComidaControlada} from '../interfaces/IComidaControlada';

interface IInformacoesMudancaRacao {
  dia: string;
  percentual: number;
}

interface IInformacoesAnimal {
  porcao_diaria: number;
  horario_alimentacao: Array<string>;
  trocar_racoes: Array<IInformacoesMudancaRacao>;
}

interface INomeAnimal {
  anabella: IInformacoesAnimal;
}

interface IReteste {
  hora: string;
  normal: number;
  renal: number;
  consumido: number;
}

interface ITEste {
  dia: Date;
  horarios: Array<IReteste>;
}

const DEFAULT_PORCENTAGEM_NORMAL = 100;

const calcularInformacoesTela = (dia: string): Array<ITEste> => {
  const {anabella} = arquivoControle as INomeAnimal;
  const {porcao_diaria, horario_alimentacao, trocar_racoes} = anabella;

  let porcoes = calcularPorcao(porcao_diaria, horario_alimentacao.length + 1);

  let informacoes = porcoes.map((porcaoTotal) => {
    let quantidadeNormal = Math.round(
      (DEFAULT_PORCENTAGEM_NORMAL * porcaoTotal) / 100,
    );

    let percentualRacaoNormal = 100;
    for (let infoArquivo of trocar_racoes) {
      if (dia === infoArquivo.dia) {
        percentualRacaoNormal = infoArquivo.percentual;
      }
    }

    let porcaoNormal = Math.round(
      quantidadeNormal * (percentualRacaoNormal / 100),
    );

    return {
      dia,
      normal: porcaoNormal,
      renal: porcaoTotal - porcaoNormal,
    };
  });

  let temp = informacoes.map((info) => {
    /*let dado: IComidaControlada = Object.assign(
      {},
      {...info, dia: new Date(info.dia), hora: '', consumido: 0, key: ''},
    );

    dado.hora = horario_alimentacao[index];
    dado.key = `${info.dia}-${horario_alimentacao[index]}`;*/

    return {
      dia: new Date(info.dia),
      horarios: [
        {hora: horario_alimentacao[0], normal: 100, renal: 0, consumido: 0},
        {hora: horario_alimentacao[1], normal: 100, renal: 0, consumido: 0},
        {hora: horario_alimentacao[2], normal: 100, renal: 0, consumido: 0},
        {hora: horario_alimentacao[3], normal: 100, renal: 0, consumido: 0},
        {hora: horario_alimentacao[4], normal: 100, renal: 0, consumido: 0},
      ],
    };
  });

  let dados = temp;

  return dados;
};

export default calcularInformacoesTela;
