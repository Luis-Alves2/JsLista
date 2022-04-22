menuzin = (carac, quant) => {
    switch(carac) {
        case 100:
            return quant * 3.0;
        break;
        case  200:
            return quant * 4.0;
        break;
        case  300:
            return quant * 5.5;
        break;
        case  400:
            return quant * 7.5;
        break;
        case  500:
            return quant * 3.5;
        break;
        case  600:
            return quant * 2.8;
        break;
        
        default:
           console.log("produto inexistente.");
           return 0.0;
    }

}