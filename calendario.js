const monthYear = document.getElementById("month-year");
const datesContainer = document.getElementById("calendar-dates");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  monthYear.textContent = date.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long"
  });

  datesContainer.innerHTML = "";

  for (let i = 0; i < firstDay; i++) {
    datesContainer.innerHTML += "<div></div>";
  }

  for (let i = 1; i <= totalDays; i++) {
    const dayDiv = document.createElement("div");
    dayDiv.textContent = i;
    datesContainer.appendChild(dayDiv);
  }
}

prevBtn.onclick = () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
};

nextBtn.onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
};

renderCalendar(currentDate);


// MODAL
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

openModalBtn.onclick = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

const hoje = new Date();

function renderizarCalendario() {
  // ... (seu código de renderização)

  for (let dia = 1; dia <= totalDiasDoMes; dia++) {
    const dataAtual = new Date(ano, mes, dia);

    const divDia = document.createElement("div");
    divDia.textContent = dia;

    if (
      dataAtual.getDate() === hoje.getDate() &&
      dataAtual.getMonth() === hoje.getMonth() &&
      dataAtual.getFullYear() === hoje.getFullYear()
    ) {
      divDia.classList.add("hoje");
    }

    container.appendChild(divDia);
  }
}

datesContainer.addEventListener("click", async (e) => {
  if (e.target.tagName === "DIV" && e.target.textContent) {
    const dia = e.target.textContent.padStart(2, '0');
    const mes = String(currentDate.getMonth() + 1).padStart(2, '0');
    const ano = currentDate.getFullYear();
    const dataFormatada = `${ano}-${mes}-${dia}`;

    const res = await fetch(`buscar_eventos.php?data=${dataFormatada}`);
    const eventos = await res.json();

    const containerEventos = document.getElementById("eventosDoDia");
    containerEventos.innerHTML = "";

    if (eventos.length === 0) {
      containerEventos.innerHTML = "<p>Nenhum evento encontrado para essa data.</p>";
    } else {
      eventos.forEach(ev => {
        containerEventos.innerHTML += `
          <div class="event-card">
            <h3>${ev.titulo_evento}</h3>
            <p><strong>Início:</strong> ${ev.data_evento} ${ev.horario_evento}</p>
            <p><strong>Término:</strong> ${ev.data_prazo} ${ev.hora_prazo}</p>
            <p><strong>Descrição:</strong>${ev.descricao}</p>
          </div>
        `;
      });
    }
  }
});
