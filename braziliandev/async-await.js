const cincoMil = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("promise cincoMil resolvida"), 5000);
});

const mil = () =>  new Promise((resolve, reject) => {
    setTimeout(() => reject("promise Mil resolvida"), 1000);
});

const resolvedorDePromisesAssincronas = async () => {
    const resultado1 = await cincoMil().then((res) => {
        console.log(res)
        return res
    }).catch((err) => {
        console.log(err)
    })
    console.log('condigo aqui 1')

    const resultado2 = await mil().then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    }) 
    console.log('Outro codigo 2')
    console.log(`Mensagens: /n ${resultado1} /n ${resultado2}`)
}



resolvedorDePromisesAssincronas();
