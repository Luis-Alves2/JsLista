numerofiltro = (vetorzao) =>{
    return vetorzao.filter((numero) => {
        if((typeof numero ) == 'number'){
            return numero;
        }
    })
}