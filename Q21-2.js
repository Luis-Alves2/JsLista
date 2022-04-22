funcaoDaSorte = (escolhido) =>{
    valorand = Math.random();
    valorand = valorand*10;
    valorand = valorand.toFixed();
    if(valorand == escolhido){
        return "Parabéns! O número sorteado foi o " + escolhido;
    }else{
        return "Que pena! O número sorteado foi o " + valorand;
    }
}