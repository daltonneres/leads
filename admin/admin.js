const leads = [
  {
    nome: "João Silva",
    email: "joao@email.com",
    telefone: "46 99999-1111",
    interesse: "Site",
    cidade: "Francisco Beltrão",
    status: "novo",
    data: "25/12/2025 14:32"
  },
  {
    nome: "Maria Oliveira",
    email: "maria@email.com",
    telefone: "46 98888-2222",
    interesse: "Sistema",
    cidade: "Salto do Lontra",
    status: "contato",
    data: "25/12/2025 15:10"
  },
  {
    nome: "Carlos Souza",
    email: "carlos@email.com",
    telefone: "46 97777-3333",
    interesse: "Marketing",
    cidade: "Pato Branco",
    status: "convertido",
    data: "25/12/2025 16:01"
  }
];

const tabela = document.getElementById("tabelaLeads");

function renderLeads(lista) {
  tabela.innerHTML = "";

  lista.forEach(lead => {
    tabela.innerHTML += `
      <tr>
        <td>${lead.nome}</td>
        <td>${lead.email}</td>
        <td>${lead.telefone}</td>
        <td>${lead.interesse}</td>
        <td>${lead.cidade}</td>
        <td><span class="status ${lead.status}">${lead.status}</span></td>
        <td>${lead.data}</td>
      </tr>
    `;
  });
}

renderLeads(leads);

function filtrarLeads() {
  const filtro = document.getElementById("filtroInteresse").value;

  if (!filtro) {
    renderLeads(leads);
    return;
  }

  const filtrados = leads.filter(l => l.interesse === filtro);
  renderLeads(filtrados);
}

function exportarCSV() {
  let csv = "Nome,Email,Telefone,Interesse,Cidade,Status,Data\n";

  leads.forEach(l => {
    csv += `${l.nome},${l.email},${l.telefone},${l.interesse},${l.cidade},${l.status},${l.data}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "leads.csv";
  a.click();

  URL.revokeObjectURL(url);
}
