const loginBox = document.getElementById('loginBox');
const dashboard = document.getElementById('dashboard');
const errorScreen = document.getElementById('errorScreen');
const nicknameInput = document.getElementById('nickname');
const welcomeEl = document.getElementById('welcome');

document.getElementById('enterBtn').addEventListener('click', () => {
  const nickname = nicknameInput.value.trim();
  if (!nickname) {
    alert('Please enter a nickname');
    return;
  }
  sessionStorage.setItem('nickname', nickname);
  localStorage.setItem('nickname', nickname);
  loginBox.style.display = 'none';
  dashboard.style.display = 'block';
  initDashboard(nickname);
});

function initDashboard(nickname) {
  welcomeEl.textContent = `👋 Hello! Welcome to SweetPanel, ${nickname}!`;

  // Tab switching
  const tabs = document.querySelectorAll('.tab-btn');
  const contents = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab).classList.add('active');
    });
  });

  // Announcements
  const updates = [
    '📢 Sweet Panel V1 has just released!',
    '🎉 New Products are soon coming out.'
  ];
  const annContainer = document.getElementById('announcement-list');
  updates.forEach(msg => {
    const item = document.createElement('div');
    item.className = 'announcement';
    item.textContent = msg;
    annContainer.appendChild(item);
  });

  // Products
  const assets = [
    {
      name: 'Coffee Machine',
      desc: 'Advanced card-based identification system.',
      tag: 'Popular',
      url: 'assets.pdf',
      thumb: 'https://www.bing.com/ck/a?!&&p=1d0d2052c8132ede438580c8d8a28886e98e17623c7c4ec1cbd49be4ef17e77aJmltdHM9MTc1NjU5ODQwMA&ptn=3&ver=2&hsh=4&fclid=2a721ec3-5012-6072-01dd-0bab51f26198&u=a1L2ltYWdlcy9zZWFyY2g_cT1jb2ZmZWUrbWFjaGluZSt0aHVtYm5haWwmaWQ9Njk1REI1Mzc4MkNEMjg0ODg0RTk3MUI5QTA4MDNFNEYyRkMzQjdFNiZGT1JNPUlRRlJCQQ'
    },
  ];
  const grid = document.getElementById('modules-grid');
  assets.forEach(({ name, desc, tag, url, thumb }) => {
    const card = document.createElement('div');
    card.className = 'module-card';
    card.innerHTML = `
      <img src="${thumb}" alt="${name} Thumbnail" class="thumb" />
      <div class="tag">${tag}</div>
      <h3>${name}</h3>
      <p>${desc}</p>
      <a href="${url}" download class="download-btn">Download File</a>
    `;
    grid.appendChild(card);
  });
}

// Auto-load if nickname already exists
const storedNickname = sessionStorage.getItem('nickname') || localStorage.getItem('nickname');
if (storedNickname) {
  loginBox.style.display = 'none';
  dashboard.style.display = 'block';
  initDashboard(storedNickname);
} else {
  loginBox.style.display = 'block';
}
