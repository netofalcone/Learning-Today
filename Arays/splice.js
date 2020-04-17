// Essa função faz pop, push, unshift shift...
//  essa função mexe no array original
// retorna um array
//  SUPORTA NEGATIVOS

// 1º augumento se coloca o indice que quer começar a mexer
// 2º argumento, quantos elementos quer remover
// 3º argumento recebe elementos que quer adicionar, separados por virgula


// INDEX NEGATIVOS -4     -3        -2        -1
 //                  0        1         2        3  
const frutas = ['maçã', 'banana', 'abacate', 'uva']

// removendo última fruta
const removidos = frutas.splice(3, 1)
const removidos2 = frutas.splice(-4, 1)

    console.log(`REMOVIDOS: ${removidos}`)
    console.log(`REMOVIDOS COM INDEX NEGATIVOS 2: ${removidos2}`)

    console.log(`FRUTAS: ${frutas}`)

    

    // ADICIONANDO ELEMENTOS NO COMEÇO
    // MEXE NO INDEX

    const adicionadas = frutas.splice(0, 0,  'morango', 'tangerina', 'pinha')
    console.log(`FRUTAS ATUALIZADAS: ${frutas}`)

        // ADICIONANDO ELEMENTOS NO FINAL

        const adicionadas2 = frutas.splice(frutas.length, 0, 'LARANJA')
        console.log(`FRUTAS ATUALIZADAS: ${frutas}`)
        
        
        //mostra os indeces do elemetos
        console.log(frutas.indexOf('pinha'))