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

      // mostra a foto no preview
      preview.src = base64Image;

      // salva no localStorage
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
