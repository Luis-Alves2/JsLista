segundoMaior = (vetorzinho) =>{
    segmaio = 0;
    for(i = 0;i < vetorzinho.length; i++){
        if(i == 0){
            maior = vetorzinho[i];
        }
        if(i == 1){
            if(vetorzinho[i] <= maior){
                segmaio = vetorzinho[i];
            }else{
                segmaio = maior;
                maior = vetorzinho[i];
            }
        }else if(vetorzinho [i] > maior){
            segmaio = maior;
            maior = vetorzinho[i];
        }else if(vetorzinho[i] > segmaio){
            segmaio = vetorzinho[i];
        }
    }
    return segmaio;
}