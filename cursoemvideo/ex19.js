function parimpar(n) {
    if(n%2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
    }
    // let res = parimpar(15)
    // console.log(res)

    console.log(parimpar(6))
           
    // OUTRO TESTE

function soma(n1, n2) {
    return n1 + n2
}

    console.log(soma(7, 3))

    // OUTRO TESTE

let v = function(x) {
    return x*2
}

console.log(v(5))

    // OUTRO TESTE

function fatorial(n) {
    let fat = 1
    for(c = n;c > 1;c-- ){
    fat *= c
    }
    return fat
}
    console.log(fatorial(5))

    //OUTRO TESTE

function fatorial(n){
    if(n == 1) {
        return 1
    }else  {
        return n * fatorial(n-1)
    }
}
    console.log(fatorial(8))