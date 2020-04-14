
const lista1 = ['José', 'Pedro', 'Ana', 'Antônio'];
const lista2 = [...lista1]
//  Spread Operator "...lista1" copia os dados da lista 1 
// e cria um novo array

// o método .pop() remove o ultimo elemtno do array 
// e retorna esse elemento
    


const removido = lista2.pop()
console.log(lista1)
console.log(lista2)
console.log(`Elemento removido no final =>: ${removido}`)
console.log()




// O método .shift() remove o primeiro elemento do array 
// e com isso mexe nos indeces do elemnto, 
// quem era indice 4, passa a ser indice 3.
const removido2 = lista2.shift()
console.log(" elemento removido no inicio método shift", lista2)
console.log()



//adicionando novos elmento no final do array
 lista2.push('wallace')
console.log(" nova pessoa adicionada no final", lista2)
console.log()


//adicionando novos elmento no inicio do array
//  CUIDADO POR QUE DESLOCA OS INDICES DOS OUTROS ELEMENTOS
lista2.unshift('Severino')
console.log(" nova pessoa adicionada no inicio", lista2)
console.log()