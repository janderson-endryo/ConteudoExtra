{
    var n1 = 10
}

console.log(n1) // visivel mesmo que a variavel n1 esteja em um outro escopo

const teste = ()  => { let local = 123; var local2 = 122}

console.log(local2)
console.log(teste(local2)) // erro pois a variavel foi iniciada apenas na funcaçao.
