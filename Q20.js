notasqnt = (numero) => {
    qntdecem = 0;
    if(numero >= 100){
        qntdecem = Math.floor(numero/100);
        numero = numero - (qntdecem * 100);
    }
    qntdecin = 0;
    if(numero >= 50){
        qntdecin = Math.floor(numero/50);
        numero = numero - (qntdecin *50);
    }
    qntdedez = 0;
    if(numero >= 10){
        qntdecin = Math.floor(numero/10);
        numero = numero - (qntdedez *10);
    }
    qntdecinc = 0;
    if(numero >= 5){
        qntdecinc = Math.floor(numero/5);
        numero = numero - (qntdecinc *5);
    }

    console.log("numero antes de checar 1 : " + numero)
    qntdeum = 0;
    if(numero >= 1){
        qntdeum = Math.floor(numero/1);
        numero = numero - (qntdeum * 1);
    }
    
    if(qntdecem != 0 )
        console.log( qntdecem + " nota(s) de R$ 100.");

    if(qntdecin != 0 )
        console.log( qntdecin + " nota(s) de R$ 50.");

    if(qntdedez != 0 )
        console.log( qntdedez + " nota(s) de R$ 10.");

    if(qntdecinc != 0 )
        console.log( qntdecinc + " nota(s) de R$ 5.");

    if(qntdeum != 0 )
        console.log( qntdeum + " nota(s) de R$ 1.");
}