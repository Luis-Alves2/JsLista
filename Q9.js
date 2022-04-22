aproxime = (nota) => {
    if(nota < 38 || nota %5 == 0)
        return nota

    if( ((nota + ( 5 - (nota%5))) - nota) < 3){
        return nota+(5 - (nota %5));

    }

    return nota;
}

calcnota = (nota) =>{
    if(aproxime(nota) < 40){
        return "reprovadx";
    }
    else{
        return "passadx";
    }
    
}