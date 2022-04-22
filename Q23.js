valoranuid = (nota1,nota2,nota3,cod) => {
    
    notarray = [nota1,nota2,nota3];
    ponderado = 0;
    
    max = notarray.reduce(function(a, b) {
        return Math.max(a, b);
    });
    notarray.splice(notarray.indexOf(max), 1);
    
    ponderado = ponderado + (4* max)
    
    min = notarray.reduce(function(a, b) {
        return Math.min(a, b);
    });
    notarray.splice(notarray.indexOf(min), 1);
    ponderado = ponderado + (3 * min);

    ponderado = ponderado + (3 * notarray[0]);
    
    
    console.log("codigo : " + cod);

    console.log("primeira nota: " + nota1 + "segunda nota : " + nota2 + "terceira nota : " + nota3);
    
    console.log("media calculada : " + ponderado/10);
    
    ponderado = ponderado/10;
    if(ponderado >= 5)
        console.log("APROVADO");
    else
        console.log("REPROVADO");

    return ponderado;
}