buscarPalavrasSemelhantes = (vetordepalavra,str) =>{
    vetorzinho = [];

    for(i = 0;i< vetordepalavra.length;i++){

        if(vetordepalavra[i].includes(str)){
            vetorzinho.push(vetordepalavra[i]);
        }
    }
    return vetorzinho;
}