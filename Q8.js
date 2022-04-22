jorge = (str) =>{
    let arr = str.split(" ");
    console.log( arr);
    let mini = arr.reduce(function(a, b) {
      return Math.min(a, b);
    });
    let maio = arr[0];
    let id = 0;
    let contad = 0;
    const minimom = mini;
    for (let i =0; i < arr.length;i++){
        if(i != 0){
            const pfiroc = Math.max(arr[i], maio);
            if(arr[i] == pfiroc && maio != pfiroc){
                maio = arr[i];
                contad++;
            }
        }
        if(arr[i] == minimom){
            id = i+1;
        }
    }
    let resp = [];
    resp.push(contad);
    resp.push(id);
    return resp;
}