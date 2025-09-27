let database = {
    "turmas" : [
        {"turmaID": 1, "nome": "1A"},
        {"turmaID": 2, "nome": "1B"},
        {"turmaID": 3, "nome": "2C"},
        {"turmaID": 4, "nome": "3D"}
    ],
    "alunos": [
        {"id": 1, "nome": "Ana Beatriz da Cunha Filho", "notas": [], "turmaID": 1},
        {"id": 2, "nome": "Beatriz Figuereido alburquerque", "notas": [], "turmaID": 1},
        {"id": 3, "nome": "Carlos Machado da Silva", "notas": [], "turmaID": 1},
        {"id": 4, "nome": "Daniel Alves Silva", "notas": [], "turmaID": 1},
        {"id": 5, "nome": "Eduardo Monteiro Pinto da Silva", "notas": [], "turmaID": 2},
        {"id": 6, "nome": "Fernanda da Cunha Silveira", "notas": [], "turmaID": 2},
        {"id": 7, "nome": "Gabriel Pasternack Conchaves", "notas": [], "turmaID": 2},
        {"id": 8, "nome": "Helena Luiza Oliveira", "notas": [], "turmaID": 2},
        {"id": 9, "nome": "Isabela Eduarda Conçeição", "notas": [], "turmaID": 3},
        {"id": 10, "nome": "João Pinto Nascimento", "notas": [], "turmaID": 3},
        {"id": 11, "nome": "Karla Pinto da Costa", "notas": [], "turmaID": 3},
        {"id": 12, "nome": "Lucas Rezende Oliveira", "notas": [], "turmaID": 3},
        {"id": 13, "nome": "Marcos Catarina Leblanc", "notas": [], "turmaID": 4},
        {"id": 14, "nome": "Natália Vitar Gonçalves", "notas": [], "turmaID": 4},
        {"id": 15, "nome": "Olivia Oliveira da Silveira", "notas": [], "turmaID": 4},
        {"id": 16, "nome": "Pedro Andrade Boavista", "notas": [], "turmaID": 4},
    ]
}

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
qntdAlunos.textContent = `${alunos.length}`;

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
                        <td class="nota-primeiro-tri"><span class="nota-text">0,0</span> <i class="fa-solid fa-pen-to-square"></i></td>
                        <td class="nota-segundo-tri"><span class="nota-text">0,0</span> <i class="fa-solid fa-pen-to-square"></i></td>
                        <td class="nota-terceiro-tri"><span class="nota-text">0,0</span> <i class="fa-solid fa-pen-to-square"></i></td>
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
let celulaEditando = null;
const iconesEdicao = document.querySelectorAll('.fa-pen-to-square');

iconesEdicao.forEach((icone) => {
    icone.addEventListener('click', (e) => {
        document.getElementById('overlay').style.display = 'block';

        let iconeClicado = e.currentTarget
        celulaEditando = iconeClicado.parentElement;
        
        // Nome do aluno no menu
        document.getElementById('nome-aluno').textContent = celulaEditando.parentElement.querySelector('.nome-aluno').textContent;
    })
})

function atualizarNotas() {
    const prova1 = parseFloat(document.getElementById('prova1').value) || 0;
    const prova2 = parseFloat(document.getElementById('prova2').value) || 0;
    const trabalho1 = parseFloat(document.getElementById('trabalho1').value) || 0;
    const recup = parseFloat(document.getElementById('recup').value) || 0;
    const quali = parseFloat(document.getElementById('quali').value) || 0;

    let notaFinal = prova1 + prova2 + trabalho1 + quali;

    if (recup > prova1 + prova2) {
        notaFinal = recup + trabalho1 + quali;
    }

    if (celulaEditando) {
        let spanNota = celulaEditando.querySelector('.nota-text');
        spanNota.textContent = notaFinal.toFixed(1).replace('.', ',');
    }
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