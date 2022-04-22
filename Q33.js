concatando = () =>{
    vetorInteiro =  [0,1,2,3];
    vetorString = ["um","dois","tres","quatro"];
    vetorDouble = [0.1,0.2,0.3,0.4];

    vetoresultado = vetorInteiro.concat(vetorString);
    console.log(vetorInteiro.concat(vetorString));
    console.log(vetorString.concat(vetorInteiro));
    console.log(vetorInteiro.concat(vetorDouble));
    console.log(vetorString.concat(vetorDouble));
    console.log(vetorDouble.concat(vetorString));
    console.log(vetorDouble.concat(vetorInteiro));

    console.log("              ");
    console.log(vetorDouble.concat(vetorInteiro.concat(vetorString)));
    console.log(vetorInteiro.concat(vetorString.concat(vetorDouble)));
    console.log(vetorString.concat(vetorDouble.concat(vetorInteiro)));
    console.log("acabo \n");

    
    
    
    console.log(vetorString.concat(vetorDouble,vetorInteiro));
    

} 