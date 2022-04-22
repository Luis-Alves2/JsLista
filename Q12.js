calcfat = (n) => {
    if(n == 0) 
        return 1;

    return n* calcfat((n-1));

}