const escola = ("cod3r")

console.log(escola.charAt(6)) // como nao tem nada nesse campo ele retorna vazio 

console.log(escola.charAt(3))

console.log(escola.charCodeAt(1)) // unicode

console.log(escola.indexOf("o")) // posiçao da letra o indice 

console.log(escola.substring(1)) 

console.log(escola.substring(1,3)) 

console.log('escola ' .concat(escola).concat("!")) // .concat  converte seus argumentos diretamente em strings e concatena

console.log(escola.replace(3, "e")) // .replace (troca essa letra ou numero  , "vai entra essa letra ou numero")

console.log("janderson,endryo,oliveira".split(',')) // criar array 

const up = texto => texto.toUpperCase()

console.log(`ei.....${up('cuidado')}`)





