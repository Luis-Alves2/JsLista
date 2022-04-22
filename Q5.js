divibao = (x) => {
    const valo = x.toFixed(2);
    const resp = valo.toString();
    const beibe = resp.replace(".",",");
    const fim = "R$" + beibe;
    return fim;
}