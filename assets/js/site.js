/* =========================================================
   Frontier Risk Lab — shared header/footer and content rendering
   ========================================================= */
(function () {
  "use strict";

  var LAB = window.LAB || {};
  var DIRECTORS = (LAB.people && LAB.people.directors) || [];
  var EMAIL = (DIRECTORS[0] && DIRECTORS[0].email) || "";
  LAB.contactEmail = EMAIL;

  var NAV = [
    ["about.html", "About"],
    ["research.html", "Research"],
    ["projects.html", "Projects"],
    ["publications.html", "Publications"],
    ["people.html", "People"],
    ["data.html", "Data & Tools"],
    ["news.html", "News & Events"]
  ];

  var MARK =
    '<svg class="brand-mark" viewBox="0 0 48 48" aria-hidden="true">' +
    '<rect width="48" height="48" rx="12" fill="#006633"/>' +
    '<path d="M24 9 37 16.5v15L24 39 11 31.5v-15Z" fill="none" stroke="#FFCC33" stroke-width="2.4" stroke-linejoin="round"/>' +
    '<path d="M24 9v15m0 0 13 7.5M24 24 11 31.5" stroke="#fff" stroke-opacity=".55" stroke-width="1.6"/>' +
    '<circle cx="24" cy="24" r="3.6" fill="#FFCC33"/></svg>';

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function currentPage() {
    var p = location.pathname.split("/").pop();
    return p === "" ? "index.html" : p;
  }

  function brand() {
    return '<a class="brand" href="index.html" aria-label="Frontier Risk Lab home">' + MARK +
      '<span class="brand-text"><span class="brand-name">Frontier Risk Lab</span>' +
      '<span class="brand-sub">George Mason University</span></span></a>';
  }

  function renderHeader() {
    var el = document.getElementById("site-header");
    if (!el) return;
    var page = currentPage();
    var links = NAV.map(function (n) {
      return '<a href="' + n[0] + '"' + (page === n[0] ? ' aria-current="page"' : "") + ">" + n[1] + "</a>";
    }).join("");
    links += '<a class="nav-cta" href="join.html"' + (page === "join.html" ? ' aria-current="page"' : "") + ">Get Involved</a>";

    el.outerHTML =
      '<a class="skip-link" href="#main">Skip to content</a>' +
      '<div class="utility-bar"><div class="container">' +
      '<span class="gmu">George Mason University<span class="util-tag"> <span>·</span> Sustainable &amp; Secure Finance</span></span>' +
      '<span class="util-links">' + (EMAIL ? '<a href="mailto:' + esc(EMAIL) + '">' + esc(EMAIL) + "</a>" : "") + "</span>" +
      "</div></div>" +
      '<header class="site-header"><div class="container">' + brand() +
      '<button class="nav-toggle" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>' +
      '<nav class="nav" id="primary-nav" aria-label="Primary">' + links + "</nav>" +
      "</div></header>";

    var btn = document.querySelector(".nav-toggle");
    var nav = document.getElementById("primary-nav");
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function renderFooter() {
    var el = document.getElementById("site-footer");
    if (!el) return;
    var p = LAB.pillars || {};
    var year = new Date().getFullYear();
    el.outerHTML =
      '<footer class="site-footer"><div class="container">' +
      '<div class="footer-grid">' +
      "<div>" + brand() +
      '<p class="footer-about">Rigorous research on the emerging risks reshaping finance: climate, health, cyber, and frontier technology.</p></div>' +
      "<div><h4>Research</h4><ul>" +
      Object.keys(p).map(function (k) { return '<li><a href="' + p[k].url + '">' + esc(p[k].name) + "</a></li>"; }).join("") +
      '<li><a href="projects.html">All projects</a></li></ul></div>' +
      '<div><h4>Explore</h4><ul><li><a href="about.html">About</a></li><li><a href="people.html">People</a></li>' +
      '<li><a href="publications.html">Publications</a></li><li><a href="data.html">Data &amp; Tools</a></li>' +
      '<li><a href="news.html">News &amp; Events</a></li></ul></div>' +
      "<div><h4>Contact</h4><ul>" +
      (EMAIL ? '<li><a href="mailto:' + esc(EMAIL) + '">' + esc(EMAIL) + "</a></li>" : "") +
      "<li>Costello College of Business</li><li>George Mason University</li><li>4400 University Drive, Fairfax, VA 22030</li>" +
      '<li style="margin-top:14px"><a href="join.html">Get involved →</a></li></ul></div>' +
      "</div>" +
      '<div class="footer-bottom"><span>© ' + year + " Frontier Risk Lab · George Mason University</span>" +
      "<span>Sustainable &amp; Secure Finance</span></div>" +
      "</div></footer>";
  }

  /* ---------- content renderers ---------- */
  function chip(k) {
    var p = (LAB.pillars || {})[k];
    return p ? '<span class="chip ' + k + '"><span class="dot"></span>' + esc(p.name) + "</span>" : "";
  }

  function projectCard(pr) {
    return '<article class="card project-card reveal" data-pillars="' + esc(pr.pillars.join(" ")) + '">' +
      '<div class="chips">' + pr.pillars.map(chip).join("") +
      (pr.status ? '<span class="chip status">' + esc(pr.status) + "</span>" : "") + "</div>" +
      "<h3>" + esc(pr.title) + "</h3><p>" + esc(pr.summary) + "</p></article>";
  }

  function renderProjects(el) {
    var list = (LAB.projects || []).slice();
    var only = el.getAttribute("data-pillar");
    if (only) list = list.filter(function (p) { return p.pillars.indexOf(only) !== -1; });
    if (el.hasAttribute("data-skip-featured")) list = list.filter(function (p) { return !p.featured; });
    var limit = parseInt(el.getAttribute("data-limit"), 10);
    if (limit) list = list.slice(0, limit);
    el.innerHTML = list.map(projectCard).join("");
  }

  function fmtDate(d) {
    if (!/^\d{4}-\d{2}/.test(d)) return esc(d);
    var parts = d.split("-");
    var m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][parseInt(parts[1], 10) - 1];
    return (parts[2] ? m + " " + parseInt(parts[2], 10) : m) + "<br>" + parts[0];
  }

  function renderNews(el) {
    var list = LAB.news || [];
    var limit = parseInt(el.getAttribute("data-limit"), 10);
    if (limit) list = list.slice(0, limit);
    el.innerHTML = list.map(function (n) {
      return '<article class="news-item reveal"><div class="news-date">' + fmtDate(n.date) +
        "<small>" + esc(n.type) + "</small></div><div><h3>" + esc(n.title) + "</h3><p>" + esc(n.text) + "</p></div></article>";
    }).join("");
  }

  function renderPublications(el) {
    var list = LAB.publications || [];
    if (!list.length) {
      el.innerHTML = '<div class="empty-state"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h11l5 5v11H4z"/><path d="M15 4v5h5M8 13h8M8 17h5"/></svg>' +
        "<h3>Publications coming soon</h3><p>Papers and working papers from lab members will be listed here, tagged by research pillar.</p></div>";
      return;
    }
    list = list.slice().sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
    el.innerHTML = list.map(function (p) {
      return '<article class="pub" data-pillars="' + esc((p.pillars || []).join(" ")) + '"><h3>' +
        (p.url ? '<a href="' + esc(p.url) + '">' + esc(p.title) + "</a>" : esc(p.title)) + "</h3>" +
        '<div class="meta">' + esc(p.authors) + " · <em>" + esc(p.venue) + "</em>" + (p.year ? ", " + esc(p.year) : "") + "</div>" +
        '<div class="chips">' + (p.pillars || []).map(chip).join("") + "</div></article>";
    }).join("");
  }

  function linkBtns(links, email) {
    var out = (links || []).map(function (l) {
      return '<a class="btn btn-outline" href="' + esc(l.url) + '">' + esc(l.label) + "</a>";
    });
    if (email) out.unshift('<a class="btn btn-green" href="mailto:' + esc(email) + '">Email</a>');
    return out.length ? '<div class="person-links">' + out.join("") + "</div>" : "";
  }

  function renderPeople() {
    var P = LAB.people || {};
    var dirEl = document.querySelector('[data-render="directors"]');
    if (dirEl) {
      dirEl.innerHTML = DIRECTORS.map(function (d) {
        return '<div class="person reveal"><div class="avatar" aria-hidden="true">' + esc(d.initials) + "</div><div>" +
          '<div class="eyebrow">' + esc(d.role) + "</div><h2>" + esc(d.name) + '</h2><div class="role">' + esc(d.affiliation) + "</div>" +
          "<p>" + esc(d.bio) + "</p>" + linkBtns(d.links, d.email) + "</div></div>";
      }).join("");
    }
    var facEl = document.querySelector('[data-render="faculty"]');
    if (facEl) {
      facEl.innerHTML = (P.faculty || []).map(function (f) {
        return '<article class="card reveal"><div class="avatar sm" aria-hidden="true">' + esc(f.initials) + "</div>" +
          '<h3 style="margin-top:18px">' + esc(f.name) + '</h3><div class="role" style="color:var(--green);font-weight:600;margin-bottom:8px">' + esc(f.role) + "</div>" +
          '<p class="muted" style="margin-bottom:6px">' + esc(f.affiliation) + "</p><p>" + esc(f.bio) + "</p>" + linkBtns(f.links) + "</article>";
      }).join("") +
        '<article class="card open-card reveal"><h3>Join as affiliated faculty</h3><p>We welcome colleagues across finance, computing, cybersecurity, public health, and policy.</p>' +
        '<div class="card-foot"><a class="link-arrow" href="join.html">Get involved</a></div></article>';
    }
    var stEl = document.querySelector('[data-render="students"]');
    if (stEl) {
      stEl.innerHTML = (P.students || []).map(function (s) {
        return '<article class="card reveal"><div class="avatar sm" aria-hidden="true">' + esc(s.initials) + "</div>" +
          '<h3 style="margin-top:18px">' + esc(s.name) + '</h3><div style="color:var(--green);font-weight:600;margin-bottom:6px">' + esc(s.role) + "</div>" +
          '<p class="muted" style="margin:0">' + esc(s.program) + "<br>" + esc(s.focus) + "</p></article>";
      }).join("");
    }
  }

  /* ---------- filters ---------- */
  function setupFilters() {
    document.querySelectorAll("[data-filter-for]").forEach(function (bar) {
      var target = document.getElementById(bar.getAttribute("data-filter-for"));
      var p = LAB.pillars || {};
      var keys = ["all"].concat(Object.keys(p));
      bar.innerHTML = keys.map(function (k) {
        return '<button class="filter-btn" data-k="' + k + '" aria-pressed="' + (k === "all") + '">' + (k === "all" ? "All" : esc(p[k].name)) + "</button>";
      }).join("");
      bar.addEventListener("click", function (e) {
        var b = e.target.closest(".filter-btn");
        if (!b) return;
        var k = b.getAttribute("data-k");
        bar.querySelectorAll(".filter-btn").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
        target.querySelectorAll("[data-pillars]").forEach(function (item) {
          item.style.display = k === "all" || item.getAttribute("data-pillars").split(" ").indexOf(k) !== -1 ? "" : "none";
        });
      });
    });
  }

  function setupReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (i) { i.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (i) { io.observe(i); });
  }

  renderHeader();
  renderFooter();
  document.querySelectorAll('[data-render="projects"]').forEach(renderProjects);
  document.querySelectorAll('[data-render="news"]').forEach(renderNews);
  document.querySelectorAll('[data-render="publications"]').forEach(renderPublications);
  renderPeople();
  setupFilters();
  setupReveal();
})();
