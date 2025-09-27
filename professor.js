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