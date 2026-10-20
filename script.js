(() => {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (sel) => document.querySelector(sel);

  const escapeHTML = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Theme toggle ---------- */
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  $("#themeToggle").addEventListener("click", () => {
    const current = root.dataset.theme || (prefersDark.matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- Nav ---------- */
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const menuToggle = $("#menuToggle");
  const navLinks = $("#navLinks");
  const setMenu = (open) => {
    navLinks.classList.toggle("is-open", open);
    nav.classList.toggle("menu-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  menuToggle.addEventListener("click", () => setMenu(!navLinks.classList.contains("is-open")));
  navLinks.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("click", (e) => { if (!nav.contains(e.target)) setMenu(false); });

  const links = [...navLinks.querySelectorAll("a")];
  const spy = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("is-active", a.hash === `#${entry.target.id}`));
    }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  links.forEach((a) => { const s = document.querySelector(a.hash); if (s) spy.observe(s); });

  /* ---------- Hero word rotator ---------- */
  const words = [...document.querySelectorAll(".rotator > span")];
  if (words.length && !reducedMotion) {
    let i = 0;
    setInterval(() => {
      const prev = words[i];
      i = (i + 1) % words.length;
      prev.classList.remove("is-active");
      prev.classList.add("is-leaving");
      setTimeout(() => prev.classList.remove("is-leaving"), 500);
      words[i].classList.add("is-active");
    }, 2200);
  }

  /* ---------- Projects ---------- */
  // Company mark, plus any words the mark itself doesn't already say.
  const logoChip = (p) => {
    if (!p.logo) return `<span class="cover__tag">${escapeHTML(p.org)}</span>`;
    const alt = p.logoAlt ? escapeHTML(p.logoAlt) : "";
    const mark = `<img src="assets/logos/${encodeURIComponent(p.logo)}" alt="${alt}"${alt ? "" : ' aria-hidden="true"'} />`;
    const text = p.chipText ? `<span>${escapeHTML(p.chipText)}</span>` : "";
    return `<span class="cover__logo">${mark}${text}</span>`;
  };

  const projects = window.PROJECTS || [];
  const grid = $("#grid");

  grid.innerHTML = projects.map((p) => `
    <a class="card reveal" href="#project/${p.id}" data-id="${p.id}"
       aria-label="${escapeHTML(p.title)} — view details">
      <div class="card__cover cover--${p.cover}">
        <div class="cover__top">
          ${logoChip(p)}
          ${p.award ? `<span class="cover__award">★ Award</span>` : ""}
        </div>
        <div class="cover__metric">
          <strong>${escapeHTML(p.metric)}</strong>
          <span>${escapeHTML(p.metricLabel)}</span>
        </div>
      </div>
      <p class="card__meta">${escapeHTML(p.org)} / ${escapeHTML(p.year)}</p>
      <h3 class="card__title">${escapeHTML(p.title)}<span class="go" aria-hidden="true">→</span></h3>
      <ul class="tags">${p.tags.slice(0, 3).map((t) => `<li>${escapeHTML(t)}</li>`).join("")}${
        p.tags.length > 3 ? `<li>+${p.tags.length - 3}</li>` : ""}</ul>
    </a>`).join("");

  const cards = [...grid.children];
  const count = $("#count");
  const empty = $("#empty");
  const search = $("#search");
  let filter = "all";

  const applyFilters = () => {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    cards.forEach((card, idx) => {
      const p = projects[idx];
      const haystack = [p.title, p.subtitle, p.org, p.summary, ...p.tags].join(" ").toLowerCase();
      const visible = (filter === "all" || p.cats.includes(filter)) && (!q || haystack.includes(q));
      card.hidden = !visible;
      if (visible) { shown++; card.classList.add("is-visible"); }
    });
    count.textContent = `${shown} / ${projects.length} projects`;
    empty.hidden = shown > 0;
  };

  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      filter = chip.dataset.filter;
      document.querySelectorAll(".chip").forEach((c) => {
        c.classList.toggle("is-active", c === chip);
        c.setAttribute("aria-pressed", String(c === chip));
      });
      applyFilters();
    });
  });
  search.addEventListener("input", applyFilters);
  count.textContent = `${projects.length} / ${projects.length} projects`;

  /* ---------- Project modal ---------- */
  const modal = $("#modal");
  const modalBody = $("#modalBody");
  let lastFocus = null;

  const renderModal = (p) => `
    <div class="modal__cover cover--${p.cover}">
      <button class="modal__close" type="button" aria-label="Close">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
      </button>
      <div class="cover__top">
        ${logoChip(p)}
        ${p.award ? `<span class="cover__award">★ ${escapeHTML(p.award)}</span>` : ""}
      </div>
      <div class="cover__metric">
        <strong>${escapeHTML(p.metric)}</strong>
        <span>${escapeHTML(p.metricLabel)}</span>
      </div>
    </div>
    <div class="modal__content">
      <p class="modal__meta">${escapeHTML(p.org)} / ${escapeHTML(p.year)}</p>
      <h2 class="modal__title" id="modalTitle">${escapeHTML(p.title)}</h2>
      <p class="modal__subtitle">${escapeHTML(p.subtitle)}</p>
      <p class="modal__summary">${escapeHTML(p.summary)}</p>
      <div class="modal__block"><h3>Context</h3><p>${escapeHTML(p.context)}</p></div>
      <div class="modal__block"><h3>What I did</h3><ul>${p.did.map((d) => `<li>${escapeHTML(d)}</li>`).join("")}</ul></div>
      <div class="modal__block"><h3>Outcome</h3><p>${escapeHTML(p.outcome)}</p></div>
      <ul class="tags">${p.tags.map((t) => `<li>${escapeHTML(t)}</li>`).join("")}</ul>
      ${p.links.length ? `<div class="modal__links">${p.links.map((l) =>
        `<a class="btn btn--primary" href="${escapeHTML(l.href)}" target="_blank" rel="noopener">${escapeHTML(l.label)} ↗</a>`).join("")}</div>` : ""}
    </div>`;

  const openProject = (id, { updateHash = true } = {}) => {
    const p = projects.find((x) => x.id === id);
    if (!p) return;
    lastFocus = document.activeElement;
    modalBody.innerHTML = renderModal(p);
    modal.showModal();
    modal.scrollTop = 0;
    document.body.classList.add("modal-open");
    modalBody.querySelector(".modal__close").addEventListener("click", closeProject);
    if (updateHash) history.pushState(null, "", `#project/${id}`);
  };

  function closeProject() {
    if (modal.open) modal.close();
  }

  modal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    if (location.hash.startsWith("#project/")) {
      history.pushState(null, "", `${location.pathname}${location.search}#work`);
    }
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  });
  // Click on the backdrop closes
  modal.addEventListener("click", (e) => { if (e.target === modal) closeProject(); });

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    e.preventDefault();
    openProject(card.dataset.id);
  });

  const syncFromHash = () => {
    const m = location.hash.match(/^#project\/(.+)$/);
    if (m) openProject(m[1], { updateHash: false });
    else closeProject();
  };
  window.addEventListener("popstate", syncFromHash);
  if (location.hash.startsWith("#project/")) syncFromHash();

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll(".reveal");
  const groups = new Map();
  reveals.forEach((el) => {
    const i = groups.get(el.parentElement) || 0;
    el.style.setProperty("--delay", `${(i % 6) * 0.07}s`);
    groups.set(el.parentElement, i + 1);
  });
  const io = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    }),
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  reveals.forEach((el) => io.observe(el));

  /* ---------- Copy email ---------- */
  const toast = $("#toast");
  let toastTimer;
  document.querySelectorAll(".copy-email").forEach((btn) => {
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.email);
        toast.textContent = "Email copied to clipboard";
        toast.classList.add("is-visible");
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2000);
      } catch {
        location.href = `mailto:${btn.dataset.email}`;
      }
    });
  });

  $("#year").textContent = new Date().getFullYear();
})();
