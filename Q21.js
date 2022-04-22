valorplano = (idade) => {
    if(idade < 10)
        adi = 80;
    else if(idade <= 30)
        adi = 50;
    else if(idade <= 60 )
        adi = 95;
    else if(idade > 60 )
        adi = 130;

    return 100 + adi;
}