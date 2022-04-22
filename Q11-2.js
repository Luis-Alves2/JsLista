tiracoisadedentro = (objeto, propri) =>{
	const objcopiado = {...objeto};
    delete objcopiado[propri];
    return objcopiado;
}