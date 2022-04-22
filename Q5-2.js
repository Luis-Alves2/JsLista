maiorouigual = (qqlcoisa) => {
	const tipo = typeof qqlcoisa;
    if(tipo === "boolean") return !qqlcoisa;
    if(!(isNaN(qqlcoisa))){
        return -1 * qqlcoisa;
    }

    texto = typeof qqlcoisa;
    texto2 = "booleano ou numero esperados, mas o parametro é do tipo " + texto;
    
    return texto2;
}