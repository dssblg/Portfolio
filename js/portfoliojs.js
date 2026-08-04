function setLightMode() {
  const element = document.body
  element.classList.add('light-mode');
  vantaEffet.destroy();
  vantaEffet = VANTA.NET({
    color: 0x8B5CF6, //--accent,
    backgroundColor: 0xF8F5FF, //--bordeaux,
    lineColors: 0xD946EF,
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    points: 15.00,
    maxDistance: 40.00,
    spacing: 20.00,
  })
}

function setDarkMode() {
  const element = document.body
  element.classList.remove('light-mode');
  vantaEffet.destroy();
  vantaEffet = VANTA.NET({
    color: 0xB983FF, //--accent,
    backgroundColor: 0x1A1025, //--bordeaux,
    lineColors: 0xFF6EC7,
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    points: 15.00,
    maxDistance: 40.00,
    spacing: 20.00,
  })
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

document.querySelectorAll('*').forEach(el => {
  if (el.offsetWidth > document.documentElement.clientWidth) {
    console.log(el, 'largeur =', el.offsetWidth, 'px | viewport =', document.documentElement.clientWidth, 'px');
  }
});

window.addEventListener('load', () => {
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 300);
});