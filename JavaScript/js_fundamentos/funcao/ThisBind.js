const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const teste = pessoa.falar

teste() // undefined


const teste001 = pessoa.falar.bind(pessoa)

teste001()