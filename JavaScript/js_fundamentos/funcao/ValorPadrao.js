function somar(a, b, c, d) {
    a = a || 1 // pode ocorre problemas 

    b = b != undefined ? b : 1

    c = 2 in arguments ? c : 1 // esse numero 2 logo depos do c que dizero indice/ na variavel c que recebe do indice 2 tem um arguments 

    d = isNaN(d) ? 1 : d

    return a + b + c + d
}

console.log(somar(1, 0, 10, 0))

// padrao 2015 

function somar001(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(somar001(0,0,0))