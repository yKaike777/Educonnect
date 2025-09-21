const cardsTurma = document.querySelectorAll('.card')

cardsTurma.forEach((card) => {
    const ID = card.getAttribute('id')
    const turma = database.turmas.find(t => t.turmaID == ID)

    if (turma){
        card.querySelector('h2').textContent = "Turma " + turma.nome
    }

    card.addEventListener('click', () => {
        window.location.href = `turma.html?turmaID=${ID}`;
    })
})
