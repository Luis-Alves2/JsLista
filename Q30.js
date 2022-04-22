meuminmax = (veto) =>{
    max = veto.reduce(function(a, b) {
        return Math.max(a, b);
    });

    min = veto.reduce(function(a, b) {
        return Math.min(a, b);
    });

    console.log("max " + max);

    console.log("min " + min );
    
} 