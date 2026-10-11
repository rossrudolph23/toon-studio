// Toon Studio: the app's "body" (Step 1). No passcode, by Ross's choice.
// Everything is saved in this browser's local storage, on this device only.

const $ = id => document.getElementById(id);
const store = {
  get: k => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
};

// ---------- Tabs ----------

const TITLES = { create: 'Create', series: 'Series', settings: 'Settings' };
document.querySelectorAll('.tabs button').forEach(btn => {
  btn.addEventListener('click', () => {
    const page = btn.dataset.page;
    document.querySelectorAll('.tabs button').forEach(b => b.classList.toggle('active', b === btn));
    document.querySelectorAll('.page').forEach(p => { p.hidden = p.id !== 'page-' + page; });
    $('page-title').textContent = TITLES[page];
    window.scrollTo(0, 0);
  });
});

// ---------- Style dropdown ----------

const select = $('style-select');
for (const group of CARTOON_STYLES) {
  const og = document.createElement('optgroup');
  og.label = group.group;
  for (const s of group.items) og.append(new Option(s.name, s.id));
  select.append(og);
}
select.value = store.get('ts_style') || 'pixar3d';
select.addEventListener('change', () => store.set('ts_style', select.value));
$('engine').value = store.get('ts_engine') || 'gemini';
$('engine').addEventListener('change', e => store.set('ts_engine', e.target.value));

// ---------- API keys ----------

$('key-gemini').value = store.get('ts_key_gemini') || '';
$('key-grok').value = store.get('ts_key_grok') || '';

document.querySelectorAll('[data-show]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const input = $(btn.dataset.show);
    const hidden = input.type === 'password';
    input.type = hidden ? 'text' : 'password';
    btn.textContent = hidden ? 'Hide' : 'Show';
  });
});

$('save-keys').addEventListener('click', () => {
  store.set('ts_key_gemini', $('key-gemini').value.trim());
  store.set('ts_key_grok', $('key-grok').value.trim());
  $('save-msg').textContent = 'Saved on this device.';
  $('save-msg').className = 'status good';
  setTimeout(() => { $('save-msg').textContent = ''; }, 2500);
});

function setStatus(which, ok, msg) {
  const el = $('status-' + which);
  el.textContent = msg;
  el.className = 'status ' + (ok ? 'good' : 'bad');
}

// Asking each service for its list of models is free and proves the key works.
async function testKey(which) {
  const key = $('key-' + which).value.trim();
  if (!key) return setStatus(which, false, 'Paste a key first.');
  setStatus(which, true, 'Checking...');
  try {
    const res = which === 'gemini'
      ? await fetch('https://generativelanguage.googleapis.com/v1beta/models?key=' + encodeURIComponent(key))
      : await fetch('https://api.x.ai/v1/models', { headers: { Authorization: 'Bearer ' + key } });
    if (res.ok) setStatus(which, true, 'Key works ✓');
    else if (res.status === 400 || res.status === 401 || res.status === 403) setStatus(which, false, "That key didn't work.");
    else setStatus(which, false, 'The service said: error ' + res.status);
  } catch {
    setStatus(which, false, "Couldn't reach the service. Check your internet.");
  }
}
$('test-gemini').addEventListener('click', () => testKey('gemini'));
$('test-grok').addEventListener('click', () => testKey('grok'));

// ---------- Start ----------

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
