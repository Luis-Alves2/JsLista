filtrarPorQuantidadeDeDigitos = (vetorzao,digitos) =>{
    vetorepo = [];
    divisionvalue = Math.pow(10,digitos-1);
    for(i = 0; i< vetorzao.length; i++){
        valoratual = vetorzao[i]/divisionvalue;
        if(10 >= valoratual && valoratual >= 1){
            vetorepo.push(vetorzao[i]);
        }
    }
    return vetorepo;
}