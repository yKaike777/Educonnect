function entrar() {
    const radio = document.querySelector('input[name="aluno-professor"]:checked')
    const nomeEmail = document.getElementById("nome-email").value
    const senha = document.getElementById("senha").value

    if (nomeEmail){

        if (radio.value === "aluno") {
            const usuario = database.alunos.find(aluno => aluno.email === nomeEmail && aluno.senha === senha)

            sessionStorage.clear()
            sessionStorage.setItem("nome", usuario.nome)

            if (usuario){
                console.log('id usuario:', usuario.id)
                alert("Login bem-sucedido! Bem-vindo, " + usuario.nome);
                
                window.location.href = `aluno.html?ID=${usuario.id}`
            } else{
                alert("Email ou senha incorretos.");
            }
                
            
        } else if (radio.value === "professor") {
            alert(`Bem-vindo, ${nomeEmail}! Entrando como Professor...`)

            sessionStorage.clear()
            sessionStorage.setItem("nome", nomeEmail)
            
            window.location.href = "professor.html"
        }
    }else{
        alert("Preencha o nome")
    }

}

let database = {
    "turmas" : [
        {"turmaID": 1, "nome": "1A"},
        {"turmaID": 2, "nome": "1B"},
        {"turmaID": 3, "nome": "2C"},
        {"turmaID": 4, "nome": "3D"}
    ],
    "alunos": [
        {"id": 1, "nome": "Ana Beatriz da Cunha Filho", "notas": [], "turmaID": 1, "email": "ana.filho@aluno.senai.br", "senha": "sollua42"},
        {"id": 2, "nome": "Beatriz Figuereido Alburquerque", "notas": [], "turmaID": 1, "email": "beatriz.alburquerque@aluno.senai.br", "senha": "marflor77"},
        {"id": 3, "nome": "Carlos Machado da Silva", "notas": [], "turmaID": 1, "email": "carlos.silva@aluno.senai.br", "senha": "ventopedra13"},
        {"id": 4, "nome": "Daniel Alves Silva", "notas": [], "turmaID": 1, "email": "daniel.silva@aluno.senai.br", "senha": "riomontanha55"},
        {"id": 5, "nome": "Yasmin Amaro da Silva", "notas": [], "turmaID": 1, "email": "yasmin.silva@aluno.senai.br", "senha": "caminhoestrela68"},
        {"id": 6, "nome": "Yasmin Amaro da Silva", "notas": [], "turmaID": 1, "email": "yasmin.silva@aluno.senai.br", "senha": "marflor21"},
        {"id": 7, "nome": "Isabele Caamano da Costa", "notas": [], "turmaID": 1, "email": "isabele.costa@aluno.senai.br", "senha": "solrio34"},
        {"id": 8, "nome": "Tiago da Silva Alves", "notas": [], "turmaID": 1, "email": "tiago.alves@aluno.senai.br", "senha": "pedraveno90"},
        {"id": 9, "nome": "Vitória Foscarini Machado", "notas": [], "turmaID": 1, "email": "vitoria.machado@aluno.senai.br", "senha": "florvento12"},
        {"id": 10, "nome": "Eduarda Nascimento Silva", "notas": [], "turmaID": 1, "email": "eduarda.silva@aluno.senai.br", "senha": "luaestrela99"},
        {"id": 11, "nome": "Gregori Ribeiro Carpes Duarte", "notas": [], "turmaID": 1, "email": "gregori.duarte@aluno.senai.br", "senha": "marvento46"},
        {"id": 12, "nome": "José Vítor Pinto", "notas": [], "turmaID": 1, "email": "jose.pinto@aluno.senai.br", "senha": "riopedra80"},

        {"id": 13, "nome": "Eduardo Monteiro Pinto da Silva", "notas": [], "turmaID": 2, "email": "eduardo.silva@aluno.senai.br", "senha": "florsol33"},
        {"id": 14, "nome": "Fernanda da Cunha Silveira", "notas": [], "turmaID": 2, "email": "fernanda.silveira@aluno.senai.br", "senha": "ventocaminho44"},
        {"id": 15, "nome": "Gabriel Pasternack Conchaves", "notas": [], "turmaID": 2, "email": "gabriel.conchaves@aluno.senai.br", "senha": "marpedra29"},
        {"id": 16, "nome": "Helena Luiza Oliveira", "notas": [], "turmaID": 2, "email": "helena.oliveira@aluno.senai.br", "senha": "riomontanha51"},
        {"id": 17, "nome": "Ismael Bayard Soares Gomes", "notas": [], "turmaID": 2, "email": "ismael.gomes@aluno.senai.br", "senha": "sollua22"},
        {"id": 18, "nome": "Julia Cavalcante Baptista", "notas": [], "turmaID": 2, "email": "julia.baptista@aluno.senai.br", "senha": "florvento17"},
        {"id": 19, "nome": "Guilherme de Deus Dalosto", "notas": [], "turmaID": 2, "email": "guilherme.dalosto@aluno.senai.br", "senha": "pedramar88"},
        {"id": 20, "nome": "Luiz Henrique Brum Vaz", "notas": [], "turmaID": 2, "email": "luiz.vaz@aluno.senai.br", "senha": "caminholua65"},
        {"id": 21, "nome": "Thiago Neris de Melo", "notas": [], "turmaID": 2, "email": "thiago.melo@aluno.senai.br", "senha": "riopedra39"},
        {"id": 22, "nome": "Bruno Silva Campos", "notas": [], "turmaID": 2, "email": "bruno.campos@aluno.senai.br", "senha": "ventoflor47"},
        {"id": 23, "nome": "Lawren Vitorya Silva Gomes", "notas": [], "turmaID": 2, "email": "lawren.gomes@aluno.senai.br", "senha": "marcaminho50"},

        {"id": 24, "nome": "Isabela Eduarda Conçeição", "notas": [], "turmaID": 3, "email": "isabela.conçeição@aluno.senai.br", "senha": "sollua11"},
        {"id": 25, "nome": "João Pinto Nascimento", "notas": [], "turmaID": 3, "email": "joao.nascimento@aluno.senai.br", "senha": "ventopedra73"},
        {"id": 26, "nome": "Karla Pinto da Costa", "notas": [], "turmaID": 3, "email": "karla.costa@aluno.senai.br", "senha": "flormar19"},
        {"id": 27, "nome": "Lucas Rezende Oliveira", "notas": [], "turmaID": 3, "email": "lucas.oliveira@aluno.senai.br", "senha": "riomontanha92"},
        {"id": 28, "nome": "Ana Beatriz Garcia Ferreira", "notas": [], "turmaID": 3, "email": "ana.ferreira@aluno.senai.br", "senha": "caminhoestrela28"},
        {"id": 29, "nome": "Laura Cidade Porto", "notas": [], "turmaID": 3, "email": "laura.porto@aluno.senai.br", "senha": "marflor36"},
        {"id": 30, "nome": "Felipe de Lima Zamora Rodrigues", "notas": [], "turmaID": 3, "email": "felipe.rodrigues@aluno.senai.br", "senha": "solriopedra44"},
        {"id": 31, "nome": "João Marcos da Silva Alvares", "notas": [], "turmaID": 3, "email": "joao.alvares@aluno.senai.br", "senha": "florvento66"},
        {"id": 32, "nome": "Ryan Phillippe Brito da Silva Pereira", "notas": [], "turmaID": 3, "email": "ryan.pereira@aluno.senai.br", "senha": "pedroriomontanha23"},
        {"id": 33, "nome": "Júlia Verdun de Oliveira", "notas": [], "turmaID": 3, "email": "julia.oliveira@aluno.senai.br", "senha": "caminhsol88"},
        {"id": 34, "nome": "Kaike Gabriel Tavares Barros", "notas": [], "turmaID": 3, "email": "kaike.barros@aluno.senai.br", "senha": "ventolua15"},

        {"id": 35, "nome": "Marcos Catarina Leblanc", "notas": [], "turmaID": 4, "email": "marcos.leblanc@aluno.senai.br", "senha": "riopedra74"},
        {"id": 36, "nome": "Natália Vitar Gonçalves", "notas": [], "turmaID": 4, "email": "natalia.goncalves@aluno.senai.br", "senha": "solflor33"},
        {"id": 37, "nome": "Olivia Oliveira da Silveira", "notas": [], "turmaID": 4, "email": "olivia.silveira@aluno.senai.br", "senha": "ventomonte88"},
        {"id": 38, "nome": "Pedro Andrade Boavista", "notas": [], "turmaID": 4, "email": "pedro.boavista@aluno.senai.br", "senha": "marlua11"},
        {"id": 39, "nome": "Gabriel Bonada Vaz Trindade", "notas": [], "turmaID": 4, "email": "gabriel.trindade@aluno.senai.br", "senha": "florpedra66"},
        {"id": 40, "nome": "Benjamin Cortes da Silva", "notas": [], "turmaID": 4, "email": "benjamin.silva@aluno.senai.br", "senha": "riovento27"},
        {"id": 41, "nome": "Pietro de Oliveira Sehna", "notas": [], "turmaID": 4, "email": "pietro.sehna@aluno.senai.br", "senha": "caminhosol54"},
        {"id": 42, "nome": "Eduardo Minho Monteiro", "notas": [], "turmaID": 4, "email": "eduardo.monteiro@aluno.senai.br", "senha": "pedrariom18"},
        {"id": 43, "nome": "Jordan Rafael da Rosa Paim", "notas": [], "turmaID": 4, "email": "jordan.paim@aluno.senai.br", "senha": "ventoflor90"},
        {"id": 44, "nome": "João Victor Sales Cappeletti", "notas": [], "turmaID": 4, "email": "joao.cappeletti@aluno.senai.br", "senha": "marcaminho31"},
        {"id": 45, "nome": "Diego Paiani Cardoso", "notas": [], "turmaID": 4, "email": "diego.cardoso@aluno.senai.br", "senha": "solriopedra62"}
    ]
}
