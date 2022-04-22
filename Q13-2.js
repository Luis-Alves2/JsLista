borapapai = (objetao)=>{
    vetorzao = [];
    vetorzinho = [];
    for (attr in objetao){
        vetorzinho.push(attr);
        vetorzinho.push(objetao[attr]);
        vetorzao.push(vetorzinho);
        vetorzinho = [];
    }
    return vetorzao;
}