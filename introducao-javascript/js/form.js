
var botao = document.querySelector('#adicionar-paciente');

botao.addEventListener("click", function (event){
    event.preventDefault(); // Reseta configuração padrão do botão (de enviar dado para outra pag ou servidor)

    var form = document.querySelector('#formulario-adc'); // Seleciona form
    var paciente = obtemPacienteDoFormulario(form); // Extrai infos do paciente do form;

    var erros = validaPaciente(paciente);
    if(erros.length > 0){ // Caso comprimento do meu array de erros seja maior que 0, exibre msg de erro e o paciente não é add na tabela e para de executar a função.
        exibeMensagemDeErros(erros);
       
        return;
    }

    adicionaPacienteNaTabela(paciente);
    
    form.reset(); // Limpa os campos preenchidos do form após clicar no botão de adicionar;

    var mensagemErros = document.querySelector('#mensagens-erro');
    mensagemErros.innerHTML = ""; //quando adicionamos um paciente com sucesso, as mensagens de erro são limpas da tela.

});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente); // Monta a Tr através de uma função
    var tabela = document.querySelector('#tabela-pacientes'); // Seleciona tabela body
    tabela.appendChild(pacienteTr); // Add nova linha (tr) com infos do paciente
}

function exibeMensagemDeErros(erros){
    var ul = document.querySelector('#mensagens-erro'); //Seleciona a ul no HTML
    ul.innerHTML = ""; // Sempre que as mensagens de erro forem exibidas, as anteriores serão apagadas, de forma a validarmos o formulário.

    // Utilização do loop para criação de li dentro da ul, para cada mensagem de erro.
    erros.forEach(function(erro){ 
        var li = document.createElement('li');
        li.textContent = erro; // Mostrará cada mensagem de erro dentro do array erros, um em cada linha.
        ul.appendChild(li); // Colocando li dentro da ul;
    });
}

// Utilização de função para obter dados do Paciente - representação dos dados, através de um objeto.
function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement('tr'); //Cria tr
    pacienteTr.classList.add('paciente'); // Adiciona uma classe chamada paciente na tr;

    //Cria td através da função e seus parâmetros (nesse caso add classe) e adiciona o paciente na tabela;
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

// Criará a td e adicionará a classe juntamente com o dado. Como a classe e o dado variam de acordo com a td, iremos recebê-los por parâmetro na função
function montaTd(dado, classe){
    var td = document.createElement('td');
    td.classList.add(classe);
    td.textContent = dado;
       
    return td;
}

// Irá testar se a altura e peso do paciente são válidos.
function validaPaciente (paciente){
    var erros = [];

    if(!validaPeso(paciente.peso)) erros.push('Peso inválido!') // Outra maneira de escrever um if simples.

    if(!validaAltura(paciente.altura)){
        erros.push('Altura inválida!')
    }

    if(paciente.nome.length == 0){
        erros.push('O campo nome deve ser preenchido!')
    }

    if(paciente.gordura.length == 0){
        erros.push('O campo gordura deve ser preenchido!')
    }

   /* if(paciente.altura.length == 0){
        erros.push('O campo altura deve ser preenchido!')
    }

    if(paciente.peso.length == 0){
        erros.push('O campo peso deve ser preenchido!')
    }*/

    return erros;
}