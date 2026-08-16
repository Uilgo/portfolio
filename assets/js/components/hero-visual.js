/**
 * Hero Visual — Globo central + 4 cards flutuantes draggáveis
 * Reescrito com GSAP (igual ao DevClub HeroVisual.astro)
 */

(function () {
  if (window.innerWidth < 1024) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Aguarda GSAP estar disponível
  function waitForGSAP(cb) {
    if (window.gsap) { cb(); return; }
    const t = setInterval(() => { if (window.gsap) { clearInterval(t); cb(); } }, 20);
  }

  waitForGSAP(initHeroVisual);

  function initHeroVisual() {
    const gsap      = window.gsap;
    const container = document.getElementById('hero-visual');
    const globeEl   = document.getElementById('hv-globe');
    const cards     = document.querySelectorAll('.hv__card');

    if (!container || !globeEl || !cards.length) return;

    // ── Helpers ────────────────────────────────────────────────────────────────

    function elementCenterSVG(el) {
      const r  = el.getBoundingClientRect();
      const cr = container.getBoundingClientRect();
      return {
        x: r.left - cr.left + r.width  / 2,
        y: r.top  - cr.top  + r.height / 2,
      };
    }

    function syncPath(pathEl, cardEl) {
      const c  = elementCenterSVG(cardEl);
      const g  = elementCenterSVG(globeEl);
      const mx = (c.x + g.x) / 2;
      const d  = `M ${c.x.toFixed(1)} ${c.y.toFixed(1)} C ${mx.toFixed(1)} ${c.y.toFixed(1)}, ${mx.toFixed(1)} ${g.y.toFixed(1)}, ${g.x.toFixed(1)} ${g.y.toFixed(1)}`;
      pathEl.setAttribute('d', d);

      const tdotId = cardEl.dataset.tdot;
      if (tdotId) {
        const motionEl = document.querySelector(`#${tdotId} animateMotion`);
        if (motionEl) motionEl.setAttribute('path', d);
      }
    }

    function syncAllPaths() {
      cards.forEach(card => {
        const pathEl = document.getElementById(card.dataset.line);
        if (pathEl) syncPath(pathEl, card);
      });
    }

    window.addEventListener('resize', syncAllPaths);
    window.addEventListener('languageChange', () => setTimeout(syncAllPaths, 50));

    // ── Float animation (GSAP — igual ao devclub) ──────────────────────────────

    const FLOAT_CONFIG = {
      'hv-card-tl': { y: -8,  dur: 2.5  },
      'hv-card-bl': { y:  8,  dur: 3.25 },
      'hv-card-tr': { y:  6,  dur: 2.75 },
      'hv-card-br': { y: -6,  dur: 3.5  },
    };

    function startFloat(cardEl) {
      const cfg    = FLOAT_CONFIG[cardEl.id];
      if (!cfg) return;
      const pathEl = document.getElementById(cardEl.dataset.line);

      gsap.to(cardEl, {
        y: cfg.y,
        duration: cfg.dur,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        onUpdate() {
          if (pathEl) syncPath(pathEl, cardEl);
        },
      });
    }

    // ── Draggable (GSAP — igual ao devclub) ────────────────────────────────────

    function makeDraggable(cardEl) {
      const pathEl = document.getElementById(cardEl.dataset.line);
      const tdotEl = document.getElementById(cardEl.dataset.tdot);

      let dragging  = false;
      let startX = 0, startY = 0;
      let baseFloatY = 0;

      function onStart(clientX, clientY) {
        dragging    = true;
        startX      = clientX;
        startY      = clientY;
        baseFloatY  = gsap.getProperty(cardEl, 'y') || 0;
        gsap.killTweensOf(cardEl);

        cardEl.classList.add('is-dragging');
        cardEl.style.zIndex = '50';
        if (pathEl) pathEl.classList.add('is-active');
        if (tdotEl) gsap.to(tdotEl, { opacity: 0, duration: 0.15 });
      }

      function onMove(clientX, clientY) {
        if (!dragging) return;
        const dx = clientX - startX;
        const dy = clientY - startY;
        gsap.set(cardEl, { x: dx, y: baseFloatY + dy });
        if (pathEl) syncPath(pathEl, cardEl);
      }

      function onEnd() {
        if (!dragging) return;
        dragging = false;

        gsap.to(cardEl, {
          x: 0,
          y: 0,
          duration: 0.85,
          ease: 'elastic.out(1, 0.5)',
          onUpdate() {
            if (pathEl) syncPath(pathEl, cardEl);
          },
          onComplete() {
            cardEl.classList.remove('is-dragging');
            if (pathEl) pathEl.classList.remove('is-active');
            cardEl.style.zIndex = '';
            if (tdotEl) gsap.to(tdotEl, { opacity: 1, duration: 0.4 });
            startFloat(cardEl);
          },
        });
      }

      cardEl.addEventListener('mousedown', e => {
        e.preventDefault();
        onStart(e.clientX, e.clientY);
        const mm = e => onMove(e.clientX, e.clientY);
        const mu = () => {
          onEnd();
          document.removeEventListener('mousemove', mm);
          document.removeEventListener('mouseup', mu);
        };
        document.addEventListener('mousemove', mm);
        document.addEventListener('mouseup', mu);
      });

      cardEl.addEventListener('touchstart', e => {
        e.preventDefault();
        const t = e.touches[0];
        onStart(t.clientX, t.clientY);
        const tm = e => { e.preventDefault(); onMove(e.touches[0].clientX, e.touches[0].clientY); };
        const te = () => {
          onEnd();
          document.removeEventListener('touchmove', tm);
          document.removeEventListener('touchend', te);
        };
        document.addEventListener('touchmove', tm, { passive: false });
        document.addEventListener('touchend', te);
      }, { passive: false });
    }

    // ── Entrance animation (GSAP — igual ao devclub) ───────────────────────────

    gsap.set('#hv-globe', { opacity: 0, scale: 0.6 });
    gsap.set('#hv-card-tl, #hv-card-bl', { opacity: 0, x: -30 });
    gsap.set('#hv-card-tr, #hv-card-br', { opacity: 0, x:  30 });
    gsap.set('.hv__line', { strokeDasharray: 2000, strokeDashoffset: 2000, opacity: 0 });
    gsap.set('.hv__travel-dot', { opacity: 0 });

    // Sync paths antes da animação para que as posições iniciais sejam corretas
    syncAllPaths();

    const tl = gsap.timeline({ delay: 0.3 });

    tl.to('#hv-globe', {
        opacity: 1, scale: 1, duration: 0.8,
        ease: 'back.out(1.4)',
        onUpdate: syncAllPaths,
      })
      // Anima os cards quase imediatamente, junto com o globo (0.2s de timeline)
      .to('#hv-card-tl, #hv-card-bl, #hv-card-tr, #hv-card-br', {
        opacity: 1, x: 0, duration: 0.6,
        ease: 'power3.out', stagger: 0.05,
        onUpdate: syncAllPaths,
      }, 0.1)
      // Anima as linhas simultaneamente
      .to('.hv__line', {
        strokeDashoffset: 0, opacity: 1, duration: 0.8,
        ease: 'power2.out', stagger: 0.1,
        clearProps: 'strokeDasharray,strokeDashoffset',
      }, 0.2)
      .to('.hv__travel-dot', { opacity: 1, duration: 0.3 }, 0.6)
      .add(() => {
        cards.forEach(card => {
          gsap.set(card, { x: 0 });
          startFloat(card);
          makeDraggable(card);
        });
      });
  }

})();
