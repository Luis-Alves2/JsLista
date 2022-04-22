aumentouGeral = (carac, sal) => {
    switch(carac) {
        case "A":
            return sal * 1.1;
        break;
        case  "B":
            return sal * 1.15;
        break;
        case  "C":
            return sal * 1.2;
        break;
        
        default:
           console.log("Plano inválido");
            return sal;
    }

}