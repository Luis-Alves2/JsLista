contimpa = (veto,vetr) =>{
    
    console.log("primeiro vetor: " + veto);
    console.log("segundo vetor: " + vetr);
    for(i = 0; i< veto.length; i++){
        veto[i] = veto[i] +vetr[i];
        vetr[i] = veto[i] - vetr[i];
        veto[i] = veto[i] - vetr[i]
    }
    console.log("primeiro vetor: " + veto);
    console.log("segundo vetor: " + vetr);
    
}