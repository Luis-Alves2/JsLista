redutor = (vetorzao) =>{
    valorAtual = vetorzao.reduce(
  ( acumulador, valorAtual ) => acumulador + valorAtual,
  0
);
    return valorAtual;
}