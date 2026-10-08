// Edit this data to update your website. No build tools required.
const projects = [
  { slug: 'bump4you', name: 'Bump4You', icon: '🚀', summary: 'A Discord bot project from 4You Team.', description: 'Learn more about Bump4You. Details and features will be added soon.' },
  { slug: 'banana', name: 'Ban(ana)', icon: '🍌', summary: 'A Discord bot project from 4You Team.', description: 'Learn more about Ban(ana). Details and features will be added soon.' },
  { slug: 'ticket4you', name: 'Ticket4You', icon: '🎟️', summary: 'A Discord bot project from 4You Team.', description: 'Learn more about Ticket4You. Details and features will be added soon.' }
];
const staff = [
  { name: 'Ryan', initial: 'R', role: 'Founder & Developer', bio: 'Ryan is one of the founders of 4You Team and helps develop the team’s Discord bot projects.' },
  { name: 'OMJO', initial: 'O', role: 'Founder & Developer', bio: 'OMJO is one of the founders of 4You Team and helps develop the team’s Discord bot projects.' },
  { name: 'Mr.Raza', initial: 'M', role: 'Developer', bio: 'Mr.Raza is a developer on 4You Team, contributing to the team’s Discord bot projects.' }
];
const app = document.querySelector('#app');
const safe = (value) => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const projectCard = (p) => `<article class="card project-card"><div class="project-icon" aria-hidden="true">${p.icon}</div><h3>${safe(p.name)}</h3><p>${safe(p.summary)}</p><a class="card-link" href="#/bot/${encodeURIComponent(p.slug)}">View Project <span aria-hidden="true">→</span></a></article>`;
const staffCard = (s) => `<article class="card staff-card"><div class="avatar" aria-hidden="true">${safe(s.initial)}</div><h3>${safe(s.name)}</h3><span class="role">${safe(s.role)}</span><p>${safe(s.bio)}</p></article>`;
const header = () => `<header class="site-header"><div class="container header-inner"><a class="brand" href="#/" aria-label="4You Team home"><span class="brand-icon">4Y</span><span>4You <strong>Team</strong><small>DISCORD BOT DEVELOPMENT</small></span></a><nav aria-label="Main navigation"><a href="#/">Home</a><a href="#/projects">Projects</a><a href="#/staff">Staff</a><a href="#/about">About</a></nav></div></header>`;
const footer = () => `<footer class="site-footer"><div class="container footer-inner"><span><strong>4You <em>Team</em></strong> · Built 4You.</span><span>© ${new Date().getFullYear()} 4You Team</span></div></footer>`;
const home = () => `<section class="hero"><div class="container hero-grid"><div><span class="eyebrow">● DISCORD BOT DEVELOPMENT TEAM</span><h1>We Are The<br><span>4You Team.</span></h1><p>Building Discord bots for communities. Simple. Reliable. Made 4You.</p><div class="actions"><a class="button" href="#/projects">Explore Our Projects →</a><a class="button secondary" href="#/staff">Meet Our Team</a></div></div><div class="hero-art" aria-hidden="true"><div class="hero-logo">4<span>Y</span></div><div class="orbit"></div><div class="hero-caption">Built 4You.</div></div></div></section><section class="stats"><div class="container stats-grid"><div><strong>3</strong><span>Discord Bots</span></div><div><strong>3</strong><span>Team Members</span></div></div></section><section class="section" id="projects"><div class="container"><div class="section-heading"><span class="kicker">OUR PROJECTS</span><h2>Our <span>Discord Bots</span></h2><p>Get to know the Discord bots created by 4You Team. Open a project to see more.</p></div><div class="cards">${projects.map(projectCard).join('')}</div></div></section><section class="section section-alt" id="staff"><div class="container"><div class="section-heading"><span class="kicker">OUR STAFF</span><h2>Meet the <span>4You Team</span></h2><p>The people behind our Discord bot projects.</p></div><div class="cards">${staff.map(staffCard).join('')}</div></div></section><section class="section" id="about"><div class="container about-grid"><div><span class="kicker">ABOUT US</span><h2>About <span>4You Team</span></h2><p>4You Team is a Discord bot development team founded by Ryan and OMJO, with developer Mr.Raza. Our projects are Bump4You, Ban(ana), and Ticket4You.</p></div><div class="card community"><div class="community-icon">💚</div><h3>Join Our Community</h3><p>Our Discord invite link will be added soon.</p><span class="coming-soon">Coming Soon</span></div></div></section>`;
const projectsPage = () => `<section class="section page-section"><div class="container"><a class="back" href="#/">← Back home</a><div class="section-heading"><span class="kicker">OUR PROJECTS</span><h1>Our <span>Discord Bots</span></h1><p>Choose a project to learn more.</p></div><div class="cards">${projects.map(projectCard).join('')}</div></div></section>`;
const staffPage = () => `<section class="section page-section"><div class="container"><a class="back" href="#/">← Back home</a><div class="section-heading"><span class="kicker">OUR STAFF</span><h1>Meet the <span>4You Team</span></h1><p>Our founders and developers.</p></div><div class="cards">${staff.map(staffCard).join('')}</div></div></section>`;
const aboutPage = () => `<section class="section page-section"><div class="container"><a class="back" href="#/">← Back home</a><div class="section-heading"><span class="kicker">ABOUT US</span><h1>About <span>4You Team</span></h1><p>4You Team is a Discord bot development team founded by Ryan and OMJO, with developer Mr.Raza. We build Bump4You, Ban(ana), and Ticket4You.</p></div><div class="card community"><h2>Community Discord</h2><p>Invite link coming soon.</p></div></div></section>`;
const botPage = (slug) => {
  const p = projects.find(item => item.slug === slug);
  if (!p) return `<section class="section page-section"><div class="container"><h1>Project not found</h1><a class="button" href="#/projects">See Projects</a></div></section>`;
  return `<section class="section page-section"><div class="container detail"><a class="back" href="#/projects">← All projects</a><div class="project-icon large">${p.icon}</div><span class="kicker">4YOU TEAM PROJECT</span><h1>${safe(p.name)}</h1><p class="detail-summary">${safe(p.description)}</p><div class="card detail-note"><h2>More information coming soon</h2><p>Features, commands, screenshots, and bot invite links can be added here when they're ready.</p></div></div></section>`;
};
function render() {
  const route = decodeURIComponent(location.hash.replace(/^#\/?/, '')).split('/').filter(Boolean);
  let content = home();
  if (route[0] === 'projects') content = projectsPage();
  else if (route[0] === 'staff') content = staffPage();
  else if (route[0] === 'about') content = aboutPage();
  else if (route[0] === 'bot') content = botPage(route[1]);
  app.innerHTML = header() + `<main id="main">${content}</main>` + footer();
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', render);
render();
