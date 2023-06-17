const [x] = [10,11,12] // o x recebe o primeiro elemento 

console.log(x)

const [n2,,n4,n6,n8 = 0] = [12,14,10]

console.log(n2,n4,n6,n8)

const [,[,nota]] = [[-1,,1],[2,3,4]]

console.log(nota)