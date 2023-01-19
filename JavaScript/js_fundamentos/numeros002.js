let aval001 = 9.235234;

let aval002 = 6.523542;

[aval001, aval002] = [aval002, aval001]


console.log(typeof (aval001))
console.log(typeof (aval002)) //tipo da variavel EX: string Number e etc

let peso01 = Number("1.0")

let peso02 = 2.0

let total = aval001 * peso01 + aval002 * peso02

let media = total / (peso01 + peso02)

console.log(media.toFixed(2))

console.log(media.toString(2)) // valor binario se coloca 2