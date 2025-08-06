/*********************************************************************************************************
 * Objetivo: Realizar o cálculo de Juros Compostos para uma aplicação da empresa Viva Moda
 * Desenvolvedor: Nikolas Fernandes
 * Data: 05/08/2025
 * Versão: 1.0
*********************************************************************************************************/
var mostrarMensagem = require('./modulo/juros.js')
var calculoJuros = require('./modulo/juros.js')
var readline = require('readline')


var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const MESSAGE_ERRO_EMPTY = 'ERRO: O campo do nome do cliente não pode estar vazio!'

entradaDeDados.question('Digite o nome do cliente: ', function(nome){
    let nomeCliente = String(nome).toUpperCase()

    if(nomeCliente == ''){
        console.log(MESSAGE_ERRO_EMPTY)
        entradaDeDados.close()
    } else{
        entradaDeDados.question('Digite o nome do produto: ', function(produto){
            let nomeProduto = String(produto)

            if(nomeProduto == ''){
                console.log(MESSAGE_ERRO_EMPTY)
                entradaDeDados.close()
            } else{
                entradaDeDados.question('Digite o valor do capital inicial: ', function(valor1){
                    let principal = String(valor1)

                    if(principal == ''){
                        console.log(MESSAGE_ERRO_EMPTY)
                        entradaDeDados.close()
                    } else{
                        entradaDeDados.question('Digite o valor da taxa de juros anual em percentual: ', function(valor2){
                            let taxaDeJuros = String(valor2)

                            if(taxaDeJuros == ''){
                                console.log(MESSAGE_ERRO_EMPTY)
                                entradaDeDados.close()
                            } else{
                                entradaDeDados.question('Digite o número de parcelas: ', function(valor3){
                                    let numeroDeParcelas = String(valor3)

                                    if(numeroDeParcelas == ''){
                                        console.log(MESSAGE_ERRO_EMPTY)
                                        entradaDeDados.close()
                                    } else{
                                            entradaDeDados.question('Digite em quanto tempo(em anos) o valor será parcelado: ', function(valor4){
                                                let tempoAnos = String(valor4)

                                                if(tempoAnos == ''){
                                                    console.log(MESSAGE_ERRO_EMPTY)
                                                    entradaDeDados.close()
                                                } else{
                                                    let montante = calculoJuros.calcularJuros(principal, taxaDeJuros, numeroDeParcelas, tempoAnos)
                                                    console.log(montante);

                                                    if(montante){
                                                        alert = mostrarMensagem.mostrarMensagem(nomeCliente, nomeProduto, principal, taxaDeJuros, numeroDeParcelas, tempoAnos)
                                                        console.log(alert)
                                                    }
                                                }
                                            })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})