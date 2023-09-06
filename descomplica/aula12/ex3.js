function obterValor(valor){
    return new Promise((resolve, reject) =>{
        if(valor > 10){
            valor += 1
            resolve(valor)
        }else{
            reject("O valor é menor que 10")
        }
    })
}

function dobraValor(valor){
    return valor * 2
}

function adicionar10(valor){
    return valor + 10
}

obterValor(28)
.then((valor) =>{
    console.log("Valor obtido", valor)
    return dobraValor(valor);
})
.then((novoValor) =>{
    console.log("Fazendo o segundo tratamento")
    return adicionar10(novoValor)
})
.then((resultado) =>{
    total = resultado + 5
    console.log("O resultado final é",total)
})
.catch((erro) =>{
    console.log("Ocorreu um error: ", erro)

})