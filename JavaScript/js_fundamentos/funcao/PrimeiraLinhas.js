// criar de forma literal

function funcao001(v,b) {return v - b }

// Armazenando em uma variavel 

const funcao002 = function (v,b) {return v ** b}

// armazenando em um array

const a = [function (v, b) { return v + b },funcao001,funcao002]

console.log(a[0](10,10)) // somar
console.log(a[1](100,1)) // subtraçao
console.log(a[2](10,10)) // expoente 

// armazenando no atributo de objetor

const obj = {}

obj.falar = function() {return "Ola Mundo!"}

console.log(obj.falar())

// passar funçao como parametro

function fun1 (funcao001) {
    funcao001()
}

// uma funçao pode retorna /conter um funçao

function somar (a,b) {
    return function(c) {
        console.log(a + b + c)
    }
}

somar(3,3)(4)

