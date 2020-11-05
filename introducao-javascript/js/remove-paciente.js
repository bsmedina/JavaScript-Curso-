var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table"); // elemento pai (table)

//Para selecionarmos o pai de um elemento, trabalharemos com a propriedade parentNode. A seguir selecionaremos quem foi clicado e removeremos o seu pai.

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut"); //irá retirar a linha com uma transição de tempo;

    //Para que o Js espere o tempo do fadeOut, é preciso configurar uma "pausa" no Js, para ficar mais visível essa transição;
    setTimeout(function(){
        event.target.parentNode.remove();
    },500); // Irá esperar 500 milisegundos ( = 0.5s)

});

/*
tabela.addEventListener("dblclick", function(event){
    /* var alvoEvento = event.target; // Criando um event bubbling porém com um alvo (target)
    var paiDoAlvo = alvoEvento.parentNode; // Neste caso será o TR
    paiDoAlvo.remove(); // removerá a linha que for clicada, independente do campo clicado (target) */
    // event.target.parentNode.remove(); // Outra maneira de escrever o código acima;
// FALTA FECHAR A FUNÇÃO });
 /* pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();
    });
}); */

// O this é uma palavra de contexto ligada com quem acionou o evento, a quem o evento está atrelado. Como o evento está atrelado ao paciente, o this fará referência a ele.