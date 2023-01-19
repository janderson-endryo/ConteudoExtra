let ativo = false

console.log(ativo)

ativo = true

console.log(ativo)

console.log(!!ativo) // como usamos o negativo duas vezes o true ficou true 

ativo = false

console.log(!!ativo)  // como usamos o negativo duas vezes o false ficou false

// tipo de verdadeiro ou falso sem se true o false 

console.log(`os verdadeiro = true quando usa o !! `)

console.log(`!!3 = ${!!3}`)

console.log(`!!-1 = ${!!-1}`)

console.log(`!!"  " = ${!!"  "}`)

console.log(`!!  = ${!!"texto"}`)

console.log(`!![] = ${!![]}`)

console.log(`!!{} = ${!!{}}`)

console.log(`!!Infinity = ${!!Infinity}`)
    
console.log(`!!(ativo = Infinity) = ${!!(ativo = Infinity)}`) // ele vai analiza o Infinity ou outra coisa que esteja depois do sinal de =


console.log(`os falsos = false quando usa o !! `)

console.log(`!!0 = ${!!0}`)

console.log(`!!"" = ${!!""}`)

console.log(`!!null = ${!!null}`)

console.log(`!!nan = ${!!NaN}`)

console.log(`!!undefined = ${!!undefined}`)

console.log(`!!(ativo = 0) = ${!!(ativo = 0)}`)

console.log(`teste`)

console.log(!!('' || null || 0 || " "))

let nome = ""

console.log(nome || "desconhecido")













