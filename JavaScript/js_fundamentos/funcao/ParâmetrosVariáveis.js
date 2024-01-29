function somar() {
    let somar = 0
    let temnumero = false
    let temstring = false
    // for (i in arguments)
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "number") {
            somar += arguments[i]
            temnumero = true
        } else if (typeof arguments[i] === "string") {
            somar += arguments[i]
            temstring = true
        }

    }

    if (temnumero && temstring) {

        return "erro"
    }

    return somar
}

console.log(somar(10,2,3,6,7,8,4,4,34.44,342.983,1.2423432,4.3423432))

// com o arguments a funçao conseguer recebe vario parametros
