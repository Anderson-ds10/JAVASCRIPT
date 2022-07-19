/*
let num = [12,9,5,33]
num.push(25)
num.sort()
console.log(`Nosso vetor é o ${num}`)
for (let pos=0;pos<num.length; pos++){
    console.log(num[pos])
}

let valores = [10,33,5,7,2,25]

for (let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
let valores = [2,8,9,15,22,33,45]
/*for (let pos in valores){
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)*/
    let pos = valores.indexOf(22)
    if( pos == -1) {
        console.log('O valor não foi encontrdo')
    } else {
        console.log(`O valor da posição é ${pos}`)
    }
