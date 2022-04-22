contimpa = (inicio = 0, fim = 100) =>{
    tmp = 0;
    if(fim < inicio){
        tmp = inicio;
        inicio = fim;
        fim = tmp; 
    }

    for(i = inicio; i < fim;i++){
        if(i % 2 == 1)
            console.log(i);
    }
}