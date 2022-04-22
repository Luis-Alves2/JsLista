trizao = (x,y,z) => {
    if(x === y && y === z)
        console.log("equilados");
    else if(x === y || y === z || x === z)
        console.log("isosceles");
    else
        console.log("escaleno");
}