import React, {useEffect, useState} from 'react';
import {StatusBar, SafeAreaView, FlatList} from 'react-native';
import CabecalhoData from './src/components/CabecalhoData';
import CabecalhoHora from './src/components/CabecalhoHora';
import CelulaAlimentar from './src/components/CelulaAlimentar';

import allDayFromAnYear from './src/utils/allDayFromAnYear';
import calcularInformacoesTela from './src/utils/calcularInformacoesTela';

import {Container} from './styles';

const arrayDays = allDayFromAnYear();

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

const App: React.FC = () => {
  const [info, setInfo] = useState<Array<ITEste>>([]);

  useEffect(() => {
    let a: Array<ITEste> = [];

    arrayDays.forEach((item) => {
      let tempe = calcularInformacoesTela(item.dia.toISOString().split('T')[0]);
      a.push(tempe);
    });

    setInfo(a);
  }, []);

  const alterado = (dia: Date, hora: string, e: string) => {
    let dataAlterada = info.findIndex((item) => item.dia === dia);
    let horaAlterada = info[dataAlterada].horarios.findIndex(
      (item) => item.hora === hora,
    );

    info[dataAlterada].horarios[horaAlterada].consumido = +e;
    let novoRegistro = Object.assign({}, info[dataAlterada]);

    setInfo([...info, novoRegistro]);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
        <FlatList
          data={info}
          keyExtractor={(item) => item.dia.toISOString()}
          renderItem={({item}) => {
            const {dia, horarios} = item;
            const diaParsed = dia.toISOString();

            return (
              <Container key={diaParsed}>
                <CabecalhoData dataParaMostrar={diaParsed} />
                <CabecalhoHora horaParaMostrar={horarios} />
                <CelulaAlimentar
                  informacoes={horarios}
                  onChangeText={(hora: string, value: string) =>
                    alterado(dia, hora, value)
                  }
                />
              </Container>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};
/**<Celula informacoes={item} onChangeText={() => {}} /> */
export default App;
