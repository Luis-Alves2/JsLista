escreveTudo = (carac) => {
    switch(carac) {
        case 0:
            console.log("zero");
            return "zero";
        break;
        case  1:
            console.log("um");
            return "um";
        break;
        case  2:
            console.log("dois");
            return "dois";
        break;
        case  3:
            console.log("tres");
            return "tres";
        break;
        case  4:
            console.log("quatro");
            return "quatro";
        break;
        case  5:
            console.log("cinco");
            return "cinco";
        break;
        case  6:
            console.log("seis");
            return "seis";
        break;
        case  7:
            console.log("sete");
            return "sete";
        break;
        case  8:
            console.log("oito");
            return "oito";
        break;
        case  9:
            console.log("nove");
            return "nove";
        break;
        case  10:
            console.log("dez");
            return "dez";
        break;
        
        default:
           console.log("Número fora do intervalo.");
           return carac;
    }

}