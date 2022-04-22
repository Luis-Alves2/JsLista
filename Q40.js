conceito = (notas) => {
    for(i of notas){
        if(i < 4.9)
            console.log("D");
        else if(i < 6.9)
            console.log("C");
        else if(i < 8.9)
            console.log("B");
        else
            console.log("A");
    }
}