comparaint = (veto) =>{
    dentro = 0;
    fora = 0;
    for(i  of veto){
        if(i>=10 && i<=20 )
            dentro++;
        else
            fora++;
    }
    console.log("dentro : " + dentro);

    console.log("fora : " + fora);

} 