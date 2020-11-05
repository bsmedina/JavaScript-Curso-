var campoFiltro = document.querySelector("#filtrar-tabela");

//O evento input, faz com que o contador/busca/filtro seja atualizado conforme o usuário escreve.
campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    // Caso tenha algo digitado no input (ou seja, o comprimento do valor do input seja maior que 0) irá executar o for para mostrar somente o nome digitado;
    if (this.value.length > 0){
        // Irá iterar mostrando cada nome de paciente do array;
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); // Expressão regular para buscar a palavra sem ter que digitar ela toda. "i" para buscar independente de ser uppercase ou lower case (insensitive);

            //Vamos pedir para a expressão regular verificar se um pedaço do nome do paciente possui as letras digitadas no campo de busca. Para isso, a expressão regular tem o método test(), com a qual passaremos o que queremos testar;
            // Irá adicionar/remover a classe invisivel, para que aparaça na tabela somente o nome buscado no input;
            if (!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{ 
        // Caso o nome buscado seja apagado do input, deverá mostrar a tabela completa novamente;
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
})

/* Mas há um modo de fazer essa comparação sem a necessidade de utilizar expressões regulares! Podemos utilizar a função substring, que recebe dois parâmetros, fazendo com que ela devolva parte da string, com o tamanho definido nos parâmetros. O primeiro parâmetro é o início, começando do 0 (que representa o primeiro caractere). O segundo parâmetro define o fim (exclusivo, mostramos até o penúltimo caractere). Por exemplo:

var string = "Alura";
var resultado = string.substring(1, 4);

Para o mesmo caso do nosso exercício acima:

var comparavel = nome.substr(0, this.value.length);
var comparavelMinusculo = comparavel.toLowerCase();
var valorDigitadoMinusculo = this.value.toLowerCase();

if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
    paciente.classList.add("invisivel");
} else{
    paciente.classList.remove("invisivel");
}*/
