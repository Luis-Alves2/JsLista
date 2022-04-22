recerberMelhorEstudante = (obj) =>{
    valormed = 0;
    maiovalo = 0;
    for (var [key, value] of Object.entries(obj)) {
        valormed = value.reduce(function(acumulador, valorAtual, indice, array){
          return acumulador + valorAtual;
        });
        valormed = valormed/value.length;
        if(valormed > maiovalo){
            maiovalo = valormed;
            ret = {};
            ret["nome"] = key;
            ret["media"] = valormed;
        }
    }
    return ret;
}