document.getElementById("nome").innerText = sessionStorage.getItem("nome").toUpperCase()

let database = {
    "turmas" : [
        {"turmaID": 1, "nome": "1A"},
        {"turmaID": 2, "nome": "1B"},
        {"turmaID": 3, "nome": "2C"},
        {"turmaID": 4, "nome": "3D"}
    ],
    "alunos": [
        {"id": 1, "nome": "Ana", "notas": [], "turmaID": 1},
        {"id": 2, "nome": "Beatriz", "notas": [], "turmaID": 1},
        {"id": 3, "nome": "Carlos", "notas": [], "turmaID": 1},
        {"id": 4, "nome": "Daniel", "notas": [], "turmaID": 1},
        {"id": 5, "nome": "Eduardo", "notas": [], "turmaID": 2},
        {"id": 6, "nome": "Fernanda", "notas": [], "turmaID": 2},
        {"id": 7, "nome": "Gabriel", "notas": [], "turmaID": 2},
        {"id": 8, "nome": "Helena", "notas": [], "turmaID": 2},
        {"id": 9, "nome": "Isabela", "notas": [], "turmaID": 3},
        {"id": 10, "nome": "João", "notas": [], "turmaID": 3},
        {"id": 11, "nome": "Karla", "notas": [], "turmaID": 3},
        {"id": 12, "nome": "Lucas", "notas": [], "turmaID": 3},
        {"id": 13, "nome": "Marcos", "notas": [], "turmaID": 4},
        {"id": 14, "nome": "Natália", "notas": [], "turmaID": 4},
        {"id": 15, "nome": "Olivia", "notas": [], "turmaID": 4},
        {"id": 16, "nome": "Pedro", "notas": [], "turmaID": 4},
    ]
}