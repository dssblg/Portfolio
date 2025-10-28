function setLightMode() {
  const all = document.querySelectorAll('*');
  all.forEach(el => {
    el.style.backgroundColor = '#dfc7c7';
    el.style.color = '#270000';
  });
}

function setDarkMode() {
  const all = document.querySelectorAll('*');
  all.forEach(el => {
    el.style.backgroundColor = '#270000';
    el.style.color = '#dfc7c7';
  });
}

function setMixMode() {
  location.reload();
}

const text = "PORTEFEUILLE DE COMPÉTENCES - BELGHERBI DONIA";
let i = 0;
const el = document.getElementById("title1");

function typeWriter() {
  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

const btn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) btn.style.display = 'block';
  else btn.style.display = 'none';
});

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('scroll-progress').style.width = scrollPercent + '%';
});


btn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
typeWriter();
document.getElementById('light').addEventListener('click', setLightMode);
document.getElementById('dark').addEventListener('click', setDarkMode);
document.getElementById('mix').addEventListener('click', setMixMode);
