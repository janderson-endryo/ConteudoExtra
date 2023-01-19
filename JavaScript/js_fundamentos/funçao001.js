// armazenando uma funçao em uma variavel 

const imprimir = function (a, b) {
    console.log ( a + b)
}

imprimir(10, 20)

// armazenando uma funçao arrow em uma variavel 

const soma = (a, b) => {
    console.log(a + b)
}

soma(5, 10)

// retorno implicito

const menor = (a, b) => console.log(a - b)

menor(110, 10)

// teste
const teste = a => a

console.log(teste(999))