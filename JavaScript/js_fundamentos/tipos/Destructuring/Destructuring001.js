const pessoa = {
    nome: "ana",
    idade: 20,
    endereço: {
        logradouro: "rua x",
        numero: 1239
    }
}

const {nome, idade} = pessoa

console.log(nome,idade)

const {n = nome, i = idade} = pessoa

console.log(n, i)

const{nome: no,idade:ida} = pessoa

console.log(no,ida)

const {endereço: {logradouro:ll,numero:nn}} = pessoa

 // const {endereço: {logradouro,numero}} = pessoa

console.log(nn, ll)