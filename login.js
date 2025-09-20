function entrar() {
    const radio = document.querySelector('input[name="aluno-professor"]:checked')
    const nome = document.getElementById("nome").value

    if (nome){

        if (radio.value === "aluno") {
            alert(`Bem-vindo, ${nome}! Entrando como Aluno...`)
            sessionStorage.clear()
            sessionStorage.setItem("nome", nome)
            window.location.href = "aluno.html"
        } else if (radio.value === "professor") {
            alert(`Bem-vindo, ${nome}! Entrando como Professor...`)
            sessionStorage.clear()
            sessionStorage.setItem("nome", nome)
            window.location.href = "professor.html"
        }
    }else{
        alert("Preencha o nome")
    }

}