pAr = (n,a1,r) =>{
    
ac = 0;
ap = 0;
    for(i = 0; i < n; i++){
        if(i ==0 )
            ap = a1 + r; 
        else
            ap = ap + r;
        console.log("numero atual: " + ap);

        ac = ac + ap;
    }

    console.log("soma da pa: "  + ac);
} 

pGr = (n,a1,r) => {
    ac = 0;
    ap = 0;

    for(i = 0; i< n; i++){
        if(i ==0 )
            ap = a1 * r;
        else
            ap = ap * r;
        console.log("termo atual: " + ap);
        ac = ac+ ap;
    }
    

    console.log("soma de pg: " + ac);
}