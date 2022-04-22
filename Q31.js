contanega = (veto) =>{
    negativos = 0;
    for(i of veto){
        if(i < 0)
            negativos++;
    }
    console.log("negativos: " + negativos);
} 