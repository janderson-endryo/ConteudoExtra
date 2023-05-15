// armazenando uma funcao na variavel 

const somar  = function (a, b) {
    console.log(a + b)
}

somar(10,7)

// armazenando uma funcao arrow na variavel
const calcular = (a, b) => {
    return a + b
} 

console.log(calcular(10,1))

//retorno implicito

const sub = (a, b) => a - b

console.log(sub(10,3))

const print = a => console.log(a)

print("janderson")