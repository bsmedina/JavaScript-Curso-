var titulo = document.querySelector(".titulo");
	titulo.textContent = "Aparecida Nutricionista"; // Modifica dinamicamente o conteúdo de texto do título H1;

    /********** Seleção e cálculo de IMC para o 1º paciente da tabela **********/
var paciente1 = document.querySelector('#primeiro-paciente'); // Selecionando todo o container do primeiro paciente

var tdPeso = document.querySelector('.info-peso'); // Selecionando somente a linha (tr) referente a informação de peso
var peso = tdPeso.textContent; //  Selecionando apenas o conteúdo de texto (sem tags) que foi previamente selecionada na variável anterior;

var tdAltura = document.querySelector('.info-altura')
var altura = tdAltura.textContent;

var tdImc = document.querySelector('.info-imc') // Buscando e selecionando o campo de informação do IMC na tabela (td).
var imc = (peso / (altura * altura)); // Conta do IMC - Resultado deve ser 25
tdImc.textContent = imc; // Para reescrever o resultado da conta do IMC na tabela;

/********** Seleção e cálculo de IMC para o 2º paciente da tabela **********/

var paciente2 = document.querySelector('#segundo-paciente');

var Peso2 = paciente2.querySelector('.info-peso2').textContent; // Maneira reduzida de fazer o passo acima (Já estou acessando um elemento pré selecionado);
var Altura2 = paciente2.querySelector('.info-altura2').textContent;

var tdImc2 = document.querySelector('.info-imc2');
var imc2 = (Peso2 / (Altura2 * Altura2));

tdImc2.textContent = imc2;

console.log(Peso2);
// console.log(peso);
// console.log(altura);
// console.log(imc);