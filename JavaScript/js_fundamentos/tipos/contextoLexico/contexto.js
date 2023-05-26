var saudacao = "Bom dia" // contexto lexico 1

const teste = () => {
    var saudacao = "Boa noite!" // contexto lexico 2
    return saudacao
}// se o nome da variavel fosse diferente o return ia busca no lexico 1

console.log(saudacao)
console.log(teste())