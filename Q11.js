isitBissexto = (numero) => {
        if(numero % 400 == 0){
            console.log("é bissexto");
            return true;
        }
        if(numero % 100 == 0){
            console.log("nao e bissexto");
            return false;
        }
        if(numero % 4 == 0 ){
            console.log("é bissexto");
            return true;
        }
    console.log("nao e bissexto");
    return false;
}