contamed = (veto) =>{

    med = veto.reduce(function (sum, value) {
        return sum + value;
    }, 0) / veto.length;

    console.log("media: " + med);
} 