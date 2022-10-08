const markBtn = document.querySelector("#mark");
const message = document.querySelectorAll(".message");
const activeDod = document.querySelectorAll(".message__dod");
const notificationsNum = document.querySelector(".notifications__number");

message.forEach((m, i) => m.setAttribute("id", i));

let counter = 0;

notificationsNum.textContent = counter;

// Event Listeners
eventListeners();

function eventListeners() {
  markBtn.addEventListener("click", markAllAsRead);
  message.forEach((m) => m.addEventListener("click", markAsRead));
}

// Functions
function markAllAsRead() {
  message.forEach((m) => {
    m.classList.remove("active");

    counter = 0;
    notificationsNum.textContent = counter;
  });
}

function markAsRead(e) {
  const close = e.target.closest(".message");
  if (close === null) return;

  if (!close.classList.contains("active")) {
    notificationsNum.textContent = counter++ + 1;
  } else {
    notificationsNum.textContent = counter-- - 1;
  }

  close.classList.toggle("active");
}

function active(element) {
  return element.forEach((e) => e.classList.contains("active"));
}
