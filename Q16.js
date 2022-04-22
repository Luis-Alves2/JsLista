calcBasica = (a,b, cordinha) => {
    switch(cordinha) {
        case "+":
            console.log(a + b);
        break;
        case  "-":
            console.log(a - b);
        break;
        case  "*":
            console.log(a * b);
        break;
        case  "/":
            console.log(a / b);
        break;
        
        default:
           console.log("operacao invalida boy");
    }
}