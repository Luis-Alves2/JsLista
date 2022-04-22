contadordemediadentrodevetor = (vetorzao) =>{
    acumulador = 0;
    vetorzao.forEach(logArrayElements = (element, index, array) =>{
        acumulador += element;
}
);
    acumulador = (acumulador / vetorzao.length);
    return acumulador;
}