let num = document.getElementById('txtn')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function isList(n, l){
 if (l.indexOf(Number(n)) != -1) {
    return true
 } else {
    return false
 }
}

function adicionar() {
    if(isNumero(num.value) && !isList(num.value, valores)) {
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `Valor ${num.value} adicionando`
       lista.appendChild(item)
    }else {
        window.alert('Valor inválido ou já está na lista.')
    }
}