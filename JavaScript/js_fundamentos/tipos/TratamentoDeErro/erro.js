
const tratarErro = erro => {
    throw new Error ("erro !!!!!")
    //throw 10
    //throw false
    //throw "erro"
}


const gritando = obj => {

    try {
        console.log(obj.nome.toUpperCase() + "!!!")
    } catch (a)  {
        tratarErro(a)
    } finally {
        console.log("final")
    }
    
}

const obj = { name: "janderson" }

gritando(obj)