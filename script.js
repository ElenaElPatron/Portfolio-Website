/* ===========================================================
   ELENA · Portfolio — Interaktionen
   =========================================================== */

/* ---------- Loading Screen ---------- */
(function loader(){
  const loader = document.getElementById('loader');
  const bar = document.getElementById('loaderBar');
  if(!loader) return;

  document.body.classList.add('loading');
  let p = 0;
  const tick = setInterval(() => {
    p += Math.random() * 18 + 6;
    if(p >= 100){ p = 100; clearInterval(tick); }
    bar.style.width = p + '%';
    if(p === 100){
      setTimeout(() => {
        loader.classList.add('is-done');
        document.body.classList.remove('loading');
      }, 380);
    }
  }, 180);
})();

/* ---------- Nav: scroll-state, burger, smooth close ---------- */
(function nav(){
  const nav = document.getElementById('nav');
  const burger = document.getElementById('navBurger');
  const links = document.getElementById('navLinks');

  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });

  burger.addEventListener('click', () => nav.classList.toggle('is-open'));
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => nav.classList.remove('is-open'))
  );
})();

/* ---------- Scroll reveal (wischt von unten rein) ---------- */
(function reveal(){
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if(e.isIntersecting){
        e.target.style.transitionDelay = (e.target.dataset.delay || (i % 3) * 0.08) + 's';
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold:0.14, rootMargin:'0px 0px -8% 0px' });

  document.querySelectorAll('.reveal, .skill, .tl-item').forEach(el => io.observe(el));
})();

/* ---------- Timeline: Fortschrittslinie ---------- */
(function timeline(){
  const tl = document.querySelector('.timeline');
  const progress = document.getElementById('timelineProgress');
  if(!tl || !progress) return;

  const update = () => {
    const r = tl.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = r.height;
    const seen = Math.min(Math.max(vh * 0.5 - r.top, 0), total);
    progress.style.height = (seen / total * 100) + '%';
  };
  update();
  window.addEventListener('scroll', update, { passive:true });
  window.addEventListener('resize', update);
})();

/* ---------- Galerie: Filter + "Mehr anzeigen" ---------- */
(function gallery(){
  const filters = document.getElementById('galleryFilters');
  const grid = document.getElementById('galleryGrid');
  const moreWrap = document.getElementById('galleryMore');
  const items = [...document.querySelectorAll('.gitem')];
  if(!filters || !grid) return;

  const LIMIT = 11;           // wie viele Bilder zuerst sichtbar sind (Vorschau)
  let currentFilter = 'all';
  let expanded = false;

  function apply(reveal){
    const matching = items.filter(it => currentFilter === 'all' || it.dataset.cat === currentFilter);
    let shown = 0;
    items.forEach(it => {
      const isMatch = currentFilter === 'all' || it.dataset.cat === currentFilter;
      const visible = isMatch && (expanded || shown < LIMIT);
      if(isMatch && visible) shown++;
      it.classList.toggle('is-hidden', !visible);
      if(reveal && visible) it.classList.add('is-in');   // nach Interaktion sofort sichtbar
    });

    // "Mehr anzeigen"-Button
    if(moreWrap){
      if(!expanded && matching.length > LIMIT){
        moreWrap.innerHTML = `<button class="btn btn--glass" id="moreBtn">Alle ${matching.length} anzeigen</button>`;
      } else {
        moreWrap.innerHTML = '';
      }
    }
  }

  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.chip');
    if(!btn) return;
    filters.querySelectorAll('.chip').forEach(c => c.classList.remove('is-active'));
    btn.classList.add('is-active');
    currentFilter = btn.dataset.filter;
    expanded = false;
    apply(true);
  });

  if(moreWrap){
    moreWrap.addEventListener('click', (e) => {
      if(e.target.closest('#moreBtn')){ expanded = true; apply(true); }
    });
  }

  apply(false);   // Erstaufbau: Limit anwenden, Scroll-Animation behalten
})();

