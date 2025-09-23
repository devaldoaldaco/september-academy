const form = document.getElementById('shorten-form');
const input = document.getElementById('url-input');
const errorEl = document.getElementById('input-error');
const list = document.getElementById('links-list');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

const STORAGE_KEY = 'shortly_links_v1';
const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
saved.forEach(addRow);

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  errorEl.textContent = '';
  input.classList.remove('error');

  const url = input.value.trim();
  if (!url) {
    showError('Please add a link');
    return;
  }

  try {
    const res = await fetch('https://cleanuri.com/api/v1/shorten', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: new URLSearchParams({ url })
    });
    if (!res.ok) throw new Error('Request failed');
    const data = await res.json();
    if (!data.result_url) throw new Error('Invalid response');
    const row = { original: url, short: data.result_url };
    addRow(row);
    saved.push(row);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    input.value = '';
  } catch (err) {
    showError('There was a problem shortening that link.');
    console.error(err);
  }
});

function showError(msg){
  errorEl.textContent = msg;
  input.classList.add('error');
  input.setAttribute('aria-invalid','true');
  setTimeout(()=>{ input.removeAttribute('aria-invalid') }, 4000);
}

function addRow({ original, short }){
  const li = document.createElement('li');
  li.className = 'link-row';
  li.innerHTML = `
    <a class="original" href="${original}" target="_blank" rel="noopener">${original}</a>
    <div class="row-actions">
      <a class="short" href="${short}" target="_blank" rel="noopener">${short}</a>
      <button class="copy" type="button">Copy</button>
    </div>
  `;
  const btn = li.querySelector('.copy');
  btn.addEventListener('click', async () => {
    try{
      await navigator.clipboard.writeText(short);
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(()=>{ btn.textContent = 'Copy'; btn.classList.remove('copied') }, 1500);
    }catch(e){
      console.error(e);
    }
  });
  list.prepend(li);
}