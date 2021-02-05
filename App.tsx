import React, {useEffect, useState} from 'react';
import {StatusBar, SafeAreaView, FlatList, Text, TextInput} from 'react-native';

import Celula from './src/components/Celula';
import {IComidaControlada} from './src/interfaces/IComidaControlada';

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
      a.push(tempe[0]);
    });
    setInfo(a);
  }, []);

  const alterado = (e: string, dia: Date, hora: string) => {
    const registro = info
      .filter((i) => i.dia === dia)
      .map((a) => {
        return {
          dia: a.dia,
          horarios: a.horarios.map((b) => {
            if (b.hora === hora) {
              return {...b, consumido: e};
            }

            return {...b};
          }),
        };
      });

    let b = Object.assign({}, {...info, ...registro[0]});
    console.log('info :>> ', JSON.stringify(info));
    console.log('b :>> ', JSON.stringify(b));
    setInfo(b);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
        <FlatList
          data={info}
          renderItem={({item}) => {
            return (
              <Container>
                <Text>{item.dia.toISOString()}</Text>
                {item.horarios.map((it) => (
                  <>
                    <Text>{it.hora}</Text>
                    <Text>{it.normal}</Text>
                    <Text>{it.renal}</Text>
                    <TextInput
                      onChangeText={(e) => alterado(e, item.dia, it.hora)}
                    />
                  </>
                ))}
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
