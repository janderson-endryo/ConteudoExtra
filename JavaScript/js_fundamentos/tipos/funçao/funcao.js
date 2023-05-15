// funçao sem retorno

function imprimirsoma(a,b) {
    console.log(a + b)
}

imprimirsoma(7.2,1.4)

// funçao com retorno

function soma(a,b = 1) {
    return a + b
}

console.log(soma(9,11))