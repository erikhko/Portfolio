// Menu mobile
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Animação ao rolar
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("visible"));
}

// Carrossel de projetos
const carousel = document.querySelector(".carousel");
const track = carousel.querySelector(".cards");
const prev = carousel.querySelector(".carousel-btn.prev");
const next = carousel.querySelector(".carousel-btn.next");
const dotsBox = document.querySelector(".carousel-dots");
const originals = [...track.querySelectorAll(".card")];
const total = originals.length;

const SPEED = 40; // px por segundo — menor = mais lento

let setWidth = 0;   // largura de um conjunto completo de cards (inclui o espaçamento)
let pos = 0;        // posição de rolagem (decimal, para movimento suave)
let remaining = 0;  // deslocamento pendente de cliques nas setas/bolinhas
let last = 0;
let inView = true;
const pauses = { hover: false, focus: false, touch: false, manual: false };
let touchTimer;

// Duplica os cards para o loop ser contínuo, sem "pulo"
function build() {
  track.querySelectorAll(".clone").forEach((c) => c.remove());
  const addSet = () =>
    originals.forEach((card) => {
      const copy = card.cloneNode(true);
      copy.classList.add("clone");
      copy.setAttribute("aria-hidden", "true");
      copy.querySelectorAll("a").forEach((a) => a.setAttribute("tabindex", "-1"));
      track.appendChild(copy);
    });
  addSet();
  setWidth = track.querySelector(".clone").offsetLeft - originals[0].offsetLeft;
  while (track.scrollWidth < setWidth * 2 + track.clientWidth) addSet();
}

// Bolinhas indicadoras
originals.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.setAttribute("aria-label", `Ir para o projeto ${i + 1}`);
  dot.addEventListener("click", () => {
    let diff = i * (setWidth / total) - (pos % setWidth);
    if (diff > setWidth / 2) diff -= setWidth;
    if (diff < -setWidth / 2) diff += setWidth;
    remaining = diff;
  });
  dotsBox.appendChild(dot);
});
const dots = dotsBox.querySelectorAll("button");

// Botão de pausar/retomar a rotação automática
const playBtn = document.createElement("button");
playBtn.className = "carousel-toggle";
playBtn.textContent = "⏸";
playBtn.setAttribute("aria-label", "Pausar rotação automática");
playBtn.addEventListener("click", () => {
  pauses.manual = !pauses.manual;
  playBtn.textContent = pauses.manual ? "▶" : "⏸";
  playBtn.setAttribute("aria-label", pauses.manual ? "Retomar rotação automática" : "Pausar rotação automática");
});
dotsBox.prepend(playBtn);

function frame(t) {
  const dt = Math.min((t - last) / 1000, 0.1);
  last = t;
  const paused = pauses.hover || pauses.focus || pauses.touch || pauses.manual;

  if (remaining !== 0) {
    const d = Math.abs(remaining) < 1 ? remaining : remaining * 0.18;
    pos += d;
    remaining -= d;
  } else if (!paused && inView) {
    pos += SPEED * dt;
  } else {
    pos = track.scrollLeft; // acompanha rolagem manual (dedo/mouse)
    requestAnimationFrame(frame);
    updateDots();
    return;
  }

  pos = ((pos % setWidth) + setWidth) % setWidth;
  track.scrollLeft = pos;
  updateDots();
  requestAnimationFrame(frame);
}

function updateDots() {
  const idx = Math.round((pos % setWidth) / (setWidth / total)) % total;
  dots.forEach((d, i) => d.classList.toggle("active", i === idx));
}

const jump = (dir) => { remaining += dir * (setWidth / total); };
prev.addEventListener("click", () => jump(-1));
next.addEventListener("click", () => jump(1));
track.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") { e.preventDefault(); jump(1); }
  if (e.key === "ArrowLeft") { e.preventDefault(); jump(-1); }
});

// Pausa ao passar o mouse, focar ou tocar (para dar tempo de ler)
carousel.addEventListener("mouseenter", () => (pauses.hover = true));
carousel.addEventListener("mouseleave", () => (pauses.hover = false));
carousel.addEventListener("focusin", () => (pauses.focus = true));
carousel.addEventListener("focusout", () => (pauses.focus = false));
carousel.addEventListener("touchstart", () => {
  pauses.touch = true;
  clearTimeout(touchTimer);
}, { passive: true });
carousel.addEventListener("touchend", () => {
  clearTimeout(touchTimer);
  touchTimer = setTimeout(() => (pauses.touch = false), 3000);
}, { passive: true });

// Só anima quando a seção está visível
new IntersectionObserver(([entry]) => (inView = entry.isIntersecting)).observe(carousel);

window.addEventListener("resize", () => { build(); pos = pos % setWidth; });

build();
requestAnimationFrame(frame);

// Efeito de digitação
const typed = document.querySelector(".typed");
const words = JSON.parse(typed.dataset.words);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion) {
  typed.textContent = words[0];
} else {
  let w = 0, c = 0, deleting = false;
  const tick = () => {
    const word = words[w];
    c += deleting ? -1 : 1;
    typed.textContent = word.slice(0, c);
    let delay = deleting ? 60 : 110;
    if (!deleting && c === word.length) { deleting = true; delay = 1500; }
    else if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; delay = 400; }
    setTimeout(tick, delay);
  };
  tick();
}

// Ano no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();