/* ---------- Lightbox (Bild vergrössern) ---------- */
(function lightbox(){
  const box = document.getElementById('lightbox');
  const grid = document.getElementById('galleryGrid');
  if(!box || !grid) return;

  const img = document.getElementById('lightboxImg');
  const capH = box.querySelector('#lightboxCap h4');
  const capS = box.querySelector('#lightboxCap span');
  let current = -1;

  const visibleItems = () =>
    [...grid.querySelectorAll('.gitem')].filter(it => !it.classList.contains('is-hidden'));

  const show = (i) => {
    const items = visibleItems();
    if(!items.length) return;
    current = (i + items.length) % items.length;        // umlaufend
    const it = items[current];
    img.src = it.querySelector('img').src;
    img.alt = it.querySelector('h4')?.textContent || '';
    capH.textContent = it.querySelector('h4')?.textContent || '';
    capS.textContent = it.querySelector('span')?.textContent || '';
  };

  const open = (it) => {
    show(visibleItems().indexOf(it));
    box.classList.add('is-open');
    box.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const close = () => {
    box.classList.remove('is-open');
    box.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Klick auf eine Galerie-Kachel (delegiert → funktioniert auch für dynamische Kacheln)
  grid.addEventListener('click', (e) => {
    const it = e.target.closest('.gitem');
    if(it) open(it);
  });

  document.getElementById('lightboxClose').addEventListener('click', close);
  document.getElementById('lightboxNext').addEventListener('click', () => show(current + 1));
  document.getElementById('lightboxPrev').addEventListener('click', () => show(current - 1));
  // Klick auf den Hintergrund schliesst (nicht auf Bild/Buttons)
  box.addEventListener('click', (e) => { if(e.target === box) close(); });

  document.addEventListener('keydown', (e) => {
    if(!box.classList.contains('is-open')) return;
    if(e.key === 'Escape') close();
    else if(e.key === 'ArrowRight') show(current + 1);
    else if(e.key === 'ArrowLeft') show(current - 1);
  });
})();

/* ---------- Testimonials: Swipe-Carousel ---------- */
(function testimonials(){
  const carousel = document.querySelector('.testimonials__carousel');
  const track = document.getElementById('testimonialsTrack');
  const prev = document.getElementById('tcarPrev');
  const next = document.getElementById('tcarNext');
  if(!carousel || !track) return;

  const cards = () => [...track.querySelectorAll('.quote-card')];

  const currentIndex = () => {
    const cs = cards();
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bestD = Infinity;
    cs.forEach((c, i) => {
      const cc = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(cc - center);
      if(d < bestD){ bestD = d; best = i; }
    });
    return best;
  };

  const goTo = (i) => {
    const cs = cards();
    i = Math.max(0, Math.min(cs.length - 1, i));
    cs[i] && cs[i].scrollIntoView({ behavior:'smooth', inline:'center', block:'nearest' });
  };

  const update = () => {
    const cs = cards();
    const overflow = track.scrollWidth > track.clientWidth + 2;
    carousel.classList.toggle('has-overflow', overflow);
    const i = currentIndex();
    if(prev) prev.disabled = i <= 0;
    if(next) next.disabled = i >= cs.length - 1;
  };

  prev && prev.addEventListener('click', () => goTo(currentIndex() - 1));
  next && next.addEventListener('click', () => goTo(currentIndex() + 1));
  track.addEventListener('scroll', update, { passive:true });
  window.addEventListener('resize', update);

  // Maus-Drag (Desktop)
  let down=false, startX=0, startScroll=0, moved=0;
  track.addEventListener('pointerdown', (e) => {
    if(e.pointerType === 'mouse'){ down=true; startX=e.clientX; startScroll=track.scrollLeft; moved=0; track.classList.add('is-dragging'); }
  });
  track.addEventListener('pointermove', (e) => {
    if(!down) return;
    const dx = e.clientX - startX; moved += Math.abs(dx);
    track.scrollLeft = startScroll - dx;
  });
  const end = () => { if(down){ down=false; track.classList.remove('is-dragging'); } };
  track.addEventListener('pointerup', end);
  track.addEventListener('pointerleave', end);
  // Klicks nach echtem Ziehen unterdrücken
  track.addEventListener('click', (e) => { if(moved > 6){ e.preventDefault(); e.stopPropagation(); } }, true);

  update();
  setTimeout(update, 300); // nach Font-/Layout-Aufbau
})();

/* ---------- Jahr im Footer ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
