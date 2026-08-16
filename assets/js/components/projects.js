/**
 * projects.js — tradução direta de devclub/src/features/Projetos.astro
 * Lógica GSAP copiada fielmente do original Astro.
 */
(function () {

  // ── Dados ────────────────────────────────────────────────────────────────
  const projectsData = [
    {
      id: "cardapio-digital",
      cor: "#f97316",
      nivel: { "pt-BR": "Delivery", en: "Delivery" },
      duracao: { "pt-BR": "Em produção", en: "In Production" },
      titulo: { "pt-BR": "Cardápio Digital", en: "Digital Menu" },
      subtitulo: { "pt-BR": "Sistema de Pedidos e Delivery Online", en: "Online Ordering & Delivery System" },
      descricao: {
        "pt-BR": "Plataforma interativa de cardápio digital com seleção de categorias, carrinho dinâmico e integração completa para pedidos rápidos e responsivos.",
        en: "Interactive digital menu platform featuring category filtering, dynamic shopping cart, and seamless checkout for fast, responsive orders."
      },
      destaque: {
        "pt-BR": "Cardápio interativo · Pedidos em tempo real · Mobile first",
        en: "Interactive menu · Real-time orders · Mobile first"
      },
      url: "https://pm-delivery.vercel.app/cardapio/",
      github: null,
      tecnologias: ["HTML", "CSS", "JavaScript"],
      imagem: "assets/images/cardapio.webp",
      imgPosition: "top left",
    },
    {
      id: "webiagenda",
      cor: "#3b82f6",
      nivel: { "pt-BR": "Fullstack", en: "Fullstack" },
      duracao: { "pt-BR": "Em produção", en: "In Production" },
      titulo: { "pt-BR": "WebIAgenda", en: "WebIAgenda" },
      subtitulo: { "pt-BR": "Sistema de Agendamento Inteligente", en: "Intelligent Scheduling System" },
      descricao: {
        "pt-BR": "Sistema moderno para gerenciamento de agendamentos com dashboard interativo, autenticação completa e interface responsiva. Construído com Nuxt 4, Supabase e Tailwind CSS.",
        en: "Modern appointment management system with interactive dashboard, full authentication, and responsive UI. Built with Nuxt 4, Supabase, and Tailwind CSS."
      },
      destaque: {
        "pt-BR": "Deploy em produção · Autenticação real · Mobile first",
        en: "Production deploy · Real authentication · Mobile first"
      },
      url: "https://webiagenda.vercel.app/",
      github: null,
      tecnologias: ["Nuxt 4", "TypeScript", "Supabase", "Tailwind CSS"],
      imagem: "assets/images/webiagenda.webp",
      imgPosition: "top left",
    },
    {
      id: "petbath",
      cor: "#10b981",
      nivel: { "pt-BR": "Sistema", en: "System" },
      duracao: { "pt-BR": "Concluído", en: "Completed" },
      titulo: { "pt-BR": "PetBath", en: "PetBath" },
      subtitulo: { "pt-BR": "Sistema de Agendamento para Pets", en: "Pet Care Scheduling System" },
      descricao: {
        "pt-BR": "Plataforma completa para gerenciamento de serviços de banho e cuidados para pets. Integração com gateway de pagamento Assas e design totalmente responsivo.",
        en: "Complete platform for managing pet grooming and bath services. Integrated with Asaas payment gateway and fully responsive design."
      },
      destaque: {
        "pt-BR": "Pagamento online integrado · Agendamento · Gestão de serviços",
        en: "Integrated online payment · Scheduling · Service management"
      },
      url: "https://petbath-75376.bubbleapps.io/version-test",
      github: null,
      tecnologias: ["Bubble", "Assas API", "Design Responsivo"],
      imagem: "assets/images/petbath.webp",
      imgPosition: "center center",
    },
    {
      id: "barbearia-landing",
      cor: "#8b5cf6",
      nivel: { "pt-BR": "Landing Page", en: "Landing Page" },
      duracao: { "pt-BR": "Concluído", en: "Completed" },
      titulo: { "pt-BR": "Barbearia Premium", en: "Premium Barber Shop" },
      subtitulo: { "pt-BR": "Landing Page de Alta Conversão", en: "High-Conversion Landing Page" },
      descricao: {
        "pt-BR": "Landing page moderna e responsiva para barbearia com sistema de agendamento online e apresentação dos serviços. Foco em conversão e experiência do usuário.",
        en: "Modern and responsive barbershop landing page featuring an online appointment system and service showcase. Focused on conversion and user experience."
      },
      destaque: {
        "pt-BR": "Agendamento online · SEO otimizado · Alta conversão",
        en: "Online scheduling · SEO optimized · High conversion"
      },
      url: "https://lp-barbearia-14851.bubbleapps.io/version-test",
      github: null,
      tecnologias: ["Bubble", "Design Responsivo", "SEO"],
      imagem: "assets/images/lpbarber.webp",
      imgPosition: "top center",
    },
  ];

  function getLang() {
    return (window.I18n && window.I18n.currentLang) || "pt-BR";
  }

  function getVal(prop) {
    if (typeof prop === "object" && prop !== null) {
      const lang = getLang();
      return prop[lang] || prop["pt-BR"] || "";
    }
    return prop || "";
  }

  function t(key, fallback) {
    return (window.I18n && window.I18n.t(key)) || fallback;
  }

  // ── Render chips ─────────────────────────────────────────────────────────
  function renderChips() {
    const container = document.getElementById("proj-chips");
    if (!container) return;
    container.innerHTML = projectsData.map((p, i) => `
      <div class="proj-chip" style="--chip-cor:${p.cor}">
        <span class="proj-chip__dot" style="background:${p.cor}"></span>
        <span class="proj-chip__num">${String(i + 1).padStart(2, "0")}</span>
        <span class="proj-chip__title">${getVal(p.titulo)}</span>
      </div>`).join("");
  }

  // ── Render dots ──────────────────────────────────────────────────────────
  function renderDots() {
    const container = document.getElementById("proj-dots");
    if (!container) return;
    container.innerHTML = projectsData.map((p, i) => `
      <div class="proj-dot-slot" data-proj-row style="--cor:${p.cor}">
        <div class="proj-dot-wrap">
          <div class="proj-dot"></div>
          <span class="proj-label">${String(i + 1).padStart(2, "0")}</span>
        </div>
      </div>`).join("");
  }

  // ── Render cards ─────────────────────────────────────────────────────────
  function renderCards() {
    const stage = document.getElementById("proj-stage");
    if (!stage) return;
    const isEn = getLang() === "en";
    stage.innerHTML = projectsData.map((p, i) => `
      <article class="proj-card" data-card-index="${i}" style="background:#0a0b0d;--cor:${p.cor}">
        <div class="proj-card__top-line" style="background:linear-gradient(90deg,transparent,color-mix(in srgb,${p.cor} 60%,transparent),transparent)" aria-hidden="true"></div>
        <div class="proj-card__text" style="background:linear-gradient(155deg,rgba(255,255,255,0.045),rgba(255,255,255,0.015))">
          <div class="proj-card__text-glow" style="background:radial-gradient(ellipse 90% 60% at 0% 0%,color-mix(in srgb,${p.cor} 16%,transparent),transparent 70%)" aria-hidden="true"></div>
          <div class="proj-card__text-body">
            <div class="proj-card__tags">
              <span class="proj-card__tag proj-card__tag--level" style="color:${p.cor};background:color-mix(in srgb,${p.cor} 12%,transparent);border-color:color-mix(in srgb,${p.cor} 30%,transparent)">${getVal(p.nivel)}</span>
            </div>
            <h3 class="proj-card__title">${getVal(p.titulo)}</h3>
            <p class="proj-card__desc">${getVal(p.descricao)}</p>
            <div class="proj-card__destaque">
              <span class="proj-card__destaque-icon" style="color:${p.cor}">
                <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" style="width:14px;height:14px;display:inline-block"><path d="M8.8 1.5 3.5 9h3.7l-.9 5.5L11.5 7H7.8l1-5.5z"/></svg>
              </span>
              <span>${getVal(p.destaque)}</span>
            </div>
            <div class="proj-card__techs">
              ${p.tecnologias.map(tech => `<span class="proj-card__tech" style="color:${p.cor};background:color-mix(in srgb,${p.cor} 10%,transparent);border-color:color-mix(in srgb,${p.cor} 24%,transparent)">${tech}</span>`).join("")}
            </div>
          </div>
          <div class="proj-card__actions">
            <a href="${p.url}" target="_blank" rel="noopener noreferrer"
               class="proj-card__btn proj-card__btn--pill"
               style="--btn-cor:${p.cor}"
               onclick="event.stopPropagation()">
              <span>${t("projects.button.access", isEn ? "Access Project" : "Acessar Projeto")}</span>
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" style="width:14px;height:14px;flex-shrink:0"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </div>
        </div>
        <div class="proj-card__img"
          data-preview-src="${p.imagem}"
          data-preview-alt="${getVal(p.titulo)}"
          tabindex="0" role="button"
          aria-label="${isEn ? "View preview of " : "Ver preview de "}${getVal(p.titulo)}">
          <div class="proj-card__img-inner">
            <img src="${p.imagem}" alt="${getVal(p.titulo)}" class="proj-card__img-el"
                 loading="${i === 0 ? "eager" : "lazy"}" width="600" height="400"
                 style="object-position: ${p.imgPosition || 'center center'}">
            <div class="proj-card__shine" aria-hidden="true"></div>
            <div class="proj-card__expand" aria-hidden="true">
              <span class="proj-card__expand-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="width:20px;height:20px;display:block"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
              </span>
            </div>
          </div>
        </div>
      </article>`).join("");

    if (typeof createIcons !== "undefined") setTimeout(() => createIcons(), 30);
  }

  // ── Update text on languageChange without breaking GSAP nodes ────────────
  function updateTexts() {
    const isEn = getLang() === "en";

    // 1. Update Chips
    const chipTitles = document.querySelectorAll(".proj-chip__title");
    chipTitles.forEach((el, i) => {
      if (projectsData[i]) el.textContent = getVal(projectsData[i].titulo);
    });

    // 2. Update Cards
    const cards = document.querySelectorAll(".proj-card");
    cards.forEach((card, i) => {
      const p = projectsData[i];
      if (!p) return;

      const levelEl = card.querySelector(".proj-card__tag--level");
      if (levelEl) levelEl.textContent = getVal(p.nivel);

      const titleEl = card.querySelector(".proj-card__title");
      if (titleEl) titleEl.textContent = getVal(p.titulo);

      const descEl = card.querySelector(".proj-card__desc");
      if (descEl) descEl.textContent = getVal(p.descricao);

      const destaqueTextEl = card.querySelector(".proj-card__destaque span:last-child");
      if (destaqueTextEl) destaqueTextEl.textContent = getVal(p.destaque);

      const btnSpan = card.querySelector(".proj-card__btn span");
      if (btnSpan) btnSpan.textContent = t("projects.button.access", isEn ? "Access Project" : "Acessar Projeto");

      const imgContainer = card.querySelector(".proj-card__img");
      if (imgContainer) {
        imgContainer.setAttribute("aria-label", (isEn ? "View preview of " : "Ver preview de ") + getVal(p.titulo));
        imgContainer.setAttribute("data-preview-alt", getVal(p.titulo));
      }

      const imgEl = card.querySelector(".proj-card__img-el");
      if (imgEl) imgEl.setAttribute("alt", getVal(p.titulo));
    });
  }

  window.addEventListener("languageChange", updateTexts);

  // ── Modal desktop ────────────────────────────────────────────────────────
  function openModal(src, alt) {
    const modal = document.getElementById("proj-modal");
    const img   = document.getElementById("proj-modal-img");
    if (!modal || !img) return;
    img.src = src; img.alt = alt || "Preview";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => modal.classList.add("is-open"));
  }
  function closeModal() {
    const modal = document.getElementById("proj-modal");
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.addEventListener("transitionend", () => {
      modal.hidden = true;
      document.body.style.overflow = "";
      const img = document.getElementById("proj-modal-img");
      if (img) img.src = "";
    }, { once: true });
  }
  function setupModal() {
    const modal    = document.getElementById("proj-modal");
    const closeBtn = document.getElementById("proj-modal-close");
    if (!modal) return;
    closeBtn?.addEventListener("click", closeModal);
    modal.querySelector(".proj-modal__backdrop")?.addEventListener("click", closeModal);
    document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });
  }

  // ── Bottom Sheet mobile ──────────────────────────────────────────────────
  function openSheet(src, alt) {
    const sheet = document.getElementById("proj-bs");
    const img   = document.getElementById("proj-bs-img");
    if (!sheet || !img) return;
    img.src = src; img.alt = alt || "Preview";
    sheet.hidden = false;
    document.body.style.overflow = "hidden";
    sheet.getBoundingClientRect();
    sheet.classList.add("is-open");
  }
  function closeSheet() {
    const sheet   = document.getElementById("proj-bs");
    const sheetEl = sheet?.querySelector(".proj-bs__sheet");
    if (!sheet) return;
    if (sheetEl) { sheetEl.style.transform = ""; sheetEl.style.transition = ""; }
    sheet.classList.remove("is-open");
    document.body.style.overflow = "";
    sheetEl?.addEventListener("transitionend", () => {
      sheet.hidden = true;
      const img = document.getElementById("proj-bs-img");
      if (img) img.src = "";
    }, { once: true });
  }
  function setupBottomSheet() {
    const sheet   = document.getElementById("proj-bs");
    const sheetEl = sheet?.querySelector(".proj-bs__sheet");
    const bodyEl  = sheet?.querySelector(".proj-bs__body");
    if (!sheet) return;
    sheet.querySelector(".proj-bs__backdrop")?.addEventListener("click", closeSheet);
    let startY = 0, currentY = 0, dragging = false;
    sheetEl?.addEventListener("touchstart", e => {
      if ((bodyEl?.scrollTop ?? 0) !== 0 && !e.target.closest("#proj-bs-handle")) return;
      startY = e.touches[0].clientY; dragging = true;
    }, { passive: true });
    sheetEl?.addEventListener("touchmove", e => {
      if (!dragging || !sheetEl) return;
      const dy = e.touches[0].clientY - startY;
      if (dy <= 0) return;
      if (e.cancelable) e.preventDefault();
      currentY = dy;
      sheetEl.style.transform = `translateY(${currentY}px)`;
      sheetEl.style.transition = "none";
    }, { passive: false });
    sheetEl?.addEventListener("touchend", () => {
      if (!dragging || !sheetEl) return;
      sheetEl.style.transition = "";
      if (currentY > 120) closeSheet(); else sheetEl.style.transform = "translateY(0)";
      dragging = false; currentY = 0;
    });
  }

  // ── Preview bind ─────────────────────────────────────────────────────────
  function bindPreviews() {
    document.querySelectorAll(".proj-card__img").forEach(trigger => {
      const open = () => {
        const src = trigger.getAttribute("data-preview-src");
        const alt = trigger.getAttribute("data-preview-alt");
        if (!src) return;
        window.matchMedia("(max-width: 860px)").matches ? openSheet(src, alt) : openModal(src, alt);
      };
      trigger.addEventListener("click", open);
      trigger.addEventListener("keydown", e => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
    });
  }

  // ── GSAP — tradução fiel do Projetos.astro ───────────────────────────────
  function initGSAP() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const section  = document.getElementById("projetos");
    const projBody = document.getElementById("proj-body");
    const stage    = document.getElementById("proj-stage");
    const header   = document.getElementById("proj-header");
    if (!section || !projBody || !stage || !header) return;

    const dotSlots = gsap.utils.toArray("[data-proj-row]", section);
    const cards    = gsap.utils.toArray(".proj-card", section);
    const TOTAL    = cards.length;
    if (TOTAL === 0) return;

    // ── Entrada do header (fiel ao original) ─────────────────────────────
    if (!prefersReduced) {
      const badge   = header.querySelector(".proj-hd-badge");
      const line1   = header.querySelector(".proj-hd-line1");
      const line2   = header.querySelector(".proj-hd-line2");
      const sub     = header.querySelector(".proj-hd-sub");
      const chips   = header.querySelectorAll(".proj-chip");
      const hint    = document.getElementById("proj-scroll-hint");

      // Estado inicial
      gsap.set(badge,          { scale: 0.85, opacity: 0 });
      gsap.set([line1, line2], { filter: "blur(8px)", y: 18, opacity: 0 });
      gsap.set(sub,            { y: 16, filter: "blur(4px)", opacity: 0 });
      gsap.set(chips,          { scale: 0.92, y: 16, opacity: 0 });
      if (hint) gsap.set(hint, { opacity: 0 });

      // Timeline de entrada
      const entryTl = gsap.timeline({ delay: 0.1 });
      entryTl
        .to(badge,   { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.8)" })
        .to(line1,   { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out" }, "-=0.25")
        .to(line2,   { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.75, ease: "power3.out" }, "-=0.45")
        .to(sub,     { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }, "-=0.35")
        .to(chips,   { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.4)", stagger: { amount: 0.25, from: "center" } }, "-=0.2")
        .to(hint,    { opacity: 1, duration: 0.7, ease: "power2.out" }, "-=0.1");

      // Shimmer sutil nos chips
      chips.forEach((chip, i) => {
        const shimmer = document.createElement("div");
        shimmer.setAttribute("aria-hidden", "true");
        shimmer.style.cssText = "position:absolute;inset:0;border-radius:inherit;pointer-events:none;" +
          "background:linear-gradient(105deg,transparent 35%,rgba(255,255,255,0.12) 50%,transparent 65%);" +
          "transform:translateX(-110%);z-index:2;";
        chip.style.position = "relative";
        chip.style.overflow = "hidden";
        chip.appendChild(shimmer);
        gsap.to(shimmer, {
          x: "110%", duration: 0.8, ease: "power2.inOut", delay: 0.15 + i * 0.1,
          onComplete: () => shimmer.remove(),
        });
      });

      // Scroll hint some ao rolar
      let hintHidden = false;
      const hideHint = () => {
        if (hintHidden) return;
        hintHidden = true;
        gsap.to(hint, { opacity: 0, duration: 0.4 });
        window.removeEventListener("scroll", hideHint, { capture: true });
      };
      window.addEventListener("scroll", hideHint, { passive: true, capture: true });

    } else {
      header.querySelectorAll(".proj-hd-badge,.proj-hd-line1,.proj-hd-line2,.proj-hd-sub,.proj-chip")
        .forEach(el => { el.style.opacity = "1"; el.style.transform = "none"; });
      const hint = document.getElementById("proj-scroll-hint");
      if (hint) hint.style.opacity = "1";
    }

    const mm = gsap.matchMedia();

    // ── DESKTOP: pin — lógica 100% fiel ao Projetos.astro ────────────────
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {

      // 1. Altura proporcional e equilibrada do card
      const navH  = document.querySelector("header")?.offsetHeight ?? 60;
      const maxAllowedH = Math.min(520, window.innerHeight - navH - 50);
      const cardH = Math.max(480, maxAllowedH);
      const topPx = navH + Math.max(16, Math.round((window.innerHeight - navH - cardH) / 2));

      // 2. Fixa a altura do stage
      stage.style.height = cardH + "px";

      // 3. Altura dos slots dos dots
      const slotH = Math.round(cardH / TOTAL);
      document.querySelectorAll(".proj-dot-slot").forEach(s => {
        s.style.setProperty("--slot-h", slotH + "px");
      });

      // 4. Linhas fixas centralizadas na sidebar
      const sidebar    = document.getElementById("proj-sidebar");
      const trackLine  = document.getElementById("proj-track-line");
      const lineActive = document.getElementById("proj-line-active");

      const syncLinePos = () => {
        if (!sidebar) return;
        const rect = sidebar.getBoundingClientRect();
        const cx   = rect.left + rect.width / 2;
        if (trackLine)  trackLine.style.left  = cx + "px";
        if (lineActive) lineActive.style.left = cx + "px";
      };
      syncLinePos();
      window.addEventListener("resize", syncLinePos);

      // 5. Configura section e projBody — IGUAL AO ORIGINAL
      gsap.set(section,  { minHeight: "100vh" });
      gsap.set(projBody, { position: "absolute", top: 0, left: 0, width: "100%", height: "100vh", autoAlpha: 0 });

      // 6. Padding do proj-inner para centralizar o card
      const inner = document.querySelector(".proj-inner");
      if (inner) {
        inner.style.paddingTop    = topPx + "px";
        inner.style.paddingBottom = topPx + "px";
      }

      // 7. Cards empilhados — IGUAL AO ORIGINAL (height: "100%" do stage)
      gsap.set(cards,    { position: "absolute", top: 0, left: 0, right: 0, height: "100%", autoAlpha: 0, y: 60 });
      gsap.set(cards[0], { autoAlpha: 1, y: 0 });
      dotSlots[0]?.classList.add("is-active");

      // 8. Timeline com pin — SEM anticipatePin (esse era o bug da Skills)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + (window.innerHeight * (TOTAL + 1.5)),
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
        },
      });

      // Header sai, body entra
      tl.to(header,   { autoAlpha: 0, y: -60, scale: 0.97, filter: "blur(6px)", duration: 1.4, ease: "power2.inOut" });
      tl.to(projBody, { autoAlpha: 1, duration: 1.0, ease: "power2.out" }, "-=0.85");
      tl.fromTo(cards[0], { y: 30, scale: 0.98 }, { y: 0, scale: 1, duration: 0.6, ease: "power2.out" }, "-=0.4");

      const seqStart   = tl.duration();
      // totalDur: dão tempo suficiente para animar todos os cards + buffer final
      const totalDur   = (TOTAL - 1) * 2 + 0.5;

      // Linha de progresso + dots — dot i está na posição (i+0.5)/TOTAL do track.
      // O card i+1 deve aparecer quando a linha PASSA o dot i+1,
      // ou seja, quando progress >= (i+1.5)/TOTAL.
      const tracker = { progress: 0 };
      tl.to(tracker, {
        progress: 1, ease: "none", duration: totalDur,
        onUpdate: () => {
          if (lineActive) lineActive.style.transform = "scaleY(" + tracker.progress + ")";
          let idx = 0;
          for (let i = 0; i < TOTAL - 1; i++) {
            if (tracker.progress >= (i + 1.5) / TOTAL) idx = i + 1;
          }
          dotSlots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
        },
      }, seqStart);

      // Sequência dos cards — troca exatamente quando a linha atinge o próximo dot
      for (let i = 0; i < TOTAL - 1; i++) {
        const sw = seqStart + ((i + 1.5) / TOTAL) * totalDur;
        tl.to(cards[i],
          { autoAlpha: 0, y: -55, scale: 0.97, filter: "blur(4px)", duration: 0.55, ease: "power2.inOut" },
          sw);
        tl.fromTo(cards[i + 1],
          { autoAlpha: 0, y: 55, scale: 0.98, filter: "blur(6px)" },
          { autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 0.65, ease: "power2.out" },
          sw + 0.12);
      }
      tl.to({}, { duration: 0.3 }); // buffer final

      return () => {
        window.removeEventListener("resize", syncLinePos);
        if (inner) { inner.style.paddingTop = ""; inner.style.paddingBottom = ""; }
        stage.style.height = "";
        document.querySelectorAll(".proj-dot-slot").forEach(s => s.style.removeProperty("--slot-h"));
        dotSlots.forEach(d => d.classList.remove("is-active"));
        gsap.set(cards,    { clearProps: "all" });
        gsap.set(section,  { clearProps: "all" });
        gsap.set(projBody, { clearProps: "all" });
        gsap.set(header,   { clearProps: "all" });
      };
    });

    // ── Mobile / reduced-motion ───────────────────────────────────────────
    mm.add("(max-width: 1023px), (prefers-reduced-motion: reduce)", () => {
      if (prefersReduced) { gsap.set(cards, { clearProps: "all" }); return; }
      gsap.set(cards, { autoAlpha: 0, y: 40 });
      cards.forEach(card => {
        gsap.to(card, {
          autoAlpha: 1, y: 0, duration: 0.75, ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 85%" },
        });
      });
      return () => gsap.set(cards, { clearProps: "all" });
    });

    // ── Hover shine ───────────────────────────────────────────────────────
    document.querySelectorAll(".proj-card__img").forEach(panel => {
      const shine  = panel.querySelector(".proj-card__shine");
      const expand = panel.querySelector(".proj-card__expand");
      if (!shine || !expand) return;
      panel.addEventListener("mouseenter", () => {
        if (!prefersReduced) gsap.fromTo(shine, { x: "-120%" }, { x: "120%", duration: 1.1, ease: "power2.inOut" });
        gsap.to(expand, { opacity: 1, duration: 0.25 });
      });
      panel.addEventListener("mouseleave", () => gsap.to(expand, { opacity: 0, duration: 0.2 }));
    });

    // ── Hover borda colorida ──────────────────────────────────────────────
    cards.forEach(card => {
      const cor = card.style.getPropertyValue("--cor");
      card.addEventListener("mouseenter", () => {
        card.style.borderColor = "color-mix(in srgb," + cor + " 35%,rgba(255,255,255,0.07))";
        card.style.boxShadow   = "0 35px 65px -25px color-mix(in srgb," + cor + " 20%,rgba(0,0,0,0.75))";
      });
      card.addEventListener("mouseleave", () => {
        card.style.borderColor = "";
        card.style.boxShadow   = "";
      });
    });
  }

  // ── Boot ─────────────────────────────────────────────────────────────────
  function init() {
    renderChips();
    renderDots();
    renderCards();
    setupModal();
    setupBottomSheet();
    bindPreviews();
    // GSAP adiado para window.load: ícones e imagens já pintados → medições corretas
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // GSAP inicia após window.load + rAF: sem refresh() necessário,
  // sem dessincronia entre dots e cards.
  window.addEventListener("load", () => {
    requestAnimationFrame(() => initGSAP());
  });

})();

