const calcularPorcao = (
  porcaoTotalDiaria: number,
  quantidadeDePorcoes: number,
): Array<number> => {
  const cadaPorcao = Math.round(porcaoTotalDiaria / quantidadeDePorcoes);
  const porcaoFinal =
    porcaoTotalDiaria - cadaPorcao * (quantidadeDePorcoes - 2);

  let porcoes = [];
  for (let i = 1; i <= quantidadeDePorcoes - 2; i++) {
    porcoes.push(cadaPorcao);
  }

  porcoes.push(porcaoFinal);

  return porcoes;
};

export default calcularPorcao;
