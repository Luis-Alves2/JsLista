menornumero = (vetorzito) => {
    resposta = 0;
    for(i = 0; i < vetorzito.length ; i++){
        if(i == 0){
            resposta = vetorzito[i];
        }else{
            if(resposta > vetorzito[i]){
                resposta = vetorzito[i];
            }
        }
    }

    return resposta;

}