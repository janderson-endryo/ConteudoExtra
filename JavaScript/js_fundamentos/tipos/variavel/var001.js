var n1 = 1

console.log("fora antes = " + n1)

{
    var n1 = 99999
    console.log(`dentro = ${n1}`)
}

console.log("fora depois = " + n1)