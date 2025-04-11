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
