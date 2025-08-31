// Redirect if no nickname is set
const nickname = localStorage.getItem('nickname');
if (!nickname) {
  window.location.href = 'index.html';
}

// Wait for DOM to load before rendering
document.addEventListener('DOMContentLoaded', () => {
  // Display welcome message
  const welcomeEl = document.getElementById('welcome');
  welcomeEl.textContent = `Welcome, ${nickname}`;

  // Define downloadable assets
  const assets = [
    { name: 'Staff Badge', url: 'assets/staff_badge.png' },
    { name: 'Audit Sheet', url: 'assets/audit_sheet.pdf' },
    { name: 'Role Icons', url: 'assets/role_icons.zip' }
  ];

  // Render asset links
  const panel = document.getElementById('panel-content');
  panel.innerHTML = `<h3>Downloadable Assets</h3>`;

  assets.forEach(({ name, url }) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    link.textContent = `📥 ${name}`;
    link.className = 'asset-link';
    panel.appendChild(link);
  });
});