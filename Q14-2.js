odeioparpar = (vetorino) =>{
    vetoresposta = [];
    for(i = 0; i < vetorino.length;i++ ){
        if(i % 2 == 0){
            if(vetorino[i] %2 == 0){
                vetoresposta.push(vetorino[i]);
            }
        }
    }
    return vetoresposta;
}