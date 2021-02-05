import calcularPorcao from './calcularPorcao';
import arquivoControle from '../database/controle.json';

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

const calcularInformacoesTela = (dia: string): ITEste => {
  const {anabella} = arquivoControle as INomeAnimal;
  const {porcao_diaria, horario_alimentacao, trocar_racoes} = anabella;

  let porcoes = calcularPorcao(porcao_diaria, horario_alimentacao.length + 1);

  let informacoesDeCadaPorcao = porcoes.map((porcao, index) => {
    let percentualRacaoNormal = DEFAULT_PORCENTAGEM_NORMAL / 100.0;
    let quantidadeNormal = Math.round(percentualRacaoNormal * porcao);

    // caso seja a mudança de ração
    for (let infoArquivo of trocar_racoes) {
      if (dia === infoArquivo.dia) {
        percentualRacaoNormal = infoArquivo.percentual / 100.0;
        quantidadeNormal = Math.round(percentualRacaoNormal * quantidadeNormal);
      }
    }

    return {
      hora: horario_alimentacao[index],
      normal: quantidadeNormal,
      renal: porcao - quantidadeNormal,
      consumido: 0,
    };
  });

  return {
    dia: new Date(dia),
    horarios: informacoesDeCadaPorcao,
  };
};

export default calcularInformacoesTela;
