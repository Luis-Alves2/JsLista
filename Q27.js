comparacresce = (alt1,alt2,cres1,cres2) =>{
    if(alt1 < alt2 && cres1 > cres2){
        sub1 = (alt2 - alt1);
        sub2 = (cres1 - cres2);
        return sub1 / sub2;
    }
    if(alt2 < alt1 && cres2 > cres1){
        sub1 = (alt1 - alt2);
        sub2 = (cres2 - cres1);
        return sub1 / sub2;
    }

    return false;

} 