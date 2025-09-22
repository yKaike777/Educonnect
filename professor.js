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
        window.location.href = `turma.html?turmaID=${ID}`;
    })
})
