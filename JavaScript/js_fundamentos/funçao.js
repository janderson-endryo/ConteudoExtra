// funçao sem retorno 

function somar(a, b) {
    console.log(a + b)
}

somar (10, 87)

somar(10) // NaN pois ele esta somando 2 com undefiner

somar (10,10,3,4,6,9,11,12) // ele vai pega os dois primeiros e ignora o resto

// funçao com retorno

function calcular (a, b = 0) {
    return a + b
}

console.log(calcular(10,7))

console.log(calcular(11)) 