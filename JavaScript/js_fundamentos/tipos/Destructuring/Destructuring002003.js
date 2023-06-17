const rand = ({ min = 0, max = 1000 }) => {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max:10, min:20}

console.log(rand({max:9,min:0}))

console.log(rand(obj))

console.log(rand({max:100}))