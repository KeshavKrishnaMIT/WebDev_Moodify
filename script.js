// ================== BASIC DATA ==================
const MOODS = [
  { id: "happy", label: "Happy" },
  { id: "chill", label: "Chill" },
  { id: "energetic", label: "Energetic" },
  { id: "sad", label: "Sad" },
  { id: "focused", label: "Focused" }
];

const ACTIONS = ["music", "read", "write"];

// ================== PLAYLISTS (5 PER MOOD) ==================
const moodPlaylists = {
  happy: [
    { title: "Happy Hits!", url: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC" },
    { title: "Feel Good Vibes", url: "https://open.spotify.com/playlist/37i9dQZF1DWZKuerrwoAGz" },
    { title: "Bollywood Smiles", url: "https://open.spotify.com/playlist/1llkez7kiZtBeOw5UjFlJq" },
    { title: "Happy Vibes 2025", url: "https://open.spotify.com/playlist/3nqSOtEKpwMilRPdKxaEMk" },
    { title: "Smile Booster", url: "https://open.spotify.com/playlist/37i9dQZF1EIgG2NEOhqsD7" }
  ],
  chill: [
    { title: "Lo-Fi Beats", url: "https://open.spotify.com/playlist/37i9dQZF1DX2sUQwD7tbmL" },
    { title: "Chill Vibes", url: "https://open.spotify.com/playlist/37i9dQZF1DX889U0CL85jj" },
    { title: "Late Night Chill", url: "https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6" },
    { title: "Peaceful Piano", url: "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO" },
    { title: "Relax & Unwind", url: "https://open.spotify.com/playlist/37i9dQZF1DX9u7XXOp0l5L" }
  ],
  energetic: [
    { title: "Power Workout", url: "https://open.spotify.com/playlist/37i9dQZF1DX70RN3TfWWJh" },
    { title: "Beast Mode", url: "https://open.spotify.com/playlist/37i9dQZF1DX76t638V6CA8" },
    { title: "Gym Hits", url: "https://open.spotify.com/playlist/37i9dQZF1DWUSyphfcc6aL" },
    { title: "EDM Boost", url: "https://open.spotify.com/playlist/37i9dQZF1DX8tZsk68tuDw" },
    { title: "High Energy", url: "https://open.spotify.com/playlist/37i9dQZF1DWUVpAXiEPK8P" }
  ],
  sad: [
    { title: "Soft Comfort", url: "https://open.spotify.com/playlist/37i9dQZF1DXcCnTAt8CfNe" },
    { title: "Sad Indie", url: "https://open.spotify.com/playlist/37i9dQZF1DWVV27DiNWxkR" },
    { title: "Healing Time", url: "https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0" },
    { title: "Alone Again", url: "https://open.spotify.com/playlist/37i9dQZF1DX3YSRoSdA634" },
    { title: "Comfort & Calm", url: "https://open.spotify.com/playlist/37i9dQZF1DX7qK8ma5wgG1" }
  ],
  focused: [
    { title: "Deep Focus", url: "https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ" },
    { title: "Study Beats", url: "https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS" },
    { title: "Brain Food", url: "https://open.spotify.com/playlist/37i9dQZF1DWVRSukIED0e9" },
    { title: "Coding Mode", url: "https://open.spotify.com/playlist/37i9dQZF1DX3PFzdbtx1Us" },
    { title: "Deep Work", url: "https://open.spotify.com/playlist/37i9dQZF1DWZIOAPKUdaKS" }
  ]
};
const playlistIndexes = { happy:0, chill:0, energetic:0, sad:0, focused:0 };

// ================== READ POOLS (expanded, mood-specific, some API hints) ==================
const moodReadPools = {
  happy: [
    { type:'api', api:'joke', labelFallback:'Joke', localFallback:"Why did the scarecrow win an award? Because he was outstanding in his field." },
    { type:'local', label:'Happy Thought', text:"You don’t have to be perfect to be amazing." },
    { type:'local', label:'Mini Gratitude', text:"Name one small thing that made you smile today." },
    { type:'api', api:'quotable', labelFallback:'Quote', localFallback:"Happiness often sneaks in through a door you didn't know you left open. — John Barrymore" },
    { type:'local', label:'Tiny Challenge', text:"Send a short thank-you message to someone you appreciate." },
    { type:'local', label:'Fun Fact', text:"Listening to upbeat music can immediately lift your mood—2 songs, 5 minutes." },
    { type:'local', label:'Prompt', text:"Write 2 things you'd like to do this week that excite you." },
    { type:'local', label:'Smile Tip', text:"Take one silly selfie and keep it for later — small fun boosts matter." },
    { type:'api', api:'numbers', labelFallback:'Fun fact', localFallback:"Fun fact: small actions compound into bigger changes." },
    { type:'local', label:'Light Reminder', text:"Enjoy the small wins — coffee tasted good? that's a win." }
  ],
  chill: [
    { type:'api', api:'quotable', labelFallback:'Calm Quote', localFallback:"Breathe. You don't need to have answers right now." },
    { type:'local', label:'Breath Exercise', text:"Try: inhale 4s — hold 4s — exhale 6s. Repeat twice." },
    { type:'local', label:'Scenic Prompt', text:"Imagine a quiet shore. What do you hear? Describe in two lines." },
    { type:'local', label:'Calm Fact', text:"A 2-minute focus on breathing reduces stress markers." },
    { type:'local', label:'Gentle Task', text:"Put on comfortable music and stretch for 90 seconds." },
    { type:'api', api:'numbers', labelFallback:'Tiny Fact', localFallback:"Small pauses reset attention. Take one now." },
    { type:'local', label:'Mindful Prompt', text:"Notice three things in the room you didn't before." },
    { type:'api', api:'joke', labelFallback:'Light Joke', localFallback:"Why don't eggs tell jokes? They'd crack each other up." },
    { type:'local', label:'Reminder', text:"Doing less sometimes helps you do more later." },
    { type:'local', label:'Soft Tip', text:"Lower lights, dim devices, and take 5 minutes to breathe." }
  ],
  energetic: [
    { type:'api', api:'bored', labelFallback:'Mini Challenge', localFallback:"Do 20 squats or run on the spot for 30s." },
    { type:'local', label:'Hype Line', text:"You’ve already survived 100% of your worst days — go!" },
    { type:'local', label:'Quick Dare', text:"Set a 10-minute timer and attack one small task." },
    { type:'api', api:'quotable', labelFallback:'Motivation', localFallback:"Action is the antidote to doubt." },
    { type:'local', label:'Sport Fact', text:"Short high-intensity bursts boost mood and focus." },
    { type:'local', label:'Boost Tip', text:"Music + 2-minute warmup = instant energy." },
    { type:'local', label:'Micro-Goal', text:"Pick one task and commit 15 focused minutes." },
    { type:'api', api:'joke', labelFallback:'Light Joke', localFallback:"Why did the bicycle fall over? It was two-tired." },
    { type:'local', label:'Power Prompt', text:"Write the first step of a task — then start it." },
    { type:'local', label:'Quick Fact', text:"Standing while working for short periods can increase alertness." }
  ],
  sad: [
    { type:'api', api:'quotable', labelFallback:'Soft Quote', localFallback:"This too shall pass. One step at a time." },
    { type:'local', label:'It’s Okay', text:"You are allowed to rest. No pressure to 'fix' right now." },
    { type:'local', label:'Gentle Prompt', text:"Write one sentence: 'I feel...' — no solution needed." },
    { type:'local', label:'Comfort Line', text:"Small comforts count – a warm drink, soft music." },
    { type:'api', api:'joke', labelFallback:'Small smile', localFallback:"Tiny smile: Why was the math book sad? Too many problems." },
    { type:'local', label:'Tiny Hope', text:"Clarity comes slowly — allow small steps." },
    { type:'local', label:'Self-care Tip', text:"If possible, step outside for 5 minutes of fresh air." },
    { type:'local', label:'Grounding Prompt', text:"Name 3 things you can touch right now and describe them." },
    { type:'local', label:'Note', text:"You are doing your best; that's enough for today." },
    { type:'local', label:'Reach Out Tip', text:"If you can, message someone who makes you feel seen." }
  ],
  focused: [
    { type:'api', api:'numbers', labelFallback:'Focus Fact', localFallback:"Breaking work into chunks helps memory." },
    { type:'local', label:'Pomodoro Tip', text:"Set 25 minutes on, 5 minutes rest. Repeat." },
    { type:'local', label:'Warmup Prompt', text:"Write 3 tasks: one big, one medium, one tiny — do the tiny now." },
    { type:'local', label:'Desk Trick', text:"Clear visible clutter; keep only one window open." },
    { type:'api', api:'quotable', labelFallback:'Focus Quote', localFallback:"Small progress each day adds up." },
    { type:'local', label:'Water Reminder', text:"Grab water now — hydration helps focus." },
    { type:'local', label:'Micro Tip', text:"If stuck, open the folder/file you need — that small action helps." },
    { type:'local', label:'Time-box', text:"Work 15 minutes on one thing; don't multitask." },
    { type:'local', label:'Short Fact', text:"Music without lyrics can improve concentration for many tasks." },
    { type:'local', label:'Reset Prompt', text:"Close your eyes for 20s; visualise the next step clearly." }
  ]
};

// read history (recent indices) used to avoid repetition within window
const readHistory = { happy:[], chill:[], energetic:[], sad:[], focused:[] };

// ================== DOM REFS ==================
const moodRow = document.getElementById("moodRow");
const overlay = document.getElementById("moodOverlay");
const moodTitle = document.getElementById("moodTitle");
const actionsRow = document.getElementById("actionsRow");
const card = document.getElementById("screen");
const closeBtn = overlay.querySelector(".close-btn");
const navRight = document.querySelector(".nav-right");

// user state (keeps write/save feature working)
let currentMoodId = null;
let currentUser = localStorage.getItem('moodifyUser') || null;

// ================== NAV / USER UI ==================
function renderUserInNav() {
  if (!navRight) return;
  const existing = document.getElementById('userBlock') || navRight.querySelector('.login-link');
  if (existing) existing.remove();

  if (currentUser) {
    const wrap = document.createElement('div');
    wrap.id = 'userBlock';
    wrap.style.display = 'flex';
    wrap.style.alignItems = 'center';
    wrap.style.gap = '10px';
    wrap.innerHTML = `
      <span style="font-weight:700;color:#111">${escapeHtml(currentUser)}</span>
      <button id="logoutBtn" style="background:transparent;border:1px solid #e5e7eb;border-radius:8px;padding:6px 8px;cursor:pointer">Logout</button>
    `;
    navRight.appendChild(wrap);
    document.getElementById('logoutBtn').addEventListener('click', () => {
      localStorage.removeItem('moodifyUser');
      currentUser = null;
      renderUserInNav();
    });
  } else {
    const a = document.createElement('a');
    a.href = 'login.html';
    a.className = 'nav-link login-link';
    a.textContent = 'Login';
    navRight.appendChild(a);
  }
}

// ================== UTIL: pick next index avoiding recent window ==================
function pickNextReadIndex(mood) {
  const pool = moodReadPools[mood] || [];
  const n = pool.length;
  if (n === 0) return -1;

  // window size: ensure no repeat inside last WINDOW picks; user wants 15-20 cycles,
  // we'll use 15 as minimum window, but cannot exceed pool length.
  const WINDOW = Math.min(15, n);

  const recent = readHistory[mood] || [];
  const recentSet = new Set(recent.slice(-WINDOW));

  const candidates = [];
  for (let i = 0; i < n; i++) {
    if (!recentSet.has(i)) candidates.push(i);
  }

  // if no candidates left (rare), clear history and allow all
  if (candidates.length === 0) {
    readHistory[mood] = [];
    for (let i=0;i<n;i++) candidates.push(i);
  }

  const chosen = candidates[Math.floor(Math.random() * candidates.length)];
  // push chosen into history
  readHistory[mood] = readHistory[mood] || [];
  readHistory[mood].push(chosen);
  // To keep history bounded (avoid memory growth), keep last 50 entries max
  if (readHistory[mood].length > 50) readHistory[mood].shift();

  return chosen;
}

// ================== RENDER MOODS ==================
function renderMoodTiles() {
  if (!moodRow) return;
  moodRow.innerHTML = MOODS.map(m => `
    <button class="mood-tile ${m.id}" data-mood="${m.id}" type="button">
      <span class="mood-name">${m.label}</span>
    </button>
  `).join("");

  document.querySelectorAll(".mood-tile").forEach(tile => {
    tile.addEventListener("click", () => openMood(tile.dataset.mood));
  });
}

// ================== OPEN MOOD ==================
function openMood(moodId) {
  currentMoodId = moodId;
  overlay.className = "mood-overlay " + moodId;
  moodTitle.textContent = capitalize(moodId);

  card.innerHTML = `
    <h3 class="card-title">${capitalize(moodId)} – Choose an action</h3>
  `;

  actionsRow.innerHTML = ACTIONS.map(a => `
    <button class="action-pill" data-action="${a}" type="button">${capitalize(a)}</button>
  `).join("");

  actionsRow.querySelectorAll(".action-pill").forEach(btn => {
    btn.addEventListener("click", () => handleActionClick(btn.dataset.action));
  });

  overlay.classList.add("is-open");
}

// ================== HANDLE ACTION ==================
function handleActionClick(actionId) {
  if (!currentMoodId) return;
  if (actionId === "music") { showNextPlaylist(); return; }
  if (actionId === "read") { showNextRead(); return; }
  if (actionId === "write") { showWritePad(); return; }
}

// ================== MUSIC ==================
function showNextPlaylist() {
  const list = moodPlaylists[currentMoodId];
  if (!list || !list.length) {
    card.innerHTML = `<p class="card-text">No playlists found for this mood yet.</p>`;
    return;
  }
  let index = playlistIndexes[currentMoodId] || 0;
  const playlist = list[index];
  playlistIndexes[currentMoodId] = (index + 1) % list.length;

  card.innerHTML = `
    <h3 class="card-title">${capitalize(currentMoodId)} – Music</h3>
    <p class="card-text">
      <a href="${playlist.url}" target="_blank" rel="noopener">${escapeHtml(playlist.title)}</a>
    </p>
    <button class="refresh-btn" id="refreshMusic">🔄 Refresh Music</button>
  `;
  const btn = document.getElementById("refreshMusic");
  if (btn) btn.onclick = showNextPlaylist;
}

// ================== READ (history-window, API attempts, fallback) ==================
async function showNextRead() {
  if (!currentMoodId) return;
  const mood = currentMoodId;

  const pool = moodReadPools[mood] || [];
  if (pool.length === 0) {
    card.innerHTML = `
      <h3 class="card-title">${capitalize(mood)} – Read</h3>
      <p class="card-text">No reading content for this mood yet.</p>
    `;
    return;
  }

  // pick index avoiding recent WINDOW
  const idx = pickNextReadIndex(mood);
  if (idx < 0) {
    card.innerHTML = `<p class="card-text">No content available.</p>`;
    return;
  }
  const item = pool[idx];

  // show loading UI
  card.innerHTML = `
    <h3 class="card-title">${capitalize(mood)} – Read</h3>
    <p class="card-text">Loading something for your mood...</p>
  `;

  function renderRead(label, text) {
    card.innerHTML = `
      <h3 class="card-title">${capitalize(mood)} – Read</h3>
      <p class="card-text">
        <strong>${escapeHtml(label)}</strong><br><br>${escapeHtml(text)}
      </p>
      <button class="refresh-btn" id="refreshRead">🔄 Refresh Read</button>
    `;
    const btn = document.getElementById("refreshRead");
    if (btn) btn.onclick = showNextRead;
  }

  // local item
  if (!item || item.type === 'local') {
    const label = item ? (item.label || 'Note') : 'Note';
    const text = item ? (item.text || '') : '';
    renderRead(label, text);
    return;
  }

  // API item: try fetching, fallback to provided text
  if (item.type === 'api') {
    try {
      if (item.api === 'joke') {
        const res = await fetch("https://v2.jokeapi.dev/joke/Any?type=single&safe-mode");
        if (!res.ok) throw new Error('joke fail');
        const data = await res.json();
        if (data && data.joke) { renderRead(item.labelFallback || 'Joke', data.joke); return; }
      } else if (item.api === 'quotable') {
        const res = await fetch("https://api.quotable.io/random");
        if (!res.ok) throw new Error('quote fail');
        const d = await res.json();
        if (d && d.content) { renderRead(item.labelFallback || 'Quote', `"${d.content}" — ${d.author||'Unknown'}`); return; }
      } else if (item.api === 'bored') {
        const res = await fetch("https://www.boredapi.com/api/activity");
        if (!res.ok) throw new Error('bored fail');
        const d = await res.json();
        if (d && d.activity) { renderRead(item.labelFallback || 'Mini Challenge', d.activity); return; }
      } else if (item.api === 'numbers') {
        const res = await fetch("https://numbersapi.com/random/trivia?json");
        if (!res.ok) throw new Error('numbers fail');
        const d = await res.json();
        if (d && d.text) { renderRead(item.labelFallback || 'Fact', d.text); return; }
      }
      // fallback
      renderRead(item.labelFallback || 'Note', item.localFallback || 'Try again later.');
    } catch (err) {
      renderRead(item.labelFallback || 'Note', item.localFallback || 'Connection issue — try again.');
    }
    return;
  }

  // default fallback
  renderRead('Note', 'No content available.');
}

// ================== WRITE (notepad saved locally per user) ==================
function showWritePad() {
  const notes = loadNotesForUser();
  card.innerHTML = `
    <h3 class="card-title">${capitalize(currentMoodId)} – Write</h3>
    <p class="card-text">Write anything you want. Saved locally per user with date & time.</p>
    <textarea id="moodNote" rows="6" style="width:100%;border-radius:12px;border:1px solid #d1d5db;padding:10px;font-family:inherit;resize:vertical" placeholder="Type your thoughts here..."></textarea>
    <div style="margin-top:10px;display:flex;gap:8px">
      <button id="saveNote" style="padding:8px 12px;border-radius:10px;background:#111827;color:#fff;border:0;cursor:pointer">Save Note</button>
      <button id="clearNote" style="padding:8px 12px;border-radius:10px;border:1px solid #e5e7eb;background:transparent;cursor:pointer">Clear</button>
    </div>
    <div id="notesList" style="margin-top:16px"></div>
  `;
  document.getElementById('saveNote').addEventListener('click', saveCurrentNote);
  document.getElementById('clearNote').addEventListener('click', () => { const t = document.getElementById('moodNote'); if (t) t.value = ''; });
  renderNotesList(notes);
}

function saveCurrentNote() {
  const ta = document.getElementById('moodNote');
  const txt = (ta && ta.value) ? ta.value.trim() : '';
  if (!currentUser) {
    alert('Please login first. Redirecting to login page.');
    location.href = 'login.html';
    return;
  }
  if (!txt) {
    alert('Write something before saving.');
    return;
  }
  const notes = loadNotesForUser();
  const now = new Date();
  const item = { text: txt, mood: currentMoodId, datetime: now.toISOString() };
  notes.unshift(item);
  localStorage.setItem('moodify_notes_' + currentUser, JSON.stringify(notes));
  if (ta) ta.value = '';
  renderNotesList(notes);
}

function loadNotesForUser() {
  if (!currentUser) return [];
  try {
    const raw = localStorage.getItem('moodify_notes_' + currentUser);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function renderNotesList(notes) {
  const list = document.getElementById('notesList');
  if (!list) return;
  if (!notes.length) {
    list.innerHTML = '<p style="color:#6b7280">No saved notes yet.</p>';
    return;
  }
  list.innerHTML = notes.map((n, i) => {
    const dt = new Date(n.datetime);
    const when = dt.toLocaleString();
    return `
      <div style="background:#fff;border-radius:10px;padding:10px;margin-bottom:10px;border:1px solid #eee">
        <div style="display:flex;justify-content:space-between;gap:8px;align-items:center">
          <strong style="font-size:0.96rem">${escapeHtml(capitalize(n.mood))}</strong>
          <div style="font-size:0.82rem;color:#6b7280">${escapeHtml(when)}</div>
        </div>
        <div style="margin-top:8px;color:#111">${escapeHtml(n.text)}</div>
        <div style="margin-top:8px;text-align:right">
          <button data-index="${i}" class="delete-note" style="padding:6px 8px;border-radius:8px;border:1px solid #e5e7eb;background:transparent;cursor:pointer">Delete</button>
        </div>
      </div>
    `;
  }).join('');
  document.querySelectorAll('.delete-note').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = Number(e.currentTarget.dataset.index);
      confirmDeleteNote(idx);
    });
  });
}

function confirmDeleteNote(idx) {
  if (!currentUser) return;
  const notes = loadNotesForUser();
  if (!notes[idx]) return;
  if (!confirm('Delete this note?')) return;
  notes.splice(idx, 1);
  localStorage.setItem('moodify_notes_' + currentUser, JSON.stringify(notes));
  renderNotesList(notes);
}

// ================== HELPERS ==================
function capitalize(s){ return String(s || '').charAt(0).toUpperCase() + String(s || '').slice(1); }
function escapeHtml(s){ return String(s || '').replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[c]); }

// ================== OVERLAY CLOSE / INIT ==================
function closeOverlay() { overlay.classList.remove('is-open'); currentMoodId = null; }
closeBtn.addEventListener('click', closeOverlay);
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeOverlay(); });

// init
currentUser = localStorage.getItem('moodifyUser') || null;
renderUserInNav();
renderMoodTiles();
