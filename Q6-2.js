maiorouigual = (qqlcoisa) => {
    if(qqlcoisa === true){
        return false;
    }
    if(qqlcoisa === false){
        return true;
    }
    if(!(isNaN(qqlcoisa))){
        return -1 * qqlcoisa;
    }

    texto = typeof qqlcoisa;
    texto2 = "booleano ou numero esperados, mas o parametro é do tipo " + texto;
    
    return texto2;
}