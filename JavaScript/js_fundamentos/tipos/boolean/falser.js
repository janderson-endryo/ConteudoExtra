console.log(!! 0) 
console.log(!! "") // sem espaço ou qualquer outra coisa
console.log(!! null)  
console.log(!! NaN)
console.log(!! undefined) 

let nota = 10
console.log(!! (nota = 0)) // ele verifca qual e o valor 

console.log(!! ("" || false || null) )

