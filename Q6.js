superjuristasimples = (capinicial, juros, temp) => {
    console.log("simples: " + (capinicial + (capinicial * juros * temp)));
}

superjuristacomposto = (capinicial, juros, temp) => {
    console.log("composto: " + capinicial *((juros +1 ) ** temp));
}