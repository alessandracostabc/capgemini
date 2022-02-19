function escada(n){
    let linha = ''
    let controle = n

    for(let i = 0; i < n; i++){
        linha = ''
        controle--
        for(let j = 0; j < n; j++){
            if(j >= controle){
                linha += "*"
            } else {
                linha += ' '
            }
        }
        console.log(linha)
    }
}
escada(6)