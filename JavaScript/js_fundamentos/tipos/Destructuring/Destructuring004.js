const rand = ([min = 0, max = 1000]) => {

    if (min > max) [min,max] = [max,min]

    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

console.log(rand([1000,100]))

console.log(rand([900]))

console.log(rand([,10]))