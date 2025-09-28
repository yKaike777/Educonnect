const inputFoto = document.getElementById("input-foto");
const preview = document.getElementById("foto-preview");
const btnUpload = document.getElementById("btn-upload");

btnUpload.addEventListener("click", () => {
  inputFoto.click();
});

inputFoto.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const base64Image = e.target.result;

      preview.src = base64Image;

      localStorage.setItem("fotoPerfil", base64Image);
    };
    reader.readAsDataURL(file);
  }
});

const toggleDark = document.getElementById("toggle-dark");

toggleDark.addEventListener("change", function() {
  if (this.checked) {
    document.documentElement.style.setProperty('--background-color', '#1E1E2F');
    document.documentElement.style.setProperty('--text-color', '#f4f4f4');
    document.documentElement.style.setProperty('--primary-color', '#252545');
    document.documentElement.style.setProperty('--secondary-color', '#ff6600');
    document.documentElement.style.setProperty('--border-color', '#dbdbdbff');
    document.documentElement.style.setProperty('--title-color', '#ffffff');

    localStorage.setItem('modoEscuro', 'ativado')
  } else {
    document.documentElement.style.setProperty('--background-color', '#f4f4f4');
    document.documentElement.style.setProperty('--text-color', '#333');
    document.documentElement.style.setProperty('--primary-color', '#383F6B');
    document.documentElement.style.setProperty('--secondary-color', '#ff6600');
    document.documentElement.style.setProperty('--border-color', '#e2e2e2');

    localStorage.setItem('modoEscuro', 'desativado')
  }
});

window.onload = () => {
    if (localStorage.getItem('modoEscuro') === 'ativado'){
        toggleDark.checked = true;
        document.documentElement.style.setProperty('--background-color', '#1E1E2F');
        document.documentElement.style.setProperty('--text-color', '#f4f4f4');
        document.documentElement.style.setProperty('--primary-color', '#252545');
        document.documentElement.style.setProperty('--secondary-color', '#ff6600');
        document.documentElement.style.setProperty('--border-color', '#333');
        document.documentElement.style.setProperty('--title-color', '#ffffff');
    } else {
        toggleDark.checked = false;
        document.documentElement.style.setProperty('--background-color', '#f4f4f4');
        document.documentElement.style.setProperty('--text-color', '#333');
        document.documentElement.style.setProperty('--primary-color', '#383F6B');
        document.documentElement.style.setProperty('--secondary-color', '#ff6600');
        document.documentElement.style.setProperty('--border-color', '#e2e2e2');
        document.documentElement.style.setProperty('--title-color', '#383F6B');
    }
}

const inputMudarNome = document.getElementById('input-nome')
inputMudarNome.value = sessionStorage.getItem("nome")

function mudarNome(){
  sessionStorage.setItem('nome', inputMudarNome.value)
}

window.addEventListener("DOMContentLoaded", () => {
  const fotoSalva = localStorage.getItem("fotoPerfil");
  if (fotoSalva) {
    preview.src = fotoSalva;
  }
})

const toggleLetra = document.getElementById("toggle-letra-maior");

toggleLetra.addEventListener('click', () => {
  alert('Função em Desenvolvimento!')
})