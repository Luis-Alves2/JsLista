comparaveto = (veto) =>{
    pares = 0;
    impares = 0;
    for(i  of veto){
        if(i %2 ==0)
            pares++;
        else
            impares++;
    }
    console.log("pares : " + pares);

    console.log("impares : " + impares);

} 