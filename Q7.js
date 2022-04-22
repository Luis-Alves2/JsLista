calculardelta = (a,b,c) => {
    return ((b**2) - (4*a*c))
}

calcularbaskara = (a,b,c) =>{
    if(calculardelta(a,b,c) < 0)
        return "Delta é negativo" ;
    else{
        const deltinha = calculardelta(a,b,c);
        let resp = [];
        resp.push( ((-b) - deltinha) / (2*a));
        resp.push( ((-b) + deltinha) / (2*a));
        return resp;
    }
    
}