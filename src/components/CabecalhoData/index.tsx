import React from 'react';
import {Data} from './styles';

interface TextProps {
  dia: string;
}

const CabecalhoData: React.FC<TextProps> = ({dia}) => {
  return <Data>{dia}</Data>;
};

export default CabecalhoData;
