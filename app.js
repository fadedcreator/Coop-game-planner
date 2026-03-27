/* ═══════════════════════════════════════════════════════════
   CONSTANTS & DEFAULTS
═══════════════════════════════════════════════════════════ */

const STORAGE_KEY = 'coop-game-planner-v3';

// 53 co-op games (local or online). All Steam portrait covers (library_600x900).
// Falls back to gradient placeholder on onerror.
const DEFAULT_GAMES = [
  // ── Finished ─────────────────────────────────────────────────
  { id: 1,  title: 'It Takes Two',                    platform: 'PC', status: 'Finished',     rating: 5, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1426210/library_600x900.jpg', dateAdded: '2023-01-10T00:00:00.000Z' },
  { id: 2,  title: 'Portal 2',                        platform: 'PC', status: 'Finished',     rating: 5, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/620/library_600x900.jpg',     dateAdded: '2023-01-18T00:00:00.000Z' },
  { id: 3,  title: 'A Way Out',                       platform: 'PC', status: 'Finished',     rating: 4, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1222700/library_600x900.jpg', dateAdded: '2023-02-05T00:00:00.000Z' },
  { id: 4,  title: 'Unravel Two',                     platform: 'PC', status: 'Finished',     rating: 4, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1107970/library_600x900.jpg', dateAdded: '2023-02-20T00:00:00.000Z' },
  { id: 5,  title: 'Castle Crashers Remastered',      platform: 'PC', status: 'Finished',     rating: 4, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1997580/library_600x900.jpg', dateAdded: '2023-03-08T00:00:00.000Z' },
  { id: 6,  title: 'Battleblock Theater',             platform: 'PC', status: 'Finished',     rating: 3, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/238460/library_600x900.jpg',  dateAdded: '2023-03-22T00:00:00.000Z' },

  // ── Playing ──────────────────────────────────────────────────
  { id: 7,  title: 'Baldur\'s Gate 3',                platform: 'PC', status: 'Playing',      rating: 5, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/library_600x900.jpg', dateAdded: '2023-04-01T00:00:00.000Z' },
  { id: 8,  title: 'Cuphead',                         platform: 'PC', status: 'Playing',      rating: 4, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/268910/library_600x900.jpg',  dateAdded: '2023-04-14T00:00:00.000Z' },
  { id: 9,  title: 'Halo: The Master Chief Collection',platform: 'PC', status: 'Playing',     rating: 4, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/976730/library_600x900.jpg',  dateAdded: '2023-04-28T00:00:00.000Z' },
  { id: 10, title: 'Stardew Valley',                  platform: 'PC', status: 'Playing',      rating: 4, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/413150/library_600x900.jpg',  dateAdded: '2023-05-10T00:00:00.000Z' },
  { id: 11, title: 'Minecraft',                       platform: 'PC', status: 'Playing',      rating: 3, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2987080/library_600x900.jpg', dateAdded: '2023-05-22T00:00:00.000Z' },

  // ── Want to Play ─────────────────────────────────────────────
  { id: 12, title: 'Left 4 Dead 2',                   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/550/library_600x900.jpg',      dateAdded: '2023-06-01T00:00:00.000Z' },
  { id: 13, title: 'Deep Rock Galactic',               platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/548430/library_600x900.jpg',  dateAdded: '2023-06-05T00:00:00.000Z' },
  { id: 14, title: 'Valheim',                          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/892970/library_600x900.jpg',  dateAdded: '2023-06-09T00:00:00.000Z' },
  { id: 15, title: 'Divinity: Original Sin 2',         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/435150/library_600x900.jpg',  dateAdded: '2023-06-13T00:00:00.000Z' },
  { id: 16, title: 'Monster Hunter: World',            platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/582010/library_600x900.jpg',  dateAdded: '2023-06-17T00:00:00.000Z' },
  { id: 17, title: 'Back 4 Blood',                     platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/924970/library_600x900.jpg',  dateAdded: '2023-06-21T00:00:00.000Z' },
  { id: 18, title: 'Warhammer: Vermintide 2',          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/552500/library_600x900.jpg',  dateAdded: '2023-06-25T00:00:00.000Z' },
  { id: 19, title: 'Sea of Thieves',                   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1172620/library_600x900.jpg', dateAdded: '2023-06-29T00:00:00.000Z' },
  { id: 20, title: 'Don\'t Starve Together',           platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/322330/library_600x900.jpg',  dateAdded: '2023-07-03T00:00:00.000Z' },
  { id: 21, title: 'Terraria',                         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/105600/library_600x900.jpg',  dateAdded: '2023-07-07T00:00:00.000Z' },
  { id: 22, title: 'Risk of Rain 2',                   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/632360/library_600x900.jpg',  dateAdded: '2023-07-11T00:00:00.000Z' },
  { id: 23, title: 'Overcooked! 2',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/728880/library_600x900.jpg',  dateAdded: '2023-07-15T00:00:00.000Z' },
  { id: 24, title: 'Human Fall Flat',                  platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/477160/library_600x900.jpg',  dateAdded: '2023-07-19T00:00:00.000Z' },
  { id: 25, title: 'Grounded',                         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/962130/library_600x900.jpg',  dateAdded: '2023-07-23T00:00:00.000Z' },
  { id: 26, title: 'Phasmophobia',                     platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/739630/library_600x900.jpg',  dateAdded: '2023-07-27T00:00:00.000Z' },
  { id: 27, title: 'Warhammer 40K: Darktide',          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1361210/library_600x900.jpg', dateAdded: '2023-07-31T00:00:00.000Z' },
  { id: 28, title: 'Remnant II',                       platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1282100/library_600x900.jpg', dateAdded: '2023-08-04T00:00:00.000Z' },
  { id: 29, title: 'The Forest',                       platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/242760/library_600x900.jpg',  dateAdded: '2023-08-08T00:00:00.000Z' },
  { id: 30, title: 'Sons of the Forest',               platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1326470/library_600x900.jpg', dateAdded: '2023-08-12T00:00:00.000Z' },
  { id: 31, title: 'Golf With Your Friends',           platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/431240/library_600x900.jpg',  dateAdded: '2023-08-16T00:00:00.000Z' },
  { id: 32, title: 'Among Us',                         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/945360/library_600x900.jpg',  dateAdded: '2023-08-20T00:00:00.000Z' },
  { id: 33, title: 'No Man\'s Sky',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/275850/library_600x900.jpg',  dateAdded: '2023-08-24T00:00:00.000Z' },
  { id: 34, title: 'Astroneer',                        platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/361420/library_600x900.jpg',  dateAdded: '2023-08-28T00:00:00.000Z' },
  { id: 35, title: 'Raft',                             platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/648800/library_600x900.jpg',  dateAdded: '2023-09-01T00:00:00.000Z' },
  { id: 36, title: 'Keep Talking and Nobody Explodes', platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/341800/library_600x900.jpg',  dateAdded: '2023-09-05T00:00:00.000Z' },
  { id: 37, title: 'Moving Out',                       platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/996770/library_600x900.jpg',  dateAdded: '2023-09-09T00:00:00.000Z' },
  { id: 38, title: 'Borderlands 3',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/397540/library_600x900.jpg',  dateAdded: '2023-09-13T00:00:00.000Z' },
  { id: 39, title: 'Dying Light',                      platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/239140/library_600x900.jpg',  dateAdded: '2023-09-17T00:00:00.000Z' },
  { id: 40, title: 'Lovers in a Dangerous Spacetime',  platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/252110/library_600x900.jpg',  dateAdded: '2023-09-21T00:00:00.000Z' },
  { id: 41, title: 'Trine 4: The Nightmare Prince',    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1000310/library_600x900.jpg', dateAdded: '2023-09-25T00:00:00.000Z' },
  { id: 42, title: 'Pummel Party',                     platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/880940/library_600x900.jpg',  dateAdded: '2023-09-29T00:00:00.000Z' },
  { id: 43, title: 'Destiny 2',                        platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1085660/library_600x900.jpg', dateAdded: '2023-10-03T00:00:00.000Z' },
  { id: 44, title: 'Warframe',                         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/230410/library_600x900.jpg',  dateAdded: '2023-10-07T00:00:00.000Z' },
  { id: 45, title: 'Overwatch 2',                      platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2357570/library_600x900.jpg', dateAdded: '2023-10-11T00:00:00.000Z' },
  { id: 46, title: 'The Division 2',                   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/704030/library_600x900.jpg',  dateAdded: '2023-10-15T00:00:00.000Z' },
  { id: 47, title: 'Rocket League',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/252950/library_600x900.jpg',  dateAdded: '2023-10-19T00:00:00.000Z' },
  { id: 48, title: 'Apex Legends',                     platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1172470/library_600x900.jpg', dateAdded: '2023-10-23T00:00:00.000Z' },
  { id: 49, title: 'Rainbow Six Siege',                platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/359550/library_600x900.jpg',  dateAdded: '2023-10-27T00:00:00.000Z' },
  { id: 50, title: 'Dying Light 2',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/534380/library_600x900.jpg',  dateAdded: '2023-10-31T00:00:00.000Z' },
  { id: 51, title: 'Remnant: From the Ashes',          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/617290/library_600x900.jpg',  dateAdded: '2023-11-04T00:00:00.000Z' },
  { id: 52, title: 'Path of Exile',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/238960/library_600x900.jpg',  dateAdded: '2023-11-08T00:00:00.000Z' },
  { id: 53, title: 'Borderlands 2',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/49520/library_600x900.jpg',   dateAdded: '2023-11-12T00:00:00.000Z' },
];

/* ═══════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════ */

const state = {
  games: [],
  filter: 'all',      // 'all' | 'Want to Play' | 'Playing' | 'Finished'
  sort:   'date',     // 'date' | 'az' | 'status' | 'rating'
  addStatus: 'Want to Play',
  addRating: 0,
  addCover: '',
  editId: null,
  detailId: null,
  deleteId: null,
  pickGame: null,
};

/* ═══════════════════════════════════════════════════════════
   STORAGE
═══════════════════════════════════════════════════════════ */

function loadGames() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      state.games = JSON.parse(raw);
      return;
    }
  } catch (_) {}
  state.games = DEFAULT_GAMES.map(g => ({ ...g }));
}

function saveGames() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.games));
  } catch (_) {}
}

/* ═══════════════════════════════════════════════════════════
   UTILITY
═══════════════════════════════════════════════════════════ */

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function statusClass(status) {
  if (status === 'Want to Play') return 'want';
  if (status === 'Playing')      return 'play';
  if (status === 'Finished')     return 'done';
  return '';
}


/* ═══════════════════════════════════════════════════════════
   RENDER — CARD STARS
═══════════════════════════════════════════════════════════ */

function cardStarsHtml(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="${i <= rating ? 'card-star-on' : 'card-star-off'}">★</span>`;
  }
  return html;
}

function detailStarsHtml(rating) {
  if (!rating) return '<span class="snone">Not rated yet</span>';
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="${i <= rating ? 'son' : 'soff'}">★</span>`;
  }
  return html;
}

/* ═══════════════════════════════════════════════════════════
   RENDER — GAME CARD
═══════════════════════════════════════════════════════════ */

function renderCard(game) {
  const sc = statusClass(game.status);
  const hasCover = !!game.cover;

  // When onerror fires, hide the img and un-hide the sibling .card-no-cover
  const imgOnerror = `this.style.display='none';this.nextElementSibling.style.display='flex'`;

  return `
    <div class="game-card" data-id="${game.id}">
      ${hasCover ? `
        <img class="card-cover" src="${esc(game.cover)}" alt="${esc(game.title)}"
             loading="lazy" draggable="false"
             onerror="${imgOnerror}" />
        <div class="card-no-cover" style="display:none">
          <span class="card-no-cover-title">${esc(game.title)}</span>
        </div>
      ` : `
        <div class="card-no-cover">
          <span class="card-no-cover-title">${esc(game.title)}</span>
        </div>
      `}
      <div class="card-gradient"></div>
      <button class="card-remove" data-remove-id="${game.id}" title="Remove game" aria-label="Remove ${esc(game.title)}">×</button>
      <div class="card-badge ${sc}">${esc(game.status)}</div>
      ${game.rating ? `<div class="card-stars">${cardStarsHtml(game.rating)}</div>` : ''}
    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════
   RENDER — MAIN GRID
═══════════════════════════════════════════════════════════ */

function getDisplayGames() {
  let list = [...state.games];

  // Filter
  if (state.filter !== 'all') {
    list = list.filter(g => g.status === state.filter);
  }

  // Sort
  switch (state.sort) {
    case 'date':
      list.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
      break;
    case 'az':
      list.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'status': {
      const order = { 'Want to Play': 0, 'Playing': 1, 'Finished': 2 };
      list.sort((a, b) => order[a.status] - order[b.status]);
      break;
    }
    case 'rating':
      list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
  }

  return list;
}

function render() {
  const games = getDisplayGames();

  // Update filter pill counts
  const counts = {
    all: state.games.length,
    'Want to Play': state.games.filter(g => g.status === 'Want to Play').length,
    Playing:        state.games.filter(g => g.status === 'Playing').length,
    Finished:       state.games.filter(g => g.status === 'Finished').length,
  };
  document.getElementById('count-all').textContent     = counts.all;
  document.getElementById('count-want').textContent    = counts['Want to Play'];
  document.getElementById('count-playing').textContent = counts.Playing;
  document.getElementById('count-finished').textContent= counts.Finished;

  const grid  = document.getElementById('game-grid');
  const empty = document.getElementById('empty-state');

  if (games.length === 0) {
    grid.innerHTML = '';
    empty.classList.add('visible');
    const sub = document.getElementById('empty-sub');
    if (sub) {
      sub.textContent = state.filter === 'all'
        ? 'Add your first game to get started'
        : `No games with status "${state.filter}"`;
    }
  } else {
    grid.innerHTML = games.map(renderCard).join('');
    empty.classList.remove('visible');
  }
}

/* ═══════════════════════════════════════════════════════════
   MODAL HELPERS
═══════════════════════════════════════════════════════════ */

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}

/* ═══════════════════════════════════════════════════════════
   ADD / EDIT MODAL
═══════════════════════════════════════════════════════════ */

function openAddModal(prefill = null) {
  state.editId = null;
  state.addCover = prefill?.cover || '';

  document.getElementById('modal-add-heading').textContent = 'Add Game';
  document.getElementById('game-title').value    = prefill?.title    || '';
  document.getElementById('game-platform').value = prefill?.platform || '';

  setAddStatus('Want to Play');
  setAddRating(0);
  showCoverPreview(state.addCover);

  openModal('modal-add');
  setTimeout(() => document.getElementById('game-title').focus(), 60);
}

function openEditModal(game) {
  state.editId = game.id;
  state.addCover = game.cover || '';

  document.getElementById('modal-add-heading').textContent = 'Edit Game';
  document.getElementById('game-title').value    = game.title    || '';
  document.getElementById('game-platform').value = game.platform || '';

  setAddStatus(game.status || 'Want to Play');
  setAddRating(game.rating || 0);
  showCoverPreview(state.addCover);

  openModal('modal-add');
  setTimeout(() => document.getElementById('game-title').focus(), 60);
}

function setAddStatus(status) {
  state.addStatus = status;
  document.querySelectorAll('#add-status-toggle .status-opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.status === status);
  });
}

function setAddRating(value) {
  state.addRating = value;
  document.querySelectorAll('#add-star-input .star-btn').forEach(s => {
    s.classList.toggle('active', parseInt(s.dataset.val) <= value);
  });
  const clearBtn = document.getElementById('star-clear-btn');
  if (clearBtn) clearBtn.classList.toggle('hidden', value === 0);
}

function showCoverPreview(url) {
  const found  = document.getElementById('cover-auto-found');
  const status = document.getElementById('cover-auto-status');
  const img    = document.getElementById('cover-auto-img');
  if (url) {
    found.style.display  = 'flex';
    status.style.display = 'none';
    img.src = url;
    img.onerror = () => {
      state.addCover = '';
      found.style.display  = 'none';
      status.style.display = '';
      status.textContent   = 'Cover failed to load';
    };
  } else {
    found.style.display  = 'none';
    status.style.display = '';
    status.textContent   = 'Type a title above to fetch cover art';
  }
}

function showCoverStatus(text) {
  document.getElementById('cover-auto-found').style.display  = 'none';
  document.getElementById('cover-auto-status').style.display = '';
  document.getElementById('cover-auto-status').textContent   = text;
}

function clearAddCover() {
  state.addCover = '';
  showCoverPreview('');
}

let coverSearchTimer = null;
let coverSearchId    = 0;

function scheduleCoverSearch() {
  clearTimeout(coverSearchTimer);
  const title = document.getElementById('game-title').value.trim();
  if (!title) { clearAddCover(); return; }
  showCoverStatus('Searching Steam…');
  coverSearchTimer = setTimeout(() => doFetchCover(title), 600);
}

async function doFetchCover(title) {
  const id  = ++coverSearchId;
  const url = await fetchSteamCover(title);
  if (id !== coverSearchId) return; // stale response
  if (url) {
    state.addCover = url;
    showCoverPreview(url);
  } else {
    state.addCover = '';
    showCoverStatus('No cover found on Steam');
  }
}

async function fetchSteamCover(title) {
  try {
    const res  = await fetch(
      `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(title)}&l=en&cc=US`
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.items || !data.items.length) return null;
    return `https://cdn.akamai.steamstatic.com/steam/apps/${data.items[0].id}/library_600x900.jpg`;
  } catch {
    return null;
  }
}

function saveGame() {
  const title = document.getElementById('game-title').value.trim();
  if (!title) {
    document.getElementById('game-title').focus();
    document.getElementById('game-title').style.borderColor = '#f87171';
    setTimeout(() => document.getElementById('game-title').style.borderColor = '', 1500);
    return;
  }

  const data = {
    title,
    platform: document.getElementById('game-platform').value,
    status:   state.addStatus,
    rating:   state.addRating,
    cover:    state.addCover,
  };

  if (state.editId) {
    const idx = state.games.findIndex(g => g.id === state.editId);
    if (idx !== -1) {
      state.games[idx] = { ...state.games[idx], ...data };
    }
  } else {
    state.games.unshift({
      id: Date.now(),
      dateAdded: new Date().toISOString(),
      ...data,
    });
  }

  saveGames();
  render();
  closeModal('modal-add');
}

/* ═══════════════════════════════════════════════════════════
   DETAIL MODAL
═══════════════════════════════════════════════════════════ */

function openDetailModal(gameId) {
  const game = state.games.find(g => g.id === gameId);
  if (!game) return;
  state.detailId = gameId;

  const img         = document.getElementById('detail-img');
  const fallback    = document.getElementById('detail-fallback');
  const titleEl     = document.getElementById('detail-title');
  const platformEl  = document.getElementById('detail-platform');
  const statusEl    = document.getElementById('detail-status-badge');
  const starsEl     = document.getElementById('detail-stars');

  // Cover
  if (game.cover) {
    img.src = game.cover;
    img.alt = game.title;
    img.style.display = 'block';
    fallback.style.display = 'none';
    img.onerror = () => {
      img.style.display = 'none';
      fallback.style.display = 'flex';
    };
  } else {
    img.style.display = 'none';
    fallback.style.display = 'flex';
  }

  titleEl.textContent    = game.title;
  platformEl.textContent = game.platform || '';

  const sc = statusClass(game.status);
  statusEl.className   = `detail-status-badge ${sc}`;
  statusEl.innerHTML   = `<span class="status-dot"></span>${esc(game.status)}`;

  starsEl.innerHTML = detailStarsHtml(game.rating);

  openModal('modal-detail');
}

/* ═══════════════════════════════════════════════════════════
   PICK TONIGHT
═══════════════════════════════════════════════════════════ */

function pickRandomGame() {
  const pool = state.games.filter(g => g.status === 'Want to Play');
  if (!pool.length) return null;
  // Avoid re-picking the same game when possible
  const others = state.pickGame ? pool.filter(g => g.id !== state.pickGame.id) : pool;
  const candidates = others.length ? others : pool;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function showPickGame(game) {
  state.pickGame = game;

  const img      = document.getElementById('pick-img');
  const fallback = document.getElementById('pick-fallback');
  const titleEl  = document.getElementById('pick-title');
  const platEl   = document.getElementById('pick-platform');

  if (game.cover) {
    img.src = game.cover;
    img.alt = game.title;
    img.style.display = 'block';
    fallback.style.display = 'none';
    img.onerror = () => {
      img.style.display = 'none';
      fallback.style.display = 'flex';
    };
  } else {
    img.style.display = 'none';
    fallback.style.display = 'flex';
  }

  titleEl.textContent = game.title;
  platEl.textContent  = game.platform || '';
}

function pickTonight() {
  const game = pickRandomGame();
  const bodyEl = document.getElementById('pick-body');
  const emptyEl = document.getElementById('pick-empty');

  if (!game) {
    bodyEl.style.display  = 'none';
    emptyEl.style.display = 'block';
  } else {
    bodyEl.style.display  = 'flex';
    emptyEl.style.display = 'none';
    showPickGame(game);
  }

  openModal('modal-pick');
}

/* ═══════════════════════════════════════════════════════════
   DELETE
═══════════════════════════════════════════════════════════ */

function openDeleteModal(gameId) {
  const game = state.games.find(g => g.id === gameId);
  if (!game) return;
  state.deleteId = gameId;
  document.getElementById('delete-name').textContent = game.title;
  openModal('modal-delete');
}

function confirmDelete() {
  if (!state.deleteId) return;
  state.games = state.games.filter(g => g.id !== state.deleteId);
  state.deleteId = null;
  saveGames();
  render();
  closeModal('modal-delete');
  closeModal('modal-detail');
}

/* ═══════════════════════════════════════════════════════════
   BROWSE CATALOG
═══════════════════════════════════════════════════════════ */

function openSearchModal() {
  const searchInput = document.getElementById('catalog-search');
  if (searchInput) searchInput.value = '';
  renderCatalog('');
  openModal('modal-search');
  setTimeout(() => { if (searchInput) searchInput.focus(); }, 80);
}

function getCatalogGames(query) {
  const libraryTitles = new Set(state.games.map(g => g.title.toLowerCase()));
  let catalog = DEFAULT_GAMES.filter(g => !libraryTitles.has(g.title.toLowerCase()));
  if (query) {
    const q = query.toLowerCase();
    catalog = catalog.filter(g => g.title.toLowerCase().includes(q));
  }
  return catalog;
}

function renderCatalog(query) {
  const grid  = document.getElementById('catalog-grid');
  const games = getCatalogGames(query);

  if (games.length === 0) {
    grid.innerHTML = `<div class="catalog-empty">${
      query
        ? 'No games match your search'
        : 'All catalog games are already in your library!'
    }</div>`;
    return;
  }

  grid.innerHTML = games.map(g => `
    <div class="catalog-card">
      <div class="catalog-cover-wrap">
        <img class="catalog-cover-img" src="${esc(g.cover)}" alt="${esc(g.title)}"
             loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
        <div class="catalog-no-cover" style="display:none">
          <span class="catalog-no-cover-title">${esc(g.title)}</span>
        </div>
      </div>
      <div class="catalog-card-foot">
        <span class="catalog-card-title">${esc(g.title)}</span>
        <button class="catalog-add-btn" data-catalog-id="${g.id}">+ Add</button>
      </div>
    </div>
  `).join('');
}

function addFromCatalog(defaultId) {
  const def = DEFAULT_GAMES.find(g => g.id === defaultId);
  if (!def) return;

  const alreadyIn = state.games.some(g => g.title.toLowerCase() === def.title.toLowerCase());
  if (alreadyIn) return;

  state.games.unshift({
    ...def,
    id:        Date.now(),
    status:    'Want to Play',
    rating:    0,
    dateAdded: new Date().toISOString(),
  });
  saveGames();
  render();

  // Fade the card out then re-check if catalog is empty
  const btn = document.querySelector(`[data-catalog-id="${defaultId}"]`);
  if (btn) {
    const card = btn.closest('.catalog-card');
    if (card) {
      card.style.transition = 'opacity 0.22s, transform 0.22s';
      card.style.opacity    = '0';
      card.style.transform  = 'scale(0.88)';
      setTimeout(() => {
        card.remove();
        const q = document.getElementById('catalog-search')?.value?.trim() || '';
        if (getCatalogGames(q).length === 0) {
          document.getElementById('catalog-grid').innerHTML =
            `<div class="catalog-empty">All catalog games are already in your library!</div>`;
        }
      }, 240);
    }
  }
}

/* ═══════════════════════════════════════════════════════════
   EVENT WIRING
═══════════════════════════════════════════════════════════ */

function setupEvents() {

  /* ── Header buttons ─────────────────────────────────────── */
  document.getElementById('btn-add').addEventListener('click', () => openAddModal());
  document.getElementById('btn-pick').addEventListener('click', pickTonight);
  document.getElementById('btn-search').addEventListener('click', openSearchModal);

  /* ── Generic close buttons (data-close="modal-id") ─────── */
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.close));
  });

  /* ── Close modal by clicking backdrop ───────────────────── */
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  /* ── Escape key closes topmost open modal ───────────────── */
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const openModals = document.querySelectorAll('.modal-overlay.open');
    if (openModals.length) closeModal(openModals[openModals.length - 1].id);
  });

  /* ── Filter pills ───────────────────────────────────────── */
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filter = btn.dataset.filter;
      render();
    });
  });

  /* ── Sort pills ─────────────────────────────────────────── */
  document.querySelectorAll('.sort-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sort-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.sort = btn.dataset.sort;
      render();
    });
  });

  /* ── Game card click → detail modal (or remove button) ── */
  document.getElementById('game-grid').addEventListener('click', e => {
    // Remove button takes priority — goes straight to delete confirm
    const removeBtn = e.target.closest('.card-remove');
    if (removeBtn) {
      e.stopPropagation();
      openDeleteModal(Number(removeBtn.dataset.removeId));
      return;
    }
    const card = e.target.closest('.game-card');
    if (card) openDetailModal(Number(card.dataset.id));
  });

  /* ── Add modal: status toggle ───────────────────────────── */
  document.querySelectorAll('#add-status-toggle .status-opt').forEach(btn => {
    btn.addEventListener('click', () => setAddStatus(btn.dataset.status));
  });

  /* ── Add modal: star rating ─────────────────────────────── */
  const starInput = document.getElementById('add-star-input');
  starInput.querySelectorAll('.star-btn').forEach(star => {
    const val = parseInt(star.dataset.val);

    star.addEventListener('click', () => {
      setAddRating(val === state.addRating ? 0 : val);
    });
    star.addEventListener('mouseenter', () => {
      starInput.querySelectorAll('.star-btn').forEach(s => {
        s.classList.toggle('hovered', parseInt(s.dataset.val) <= val);
      });
    });
    star.addEventListener('mouseleave', () => {
      starInput.querySelectorAll('.star-btn').forEach(s => s.classList.remove('hovered'));
    });
  });

  document.getElementById('star-clear-btn').addEventListener('click', () => setAddRating(0));

  /* ── Add modal: Steam cover auto-fetch ──────────────────── */
  document.getElementById('game-title').addEventListener('input', scheduleCoverSearch);
  document.getElementById('btn-clear-cover').addEventListener('click', clearAddCover);

  /* ── Add modal: save ────────────────────────────────────── */
  document.getElementById('btn-save-game').addEventListener('click', saveGame);
  document.getElementById('game-title').addEventListener('keydown', e => {
    if (e.key === 'Enter') saveGame();
  });

  /* ── Detail modal: edit / delete ───────────────────────── */
  document.getElementById('btn-detail-edit').addEventListener('click', () => {
    const game = state.games.find(g => g.id === state.detailId);
    if (!game) return;
    closeModal('modal-detail');
    setTimeout(() => openEditModal(game), 80);
  });

  document.getElementById('btn-detail-delete').addEventListener('click', () => {
    closeModal('modal-detail');
    setTimeout(() => openDeleteModal(state.detailId), 80);
  });

  /* ── Delete confirm ─────────────────────────────────────── */
  document.getElementById('btn-confirm-delete').addEventListener('click', confirmDelete);

  /* ── Pick Tonight: pick again ───────────────────────────── */
  document.getElementById('btn-pick-again').addEventListener('click', () => {
    const game = pickRandomGame();
    if (game) showPickGame(game);
  });

  /* ── Catalog: filter input ───────────────────────────────── */
  document.getElementById('catalog-search').addEventListener('input', e => {
    renderCatalog(e.target.value.trim());
  });

  /* ── Catalog: add button click ───────────────────────────── */
  document.getElementById('catalog-grid').addEventListener('click', e => {
    const btn = e.target.closest('.catalog-add-btn');
    if (btn) addFromCatalog(Number(btn.dataset.catalogId));
  });
}

/* ═══════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════ */

loadGames();
setupEvents();
render();
