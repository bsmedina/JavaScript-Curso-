var titulo = document.querySelector(".titulo");
	titulo.textContent = "Aparecida Nutricionista"; // Modifica dinamicamente o conteúdo de texto do título H1;

    /* Utilização do loop para realizar (iterar) as validações e o cálculo do IMC para cada paciente da tabela */

var pacientes = document.querySelectorAll('.paciente'); // Selecionando todos os dados que recebem a classe paciente
console.log(pacientes); 

for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i]; // Toda classe que possui nome paciente, será considerado um item do meu array.

    var tdPeso = paciente.querySelector('.info-peso'); // Selecionando somente a linha (tr) referente a informação de peso
    var peso = tdPeso.textContent; //  Selecionando apenas o conteúdo de texto (sem tags) que foi previamente selecionada na variável anterior;

    // Neste caso usamos paciente.querySelector ao invés de document.querySelector, pois já especificamos na var global de onde vem esse elemento e, portanto estamos utilizando um dado pré espedificado;

    var tdAltura = paciente.querySelector('.info-altura')
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc') // Buscando e selecionando o campo de informação do IMC na tabela (td).

    var pesoValido = validaPeso(peso); // Utilização de valores booleanos, para a validação dos campos de peso e altura (true ou false).
    var alturaValida = validaAltura(altura); 

    //Estamos testando se nese caso o peso e a altura são inválidas - (Nãopesovalido)/(NãoalturaValida) - só vamos entrar nesse if se os valores forem inválidos
    if(!pesoValido){
        console.log("Peso inválido!");
        pesoValido = false; // Irá setar a var pesoValido para false, caso a validação seja feita e verificada que a condição não é verdadeira;
        tdPeso.textContent = "Peso inválido!"; // Irá mostrar no campo de texto IMC, a frase entre " ", para conhecimento do usuário;
        paciente.classList.add("paciente-invalido"); // Adiciona uma nova class (denominada " paciente inválido") aos pacientes caso a validação seja false;
        // Essa adição de class no css, permitirá que fique destacado todos os pacientes que apresentarem algum erro de peso/altura, para facilitar a observação;
    }

    if (!alturaValida){
        console.log("Altura inválida!");
        alturaValida = false;
        tdAltura.textContent = "Altura inválida!"
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) { // Somente irá realizar o cálculo, caso as duas condições sejam verdadeiras;
        var imc = calculaImc(peso, altura);// Function do IMC 
        tdImc.textContent = imc // Para reescrever o resultado da conta do IMC na tabela e fixar o resultado com 02 casas decimais;
    }else{
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }
}

function validaPeso(peso){
    if (peso > 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura > 0 && altura < 3.0){
        return true;
    }else{
        return false;
    }
}

//Função para calcular imc
function calculaImc(peso,altura){
    var imc = 0;
    imc = (peso / (altura * altura));

    return imc.toFixed(2);
}