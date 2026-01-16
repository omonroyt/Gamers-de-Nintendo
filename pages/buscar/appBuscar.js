// pages/buscar/appBuscar.js
const $ = (sel) => document.querySelector(sel);

const searchInput = $("#searchInput");
const searchBtn = $("#searchBtn");
const resultsList = $("#resultsList");
const resultsCount = $("#resultsCount");
const statusMsg = $("#statusMsg");

// Panel detalle
const gameTitle = $("#gameTitle");
const gameSubtitle = $("#gameSubtitle");
const gameRating = $("#gameRating");
const gameCover = $("#gameCover");
const gameRelease = $("#gameRelease");
const gameGenres = $("#gameGenres");
const gamePlatforms = $("#gamePlatforms");
const gameDev = $("#gameDev");
const gamePublisher = $("#gamePublisher");
const gameDesc = $("#gameDesc");
const gameTags = $("#gameTags");
const gameWebsite = $("#gameWebsite");
const gameStore = $("#gameStore");
const gameMeta = $("#gameMeta");
const gameEsrb = $("#gameEsrb");
const gamePlaytime = $("#gamePlaytime");

const RAWG_KEY = window.APP_CONFIG?.RAWG_KEY;
const RAWG_BASE = window.APP_CONFIG?.RAWG_BASE || "https://api.rawg.io/api";

function setStatus(message, show = true) {
  statusMsg.textContent = message;
  statusMsg.classList.toggle("d-none", !show);
}

function clearResults() {
  resultsList.innerHTML = "";
  resultsCount.textContent = "0";
}

function renderResults(games = []) {
  clearResults();
  resultsCount.textContent = String(games.length);

  if (!games.length) {
    setStatus("No encontré resultados. Prueba con otro nombre.", true);
    return;
  }

  setStatus("", false);

  for (const g of games) {
    const card = document.createElement("div");
    card.className = "result-card";

    card.innerHTML = `
      <img class="result-thumb" src="${g.background_image || "https://placehold.co/200x200/png"}" alt="thumb">
      <div class="flex-grow-1">
        <p class="result-title">${g.name}</p>
        <div class="result-meta">
          <span>${g.released || "Sin fecha"}</span>
          <span class="mx-2">•</span>
          <span>⭐ ${g.rating ?? "—"}</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => loadGameDetail(g.id));
    resultsList.appendChild(card);
  }
}

function renderDetail(detail) {
  gameTitle.textContent = detail.name || "—";
  gameSubtitle.textContent = detail.tagline || "Ficha del videojuego";

  if (detail.rating != null) {
    gameRating.textContent = `⭐ ${detail.rating}`;
    gameRating.classList.remove("d-none");
  } else {
    gameRating.classList.add("d-none");
  }

  gameCover.src = detail.background_image || "https://placehold.co/900x1200/png";
  gameRelease.textContent = detail.released || "—";
  gameGenres.textContent = (detail.genres || []).map(x => x.name).join(", ") || "—";
  gamePlatforms.textContent = (detail.platforms || []).map(p => p.platform?.name).filter(Boolean).join(", ") || "—";

  gameDev.textContent = (detail.developers || []).map(x => x.name).join(", ") || "—";
  gamePublisher.textContent = (detail.publishers || []).map(x => x.name).join(", ") || "—";

  gameDesc.textContent = detail.description_raw || "—";

  gameTags.innerHTML = "";
  (detail.tags || []).slice(0, 8).forEach(t => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = t.name;
    gameTags.appendChild(chip);
  });

  if (detail.website) {
    gameWebsite.href = detail.website;
    gameWebsite.classList.remove("disabled");
  } else {
    gameWebsite.href = "#";
    gameWebsite.classList.add("disabled");
  }

  gameStore.href = "#";
  gameStore.classList.add("disabled");

  gameMeta.textContent = detail.metacritic ?? "—";
  gameEsrb.textContent = detail.esrb_rating?.name ?? "—";
  gamePlaytime.textContent = detail.playtime ? `${detail.playtime} h` : "—";
}

async function searchGames(query) {
  if (!RAWG_KEY) throw new Error("Falta RAWG_KEY en pages/config.js");

  const url = `${RAWG_BASE}/games?key=${RAWG_KEY}&search=${encodeURIComponent(query)}&page_size=12`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error buscando juegos");
  const data = await res.json();
  return data.results || [];
}

async function getGameDetail(id) {
  if (!RAWG_KEY) throw new Error("Falta RAWG_KEY en pages/config.js");

  const url = `${RAWG_BASE}/games/${id}?key=${RAWG_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Error cargando detalle");
  return await res.json();
}

async function loadGameDetail(id) {
  try {
    setStatus("Cargando detalle…", true);
    const detail = await getGameDetail(id);
    renderDetail(detail);
    setStatus("", false);
  } catch (err) {
    console.error(err);
    setStatus("No se pudo cargar el detalle del juego.", true);
  }
}

searchBtn.addEventListener("click", async () => {
  const q = searchInput.value.trim();
  if (!q) return setStatus("Escribe el nombre de un videojuego.", true);

  try {
    setStatus("Buscando…", true);
    const results = await searchGames(q);
    renderResults(results);
  } catch (err) {
    console.error(err);
    setStatus("Error al buscar. Revisa tu API KEY o conexión.", true);
  }
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") searchBtn.click();
});
