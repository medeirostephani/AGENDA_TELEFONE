/*GLOBAIS*/
const telefone = [];
let linhas = ''

const form = document.getElementsByClassName('form-contato');
document.addEventListener('submit', function (e) {
    e.preventDefault(); /*REMOVE COMPORTAMENTO PADRÃO: ATUALIZAR*/

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() { /*FUNÇÃO PARA CRIAR O PROCEDIMENTO DE ADD LINHAS*/
/*ATRIBUI OS VALORES DE ENTRADA DOS CAMPOS ÀS CLASSES*/
    const inputNome = document.getElementById('nome-ctt'); 
    const inputTelefone = document.getElementById('tel-ctt');

/*PROCEDIMENTO PARA BLOQUEAR CONTATOS DUPLICADOS*/
    if (telefone.includes(inputTelefone.value)) {
        alert(`O telefone ${inputTelefone.value} já foi inserido`);
    } else {

/*ENVIAR AS ENTRADAS PRO ARRAY*/
    telefone.push(inputTelefone.value);

/*CRIAR PROCEDIMENTO PARA O PREENCHIMENTO DAS NOVAS LINHAS COM OS VALORES DE ENTRADA */
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '</tr>';

/*VARIAVEL LINHAS RECEBE: CONCATENAR TODAS AS LINHAS*/
        linhas += linha; 
    }

/*LIMPAR CAMPOS*/
    inputNome.value = '';
    inputTelefone.value = '';
}

/*FUNÇÃO PARA ATUALIZAR A TABELA*/
function atualizaTabela () { /*ATRIBUIR O PROCEDIMENTO CRIADO AO HTML, ATUALIZANDO AS INFORMAÇÕES PRO CORPO DA TABELA */    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}