multer1 = (vetorzao,numer) =>{

    for(i = 0; i< vetorzao.length;i++){
        vetorzao[i] = vetorzao[i] * numer;
    }
    return vetorzao;
} 

multer2 = (vetorzao,numer) =>{

    for(i = 0; i< vetorzao.length;i++){
        if(numer > 5)
            vetorzao[i] = vetorzao[i] * numer;
    }
    return vetorzao;
}