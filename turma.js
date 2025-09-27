let database = {
    "turmas" : [
        {"turmaID": 1, "nome": "1A"},
        {"turmaID": 2, "nome": "1B"},
        {"turmaID": 3, "nome": "2C"},
        {"turmaID": 4, "nome": "3D"}
    ],
    "alunos": [
        {"id": 1, "nome": "Ana Beatriz da Cunha Filho", "notas": [], "turmaID": 1},
        {"id": 2, "nome": "Beatriz Figuereido Alburquerque", "notas": [], "turmaID": 1},
        {"id": 3, "nome": "Carlos Machado da Silva", "notas": [], "turmaID": 1},
        {"id": 4, "nome": "Daniel Alves Silva", "notas": [], "turmaID": 1},
        {"id": 5, "nome": "Yasmin Amaro da Silva", "notas": [], "turmaID": 1},
        {"id": 6, "nome": "Yasmin Amaro da Silva", "notas": [], "turmaID": 1},
        {"id": 7, "nome": "Isabele Caamano da Costa", "notas": [], "turmaID": 1},
        {"id": 8, "nome": "Tiago da Silva Alves", "notas": [], "turmaID": 1},
        {"id": 9, "nome": "Vitória Foscarini Machado", "notas": [], "turmaID": 1},
        {"id": 10, "nome": "Eduarda Nascimento Silva", "notas": [], "turmaID": 1},
        {"id": 11, "nome": "Gregori Ribeiro Carpes Duarte", "notas": [], "turmaID": 1},
        {"id": 12, "nome": "José Vítor Pinto", "notas": [], "turmaID": 1},

        {"id": 13, "nome": "Eduardo Monteiro Pinto da Silva", "notas": [], "turmaID": 2},
        {"id": 14, "nome": "Fernanda da Cunha Silveira", "notas": [], "turmaID": 2},
        {"id": 15, "nome": "Gabriel Pasternack Conchaves", "notas": [], "turmaID": 2},
        {"id": 16, "nome": "Helena Luiza Oliveira", "notas": [], "turmaID": 2},
        {"id": 17, "nome": "Ismael Bayard Soares Gomes", "notas": [], "turmaID": 2},
        {"id": 18, "nome": "Julia Cavalcante Baptista", "notas": [], "turmaID": 2},
        {"id": 19, "nome": "Guilherme de Deus Dalosto", "notas": [], "turmaID": 2},
        {"id": 20, "nome": "Luiz Henrique Brum Vaz", "notas": [], "turmaID": 2},
        {"id": 21, "nome": "Thiago Neris de Melo", "notas": [], "turmaID": 2},
        {"id": 22, "nome": "Bruno Silva Campos", "notas": [], "turmaID": 2},
        {"id": 23, "nome": "Lawren Vitorya Silva Gomes", "notas": [], "turmaID": 2},

        {"id": 24, "nome": "Isabela Eduarda Conçeição", "notas": [], "turmaID": 3},
        {"id": 25, "nome": "João Pinto Nascimento", "notas": [], "turmaID": 3},
        {"id": 26, "nome": "Karla Pinto da Costa", "notas": [], "turmaID": 3},
        {"id": 27, "nome": "Lucas Rezende Oliveira", "notas": [], "turmaID": 3},
        {"id": 28, "nome": "Ana Beatriz Garcia Ferreira", "notas": [], "turmaID": 3},
        {"id": 29, "nome": "Laura Cidade Porto", "notas": [], "turmaID": 3},
        {"id": 30, "nome": "Felipe de Lima Zamora Rodrigues", "notas": [], "turmaID": 3},
        {"id": 31, "nome": "João Marcos da Silva Alvares", "notas": [], "turmaID": 3},
        {"id": 32, "nome": "Ryan Phillippe Brito da Silva Pereira", "notas": [], "turmaID": 3},
        {"id": 33, "nome": "Júlia Verdun de Oliveira", "notas": [], "turmaID": 3},
        {"id": 34, "nome": "Kaike Gabriel Tavares Barros", "notas": [], "turmaID": 3},

        {"id": 35, "nome": "Marcos Catarina Leblanc", "notas": [], "turmaID": 4},
        {"id": 36, "nome": "Natália Vitar Gonçalves", "notas": [], "turmaID": 4},
        {"id": 37, "nome": "Olivia Oliveira da Silveira", "notas": [], "turmaID": 4},
        {"id": 38, "nome": "Pedro Andrade Boavista", "notas": [], "turmaID": 4},
        {"id": 39, "nome": "Gabriel Bonada Vaz Trindade", "notas": [], "turmaID": 4},
        {"id": 40, "nome": "Benjamin Cortes da Silva", "notas": [], "turmaID": 4},
        {"id": 41, "nome": "Pietro de Oliveira Sehna", "notas": [], "turmaID": 4},
        {"id": 42, "nome": "Eduardo Minho Monteiro", "notas": [], "turmaID": 4},
        {"id": 43, "nome": "Jordan Rafael da Rosa Paim", "notas": [], "turmaID": 4},
        {"id": 44, "nome": "João Victor Sales Cappeletti", "notas": [], "turmaID": 4},
        {"id": 45, "nome": "Diego Paiani Cardoso", "notas": [], "turmaID": 4},
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
                        <td class="status">Aprovado</td>                      
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


// Adiciona funcionalidade de edição de notas
let celulaEditando = null;
const iconesEdicao = document.querySelectorAll('.fa-pen-to-square');

iconesEdicao.forEach((icone) => {
    icone.addEventListener('click', (e) => {
        document.getElementById('overlay').style.display = 'block';

        let iconeClicado = e.currentTarget
        celulaEditando = iconeClicado.parentElement;
        
        // Define o trimestre no menu
        const classeCelula = celulaEditando.classList[0]; // Exemplo: "nota-primeiro-tri"
        let trimestre = '';
        if (classeCelula === 'nota-primeiro-tri') {
            trimestre = '1º Trimestre';
        } else if (classeCelula === 'nota-segundo-tri') {
            trimestre = '2º Trimestre';
        } else if (classeCelula === 'nota-terceiro-tri') {
            trimestre = '3º Trimestre';
        }
        document.getElementById('trimestre').textContent = trimestre;

        let nomeAlunoEditando = celulaEditando.parentElement.querySelector('.nome-aluno').textContent

        // Nome do aluno no menu
        document.getElementById('nome-aluno-menu').textContent = nomeAlunoEditando;

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
    atualizarNotasDatabase()
})

function atualizarNotasDatabase() {
    let nomeAluno = document.getElementById('nome-aluno-menu').textContent;

    // Pega a linha do aluno que está sendo editado
    let linhaAluno = celulaEditando.parentElement;

    const notaPrimeiroTri = linhaAluno.querySelector('.nota-primeiro-tri .nota-text').textContent;
    const notaSegundoTri = linhaAluno.querySelector('.nota-segundo-tri .nota-text').textContent;
    const notaTerceiroTri = linhaAluno.querySelector('.nota-terceiro-tri .nota-text').textContent;

    const notas = [notaPrimeiroTri, notaSegundoTri, notaTerceiroTri];

    // Salva no localStorage
    localStorage.setItem(nomeAluno, JSON.stringify(notas));

    // Atualiza também no "database"
    const aluno = database.alunos.find(aluno => aluno.nome === nomeAluno);
    if (aluno) {
        aluno.notas = notas;
        console.log(aluno);
    }
}


window.addEventListener("DOMContentLoaded", () => {
  // Foto do perfil
  const fotoSalva = localStorage.getItem("fotoPerfil");
  if (fotoSalva) {
    document.getElementById("foto-perfil-usuario").src = fotoSalva;
  }

  // Notas dos alunos
  database.alunos.forEach((aluno) => {
    const notasSalvas = localStorage.getItem(aluno.nome);
    if (notasSalvas) {
      const notas = JSON.parse(notasSalvas);
      aluno.notas = notas;

      // Atualiza a linha do aluno na tabela
      const linha = document.getElementById(aluno.id);
      if (linha) {
        const spansNotas = [
          linha.querySelector(".nota-primeiro-tri .nota-text"),
          linha.querySelector(".nota-segundo-tri .nota-text"),
          linha.querySelector(".nota-terceiro-tri .nota-text"),
        ];

        notas.forEach((nota, index) => {
          if (spansNotas[index]) {
            spansNotas[index].textContent = nota;
          }
        });
      }
    }
  });
});
