// esta função recebe um número ou caractere que é armazenado na variável "num" e em seguida concatena este caractere recebido com o conteúdo presente no campo 'resultado', que foi obtido no arquivo html.
function insert(num) {
    let numero = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = numero + num;
}

// esta função obtém o campo 'resultado' e insere uma String vazia nele, limpando os caracteres que haviam sido inseridos ali.
function limpar() {
    document.getElementById('resultado').innerText = "";
}

// essa função apaga o último caractere digitado. Instancia o a variável campoResultado, que recebe o conteúdo presente no campo 'resultado', que foi obtido no arquivo html, transforma este campo em String e remove o último dígito inserido
function backspace() {
    var campoResultado = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = campoResultado.substring(0, campoResultado.length - 1);
}

// esta função instancia uma variável que recebe os caracteres que foram informados no campo resultado e em seguida verifica se o campo não está vazio, se estiver vazio ele adiciona a String que orienta à adicionar alguma entrada. Caso existe algum número, ele calcula através da função pré-pronta do JavaScript "eval"
function calcular() {
    let campoResultado = document.getElementById('resultado').innerHTML;

    if (campoResultado) {
        document.getElementById('resultado').innerHTML = eval(campoResultado);

    } else {
        document.getElementById('resultado').innerHTML = "Adicione uma entrada";
    }
}
