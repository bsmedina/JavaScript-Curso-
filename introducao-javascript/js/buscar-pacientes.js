var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
    console.log("Buscando...");
    var xhr = new XMLHttpRequest (); //é um objeto do JS responsável por fazer requisições HTTP.
    //Para que ele realize as requisições, devemos ensiná-lo e configurá-lo do jeito que queremos.
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // Vai abrir e transportar para a nossa pag esse link.

    //Para os dados serem exibidos, após o envio da requisição, devemos escutar um evento específico que é acionado quando a requisição termina e a sua resposta é carregada:
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        //O código para uma requisição perfeita, que indica que deu tudo certo, é 200.
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel"); // Em caso de requisição de sucesso, sera adc a classe e a msg de erro nao aparecerá na tela
            var resposta = xhr.responseText
    
            var pacientes = JSON.parse(resposta); // Neste caso o file é tipo JSON e é uma string. Estamos convertendo de uma string para um array de objeto;

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        
        }else{
            erroAjax.classList.remove("invisivel"); // caso não haja sucesso, indicará erro na tela
        }
    
        
    });   
    //é o método que efetivamente envia a requisição, após o qual devemos escutar a resposta para sabermos quando ela retornar no responseText.
    xhr.send();
});