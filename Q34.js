compastr = (stringi, stringo) =>{
    alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","n","p","q","r","s","t","u","v","w","y","x","z"];


    stringi = stringi.toLowerCase();
    for( i  of stringi){
        if(alfabeto.includes(i)){
            alfabeto.splice(alfabeto.indexOf(i), 1);
        }
    }

    alfabeto2 = ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","n","p","q","r","s","t","u","v","w","y","x","z"];

    stringo = stringo.toLowerCase(); 
    for( i  of stringo){
        if(alfabeto2.includes(i)){
            alfabeto2.splice(alfabeto2.indexOf(i), 1);
        }
    }
    console.log(alfabeto2);
    console.log(alfabeto);

    console.log("\n");
    
    for(i= 0 ;i< alfabeto.length;i++){
        if(alfabeto[i] != alfabeto2[i])
            return false
    }

    console.log("\n");

    for(i=0;i< alfabeto2.length;i++){
        if(alfabeto2[i] != alfabeto[i])
            return false
    }

    return true;
} 