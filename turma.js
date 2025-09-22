const params = new URLSearchParams(window.location.search);
const turmaID = params.get('turmaID');

// Acha o nome da turma com base no ID
const turmaName = database.turmas.find(turma => turma.turmaID == turmaID)?.nome || 'Turma Desconhecida';

document.getElementById('turma').textContent = `Turma ${turmaName}`;

// Filtra os alunos que pertencem à turma atual
const alunos = database.alunos.filter(aluno => aluno.turmaID == turmaID);
const alunosNome = alunos.map(aluno => aluno.nome);

// Atualiza a quantidade de alunos
const qntdAlunos = document.getElementById('qntd-alunos');
qntdAlunos.textContent = `Quantidade de Alunos: ${alunos.length}`;

alunos.forEach((aluno) => {
    // Adiciona uma nova linha para cada aluno
    const tabela = document.querySelector('tbody');
    const linha = document.createElement('tr');

    linha.classList.add('aluno');
    linha.setAttribute('id', aluno.id);

    linha.innerHTML = `
                    <tr class="aluno" id="1">
                        <td class="num-chamada">10</td>
                        <td class="nome-aluno">nome do aluno</td>
                        <td class="nota-primeiro-tri">6,0 <i class="fa-solid fa-pen-to-square"></i></td>
                        <td class="nota-segundo-tri">6,0 <i class="fa-solid fa-pen-to-square"></i></td>
                        <td class="nota-terceiro-tri">6,0 <i class="fa-solid fa-pen-to-square"></i></td>
                        <td class="presenca"><button class="botao-presenca">Sim</button></td>                      
                   </tr>
                    `;

    tabela.appendChild(linha);
});


// Preenche os nomes dos alunos e números de chamada
const nomeTabela = document.querySelectorAll('.nome-aluno');

nomeTabela.forEach((aluno, index) => {
    aluno.textContent = alunosNome[index];

    const numChamada = document.querySelectorAll('.num-chamada');
    numChamada[index].textContent = index + 1;
});

const nomeProfessor = document.getElementById('professor');
nomeProfessor.textContent = sessionStorage.getItem('nome');


const presencaBotao = document.querySelectorAll('.botao-presenca');
presencaBotao.forEach(botao => {
    botao.addEventListener('click', () => {
        botao.classList.toggle('ausente');

        if (botao.classList.contains('ausente')) {
            botao.textContent = 'Não';
        } else {
            botao.textContent = 'Sim';
        }
    });
});

// Adiciona funcionalidade de edição de notas
const iconesEdicao = document.querySelectorAll('.fa-pen-to-square');

iconesEdicao.forEach((icone) => {
    icone.addEventListener('click', () => {
        document.getElementById('overlay').style.display = 'block';
    })
})

function atualizarNotas() {
    const prova1 = parseFloat(document.getElementById('prova1').value) || 0;
    const prova2 = parseFloat(document.getElementById('prova2').value) || 0;
    const trabalho1 = parseFloat(document.getElementById('trabalho1').value) || 0;
    const recup = parseFloat(document.getElementById('recup').value) || 0;
    const quali = parseFloat(document.getElementById('quali').value) || 0;
}

const botaoFechar = document.getElementById('botao-fechar-menu');

botaoFechar.addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
})

const botaoSalvar = document.getElementById('salvar-notas');

botaoSalvar.addEventListener('click', () => {
    document.getElementById('overlay').style.display = 'none';
    atualizarNotas();
})