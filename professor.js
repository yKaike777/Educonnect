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

const cardsTurma = document.querySelectorAll('.card')

cardsTurma.forEach((card) => {
    const ID = card.getAttribute('id')
    const turma = database.turmas.find(t => t.turmaID == ID)

    // Atualiza o nome da turma no card
    if (turma){
        card.querySelector('h2').textContent = "Turma " + turma.nome
    }   

    // Adiciona o evento de clique para redirecionar para a página da turma
    card.addEventListener('click', () => {
        console.log('Card clicado:', ID);
        window.location.href = `turma.html?turmaID=${ID}`;
    })
})

function criarAviso(){
    const avisoTitulo = document.getElementById("input-titulo-aviso")
    const avisoConteudo = document.getElementById("input-descricao-aviso")
    
    alert(`Aviso criado com sucesso!\nTítulo: ${avisoTitulo.value}\nConteúdo: ${avisoConteudo.value}`)

    avisoTitulo.value = ""
    avisoConteudo.value = ""
}

const fotoPerfil = document.getElementById('foto-perfil')

fotoPerfil.addEventListener('click', () => {
    window.location.href = 'configuracoes.html'
})

window.addEventListener("DOMContentLoaded", () => {
  const fotoSalva = localStorage.getItem("fotoPerfil");
  if (fotoSalva) {
    document.getElementById("foto-perfil-usuario").src = fotoSalva;
  }
});

if (localStorage.getItem('modoEscuro') === 'ativado'){
    document.documentElement.style.setProperty('--background-color', '#1E1E2F');
    document.documentElement.style.setProperty('--text-color', '#f4f4f4');
    document.documentElement.style.setProperty('--primary-color', '#252545');
    document.documentElement.style.setProperty('--secondary-color', '#ff6600');
    document.documentElement.style.setProperty('--border-color', '#333');
    document.documentElement.style.setProperty('--title-color', '#ffffff');
    document.documentElement.style.setProperty('--title-color-dark', '#ffffff');
    document.documentElement.style.setProperty('--card-background', '#383F6B');
} else{
    document.documentElement.style.setProperty('--background-color', '#f4f4f4');
    document.documentElement.style.setProperty('--text-color', '#333');
    document.documentElement.style.setProperty('--primary-color', '#383F6B');
    document.documentElement.style.setProperty('--secondary-color', '#ff6600');
    document.documentElement.style.setProperty('--border-color', '#e2e2e2');
    document.documentElement.style.setProperty('--title-color-dark', '#383F6B');
    document.documentElement.style.setProperty('--card-background', '#ffffff');
}