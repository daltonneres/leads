const form = document.getElementById("leadForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const lead = {
    nome: nome.value,
    email: email.value,
    telefone: telefone.value,
    interesse: interesse.value,
    data: new Date().toLocaleString()
  };

  console.log("Lead capturado:", lead);

  mensagem.textContent = "✅ Lead enviado com sucesso!";
  mensagem.style.color = "#7CFF7C";

  form.reset();
});

const modal = document.getElementById("modal");

function abrirModal() {
  modal.style.display = "flex";
}

function fecharModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target === modal) {
    fecharModal();
  }
};
