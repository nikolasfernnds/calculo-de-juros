/*********************************************************************************************************
 * Objetivo: Arquivo responsável pelo processamento de cálculos de juros compostos
 * Desenvolvedor: Nikolas Fernandes
 * Data: 30/07/2025
 * Versão: 1.0
*********************************************************************************************************/

function calcularJuros(valor1, valor2, valor3, valor4){
    let principal           = valor1;
    let taxaDeJuros         = valor2;
    let numeroDeParcelas    = valor3;
    let tempoAnos           = valor4;

    let montante = principal * Math.pow((1+taxaDeJuros/numeroDeParcelas), numeroDeParcelas * tempoAnos)
    return montante;
}

module.exports = {
    calcularJuros,
    mostrarMensagem 
}
console.log
