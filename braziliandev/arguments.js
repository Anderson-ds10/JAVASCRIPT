/*function somaNumerosInfinitamenteV1() {
    const args = Array.from(arguments)
    let soma = 0;

    for(let i = 0; i < args.length; i++){
        soma += args[i]
    }
    return soma;
}

console.log( somaNumerosInfinitamenteV1(1,2,3,4,5))*/


function somaNumerosInfinitamenteV2() {
    const args = Array.from(arguments)
    return args.reduce((acumulador, valorAtual) => acumulador += valorAtual)
}

console.log( somaNumerosInfinitamenteV2(1,2,3,4,5))