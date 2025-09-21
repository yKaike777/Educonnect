const params = new URLSearchParams(window.location.search);
const turmaID = params.get('turmaID');

const turmaName = database.turmas.find(turma => turma.turmaID == turmaID)?.nome || 'Turma Desconhecida';

document.getElementById('turma').textContent = `Turma ${turmaName}`;