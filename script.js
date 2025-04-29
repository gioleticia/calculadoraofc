// Função que realiza o cálculo com base nos valores inseridos pelo usuário
function calcular() {
    // Obtém os valores inseridos pelo usuário e converte para número
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    
    // Obtém a operação selecionada pelo usuário
    let operacao = document.getElementById("operacao").value;
    
    // Variável que armazenará o resultado do cálculo
    let resultado;

    // Verifica se os números inseridos são válidos 
    if (isNaN(valor1) || isNaN(valor2)) {
        resultado = "Erro! Insira números válidos.";
    } else {
        // Realiza a operação com base na opção selecionada
        switch (operacao) {
            case "+": 
                resultado = valor1 + valor2; 
                break;
            case "-": 
                resultado = valor1 - valor2; 
                break;
            case "*": 
                resultado = valor1 * valor2; 
                break;
            case "/": 
                resultado = valor2 !== 0 ? valor1 / valor2 : "Erro! Divisão por zero."; 
                break;
        }
    }

    // Atualiza o conteúdo do elemento de resultado na página
    document.getElementById("resultado").textContent = resultado;
}