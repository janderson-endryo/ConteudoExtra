const valores = [7.8, 8.9, "janderson", 9.0, 10,7]

console.log(valores[0], valores[2])

console.log(valores[6])

valores[6] = 4

console.log(valores[6])

console.log(`termos ${valores.length} elementos`)

valores.push({id: 3},false,null,'teste') // adicionando mais elementos na ultima posiçao com o push

console.log(`agora termos ${valores.length} elementos`)

console.log(valores)

console.log(valores.pop()) // retira o ultimo elemento 

delete valores[1] // retira o elemento selecionado 

console.log(valores) 

console.log(typeof valores)