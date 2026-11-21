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
// Com 1 ou 2 projetos tudo cabe na tela, não há o que girar: os cards ficam estáticos
if (total < 3) carousel.classList.add("single");
if (total > 2) {

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
}

// Ano no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Fundo animado do Hero: rede de nós e símbolos de TI (decorativo)
(() => {
  const wrap = document.querySelector(".hero-wrap");
  const cv = wrap.querySelector(".hero-canvas");
  const ctx = cv.getContext("2d");
  const WORDS = ["0", "1", "</>", "{ }", "SQL", "py", "BI", "01", "=>", "[ ]", "API", "git"];
  const LINK = 130;
  let W, H, nodes = [], tokens = [], visible = true, running = false;

  const rnd = (a, b) => a + Math.random() * (b - a);

  function setup() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = wrap.clientWidth;
    H = wrap.clientHeight;
    cv.width = W * dpr;
    cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(70, Math.floor((W * H) / 16000));
    nodes = Array.from({ length: n }, () => ({
      x: rnd(0, W), y: rnd(0, H), vx: rnd(-0.22, 0.22), vy: rnd(-0.22, 0.22), r: rnd(1, 2.4),
    }));
    tokens = Array.from({ length: Math.min(16, Math.floor(W / 90)) }, () => ({
      x: rnd(0, W), y: rnd(0, H), vy: -rnd(0.12, 0.35), a: rnd(0.1, 0.28),
      s: rnd(12, 18), t: WORDS[Math.floor(Math.random() * WORDS.length)],
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const p of nodes) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    }
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
        const d = Math.hypot(dx, dy);
        if (d < LINK) {
          ctx.strokeStyle = `rgba(96,165,250,${(1 - d / LINK) * 0.35})`;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
    ctx.fillStyle = "rgba(96,165,250,0.75)";
    for (const p of nodes) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    for (const k of tokens) {
      k.y += k.vy;
      if (k.y < -20) { k.y = H + 20; k.x = rnd(0, W); }
      ctx.font = `${k.s}px "JetBrains Mono", monospace`;
      ctx.fillStyle = `rgba(56,189,248,${k.a})`;
      ctx.fillText(k.t, k.x, k.y);
    }
  }

  function loop() {
    if (!visible) { running = false; return; }
    draw();
    requestAnimationFrame(loop);
  }

  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !running) { running = true; requestAnimationFrame(loop); }
  }).observe(wrap);

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setup, 150);
  });

  setup();
})();

// Contato: o botão seleciona e mostra o link abaixo (não abre sozinho)
(() => {
  const buttons = document.querySelectorAll(".contact-links .btn");
  const info = document.querySelector(".contact-info");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        const on = b === btn;
        b.classList.toggle("active", on);
        b.setAttribute("aria-pressed", String(on));
      });
      const link = document.createElement("a");
      link.href = btn.dataset.href;
      link.textContent = btn.dataset.text;
      if (btn.dataset.external) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      info.replaceChildren(link);
    });
  });
})();
