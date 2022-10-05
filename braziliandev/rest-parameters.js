const multiplicaPeloPrimeiro = (multiplicador, ...args) => {
    return args.map((num) => multiplicador * num)
}


console.log( multiplicaPeloPrimeiro(2,2,3,4,5)) 