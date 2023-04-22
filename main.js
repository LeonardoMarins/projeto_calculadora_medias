const form = document.getElementById("form-atividade");
const imgAprovado = '<img src= "./image/aprovado.png" alt="emoji celebranco" />';
const imgReprovado = '<img src= "./image/reprovado.png" alt="emoji triste" />';
const spanAprovado = '<span class="resultado aprovado">aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">reprovado</span>';
const notaMinima = parseFloat(prompt("digite a nota minima"));

const atividades = [];
const notas = [];

let linhas = '';

form.addEventListener("submit", function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById("nome-atividade");
    const inputNotaAtividade = document.getElementById("nota-atividade");

    if(atividades.includes(inputNomeAtividade.value)) { // verificar se ja existe a atividade
        alert("a atividade ${inputNomeAtividade.value} ja foi inserida");
    }else {

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    
}
inputNomeAtividade.value = '';
inputNomeAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {

    const mediaFinal = calculaMediaFinal();
    
    document.getElementById("media-final-valor").innerHTML = mediaFinal.toFixed(2);
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >=notaMinima ? spanAprovado:spanReprovado;

}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for(let i = 0; i < notas.length;i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}