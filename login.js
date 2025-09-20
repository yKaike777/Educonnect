function entrar() {
    const radio = document.querySelector('input[name="aluno-professor"]:checked')
    
    if (radio.value === "aluno") {
        alert("Entrando como Aluno")
        window.location.href = "aluno.html"
    } else if (radio.value === "professor") {
        alert("Entrando como Professor")
        window.location.href = "professor.html"
    } else {
        alert("Selecione uma opção")
    }
}