const inputFoto = document.getElementById("input-foto");
const btnUpload = document.getElementById("btn-upload");

btnUpload.addEventListener("click", () => {
  inputFoto.click(); // abre o seletor de arquivos
});

inputFoto.addEventListener("change", function() {
  const arquivo = this.files[0];
  if (arquivo) {
    document.getElementById("foto-preview").src = URL.createObjectURL(arquivo);
  }
});

const toggleDark = document.getElementById("toggle-dark");

toggleDark.addEventListener("change", function() {
  if (this.checked) {
    document.documentElement.style.setProperty('--background-color', '#1E1E2F');
    document.documentElement.style.setProperty('--text-color', '#f4f4f4');
    document.documentElement.style.setProperty('--primary-color', '#252545');
    document.documentElement.style.setProperty('--secondary-color', '#ff6600');
    document.documentElement.style.setProperty('--border-color', '#333');
    document.documentElement.style.setProperty('--title-color', '#ffffff');
  } else {
    document.documentElement.style.setProperty('--background-color', '#f4f4f4');
    document.documentElement.style.setProperty('--text-color', '#333');
    document.documentElement.style.setProperty('--primary-color', '#383F6B');
    document.documentElement.style.setProperty('--secondary-color', '#ff6600');
    document.documentElement.style.setProperty('--border-color', '#e2e2e2');
  }
});
