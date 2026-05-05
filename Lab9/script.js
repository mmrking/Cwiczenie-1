// Функция для создания пустого состояния (чтобы избежать NaN)
const emptyState = () => ({ pts: 0, c: 1, a: 0, t: Date.now() });

// Загружаем и проверяем, что данные корректны
let state = JSON.parse(localStorage.getItem("save")) || emptyState();

// Если загрузились битые данные (NaN), сбрасываем их
if (isNaN(state.pts) || isNaN(state.c)) {
  state = emptyState();
}

function update() {
  document.getElementById("points").innerText = Math.floor(state.pts);
  document.getElementById("cc").innerText = state.c * 10;
  document.getElementById("ca").innerText = (state.a + 1) * 50;
  state.t = Date.now();
  localStorage.setItem("save", JSON.stringify(state));
}

document.getElementById("clickBtn").onclick = () => {
  state.pts += state.c;
  update();
};

function buy(type) {
  if (type === "c" && state.pts >= state.c * 10) {
    state.pts -= state.c * 10;
    state.c++;
  } else if (type === "a" && state.pts >= (state.a + 1) * 50) {
    state.pts -= (state.a + 1) * 50;
    state.a++;
  }
  update();
}

function reset() {
  localStorage.removeItem("save");
  state = emptyState();
  update();
}

// Оффлайн доход
const off = Math.floor((Date.now() - state.t) / 1000);
if (off > 0 && state.a > 0) {
  state.pts += off * state.a;
  alert("Zarobiłeś offline: " + off * state.a);
}

setInterval(() => {
  state.pts += state.a;
  update();
}, 1000);

update();
