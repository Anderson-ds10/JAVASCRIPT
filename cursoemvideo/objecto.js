let amigo = {nome: 'Anderson',
idade: '24 anos',
peso: 100,
engordar(p=0){
    console.log('Engordou.')
    this.peso += p
}}

amigo.engordar(5)
console.log(`${amigo.nome} tem ${amigo.idade} e pesa ${amigo.peso} Kg`)