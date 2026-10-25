(() => {
  const editToggle = document.querySelector("#editToggle");
  const doneEditing = document.querySelector("#doneEditing");
  const editHint = document.querySelector("#editHint");
  const editable = [...document.querySelectorAll("main h1, main h2, main h3, main p, main .eyebrow, main .skill-level, main .timeline-date, main .tags span, main .template-info span")];
  const legacyEditable = editable.filter((element) => !element.closest("[data-new-project]"));
  const storageKey = "ahmed-portfolio-copy-v1";
  let editing = false;

  const keyCounts = new Map();
  editable.forEach((element) => {
    const section = element.closest("section[id]")?.id || "main";
    const tag = element.tagName.toLowerCase();
    const countKey = `${section}:${tag}`;
    const index = keyCounts.get(countKey) || 0;
    keyCounts.set(countKey, index + 1);
    element.dataset.editable = "true";
    element.dataset.editId = `${countKey}:${index}`;
  });

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
    editable.forEach((element) => {
      const savedValue = saved[element.dataset.editId];
      if (typeof savedValue === "string") {
        element.innerHTML = savedValue;
        return;
      }
      // Read edits saved by the previous index-based version without shifting them.
      if (!element.closest("[data-new-project]")) {
        const legacyIndex = legacyEditable.indexOf(element);
        if (typeof saved[legacyIndex] === "string") element.innerHTML = saved[legacyIndex];
      }
    });
  } catch {
    // The site still works if browser storage is disabled or unavailable.
  }

  function setEditing(value) {
    editing = value;
    document.body.classList.toggle("editing", editing);
    editToggle.setAttribute("aria-pressed", String(editing));
    editToggle.innerHTML = editing ? "✓ &nbsp;Enregistrer" : "✎ &nbsp;Modifier le contenu";
    editHint.classList.toggle("visible", editing);
    editable.forEach((element) => { element.contentEditable = String(editing); });
    if (!editing) {
      const saved = Object.fromEntries(editable.map((element) => [element.dataset.editId, element.innerHTML]));
      try { localStorage.setItem(storageKey, JSON.stringify(saved)); } catch { /* Keep edits visible for this visit. */ }
    }
  }

  editToggle.addEventListener("click", () => setEditing(!editing));
  doneEditing.addEventListener("click", () => setEditing(false));
  document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.querySelector("#mainNav");
      if (menu.classList.contains("show") && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    });
  });

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".navbar-nav .nav-link")];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === "#" + entry.target.id;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((section) => observer.observe(section));
})();
