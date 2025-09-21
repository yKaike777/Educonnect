document.getElementById("nome").innerText = sessionStorage.getItem("nome").toUpperCase()

let database = {
    "turmas" : [
        {"turmaID": 1, "nome": "1A"},
        {"turmaID": 2, "nome": "1B"},
        {"turmaID": 3, "nome": "2C"},
        {"turmaID": 4, "nome": "3D"}
    ],
    "alunos": [
        {"id": 1, "nome": "Ana", "notas": [], "turma": 1},
        {"id": 2, "nome": "Beatriz", "notas": [], "turma": 1},
        {"id": 3, "nome": "Carlos", "notas": [], "turma": 1},
        {"id": 4, "nome": "Daniel", "notas": [], "turma": 1},
        {"id": 5, "nome": "Eduardo", "notas": [], "turma": 2},
        {"id": 6, "nome": "Fernanda", "notas": [], "turma": 2},
        {"id": 7, "nome": "Gabriel", "notas": [], "turma": 2},
        {"id": 8, "nome": "Helena", "notas": [], "turma": 2},
        {"id": 9, "nome": "Isabela", "notas": [], "turma": 3},
        {"id": 10, "nome": "João", "notas": [], "turma": 3},
        {"id": 11, "nome": "Karla", "notas": [], "turma": 3},
        {"id": 12, "nome": "Lucas", "notas": [], "turma": 3},
        {"id": 13, "nome": "Marcos", "notas": [], "turma": 4},
        {"id": 14, "nome": "Natália", "notas": [], "turma": 4},
        {"id": 15, "nome": "Olivia", "notas": [], "turma": 4},
        {"id": 16, "nome": "Pedro", "notas": [], "turma": 4},
    ]
}