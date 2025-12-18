// ==============================
// Checklist data (same as before)
// ==============================
const CHECKLIST_SECTIONS = [
  {
    id: "cover-notices",
    title: "1. Cover Page & Notices",
    description: "",
    items: [
      {
        id: "cov-compare-go-list",
        label:
          'Cover Page: Compare to Go List (Job No., FAP No., job name, highway route/section (CRs only for SA jobs), county(ies), "Edition of 2014").',
      },
      {
        id: "cov-caution-bidders",
        label: "Caution to Bidders (Rev. 4/7/2022).",
      },
      {
        id: "cov-nondiscrimination",
        label: "Notice of Nondiscrimination (Rev. 8/4/2025).",
      },
      {
        id: "cov-title-vi",
        label:
          "Title VI Contract Provisions, Appendix A & E (Assurances) (Rev. 5/11/2016).",
      },
      {
        id: "cov-errata",
        label: "Errata (9/13/2018).",
      },
    ],
  },
  {
    id: "proposal-form",
    title: "2. Proposal Form",
    description: "",
    items: [
      {
        id: "pf-page1",
        label:
          'Page 1: Check for "Edition of 2014" and "Proposal Form" (single sided).',
      },
      {
        id: "pf-pages2-3",
        label:
          "Pages 2 & 3: Description of work, route/section (CR for SA jobs), Job No., FAP No., job name, project length (compare to NET length on plans), bid opening time and date. (Letting time should be 10:00 or 1:30).",
      },
      {
        id: "pf-job-scope",
        label:
          "Job Scope: Compare job description on Page 2 to Staff Minutes Type Work. The work being done should be the same.",
      },
    ],
  },
  {
    id: "plans",
    title: "3. Plans",
    description: "",
    items: [
      {
        id: "pl-job-num-sheets-sign",
        label:
          "Check and verify the job number, inclusion of all sheets, and ensure each page is signed by an engineer.",
      },
      {
        id: "pl-drawings",
        label: "Ensure all drawings included.",
      },
    ],
  },
  {
    id: "schedule-of-items",
    title: "4. Schedule of Items",
    description: "",
    items: [
      {
        id: "soi-pay-items-match",
        label:
          "Pay Items:Starting on Page 1 of the schedule of items, compare the schedule to the summary of quantities in the plans. Check item code, description, unit, and quantities all match for all pay items.",
      },
      {
        id: "soi-alternates",
        label: 
          "Alternates on the schedule of items: Ensure correct section naming (A0 - 1, A0 - 2, etc.).",
      },
      {
        id: "soi-last-page",
        label:
          "Last Page: Check the job number, job name, and FAP located on the top left, and if Site Use (A+C) is used, check that the language and blocks to enter Site Use Time in Calendar Days or Working Days (Max. Days __), Site Use Cost, and the Bid Amount for Award Consideration.",
      },
    ],
  },
  {
    id: "certs-lists",
    title: "5. Certifications & Lists",
    description: "",
    items: [
      {
        id: "cl-building-trades",
        label: "Building Trade Subcontractor List (if applicable).",
      },
      {
        id: "cl-anti-collusion",
        label: "Anti-Collusion & Debarment (11/17/2017).",
      },
      {
        id: "cl-boycott-israel",
        label: "Restriction of Boycott of Israel (New Director Heading).",
      },
      {
        id: "cl-fed-aid-certs",
        label:
          'Certification for Federal-aid Contracts and "Have/Have Not" certification (11/17/2017).',
      },
      {
        id: "cl-bidders-list",
        label: "Bidders List (Job no., name, letting date 4/24/2024).",
      },
    ],
  },
  {
    id: "dbe-npdes",
    title: "6. DBE & NPDES",
    description: "",
    items: [
      {
        id: "npdes-dbe-goal",
        label:
          "DBE Goal forms: If a DBE goal was assigned to the project, check the Job Number on the DBE Participation and the Certification to Submit DBE Participation forms. DBE Goal _______%.",
      },
      {
        id: "npdes-cert",
        label:
          "NPDES Certification: If the Storm Water Pollution Prevention Plan SP was included, check the Job Number on Contractorâ€™s Certification Statement.",
      },
    ],
  },
  {
    id: "supp-sp",
    title: "7. Supplemental Specifications & Special Provisions",
    description: "",
    items: [
      {
        id: "supp-site-use-ac",
        label:
          "Site Use (A+C) SP (Should also include Prosecution and Progress SP & Flexible Beg. Of Work SP if A+C).",
      },
      {
        id: "supp-swppp",
        label:
          "SWPPP SP: Storm Water Pollution Prevention Plan SP, if used, find the SP and note the number of disturbed acres__.",
      },
      {
        id: "supp-dbe-goals",
        label: "DBE Goals SP: Goals for DBE Participation SP.",
      },
      {
        id: "supp-verify-all",
        label:
          "Verify all SPs & SSs listed are included, page numbers complete, Job No. correct.",
      },
    ],
  },
  {
    id: "federal-reqs",
    title: "8. Federal Requirements",
    description: "",
    items: [
      {
        id: "fed-fhwa-1273",
        label: "FHWA-1273 (14 pages, 10/23/2023).",
      },
      {
        id: "fed-eeo-notice",
        label:
          "Equal Employment Opportunity - Notice to Contractors (7/26/1996, 1 page).",
      },
      {
        id: "fed-eeo-resp",
        label: "Specific Equal Employment Opportunity Responsibilities (23 U.S.C. 140) (7/26/1996, 3 pages).",
      },
      {
        id: "fed-eeo-goals",
        label: "EEO Goals & Timetables (7/26/1996, 1 page).",
      },
      {
        id: "fed-eeo-standards",
        label: "EEO Federal Standards (7/26/1996, 3 pages).",
      },
      {
        id: "fed-posters-notices",
        label:
          "Posters & Notices Required for Federal-Aid Projects (12/13/2023, 3 pages).",
      },
      {
        id: "fed-wage-rates",
        label: "Wage Rates (6 pages, date differs).",
      },
    ],
  },
];

// ==============================
// State & helpers
// ==============================
const STORAGE_KEY = "ccdChecklistState_v1";
const STATE_EXCLUDE_ITEM_IDS = new Set([
  "cov-title-vi",
  "npdes-dbe-goal",
  "cl-fed-aid-certs",
  "cl-bidders-list",
  "supp-dbe-goals",
]);

const state = {
  items: {}, // itemId -> {checked, note}
};

function getAllItems() {
  return CHECKLIST_SECTIONS.flatMap((sec) => sec.items || []);
}

function getFundingFilteredItems() {
  const isStateFunded = document.getElementById("meta-stateFunded")?.checked;
  return CHECKLIST_SECTIONS.flatMap((sec) => {
    if (isStateFunded && sec.id === "federal-reqs") return [];
    return (sec.items || []).filter((item) => {
      if (isStateFunded && STATE_EXCLUDE_ITEM_IDS.has(item.id)) return false;
      return true;
    });
  });
}

// Collect metadata from the DOM
function collectMetaFromDom() {
  const get = (id) => {
    const el = document.getElementById(id);
    if (!el) return "";
    if (el.type === "checkbox") return !!el.checked;
    return el.value || "";
  };

  return {
    callNo: get("meta-callNo"),
    jobNo: get("meta-jobNo"),
    fapNo: get("meta-fapNo"),
    jobName: get("meta-jobName"),
    routeSection: get("meta-routeSection"),
    county: get("meta-county"),
    district: get("meta-district"),
    lettingTime: get("meta-lettingTime"),
    reviewer: get("meta-reviewer"),
    reviewDate: get("meta-reviewDate"),
    stateFunded: get("meta-stateFunded"),
    federallyFunded: get("meta-federallyFunded"),
    generalComments: get("meta-generalComments"),
  };
}

// Apply metadata to inputs
function applyMetaToDom(meta) {
  const set = (id, value) => {
    const el = document.getElementById(id);
    if (!el || value === undefined) return;
    if (el.type === "checkbox") el.checked = !!value;
    else el.value = value;
  };

  set("meta-callNo", meta.callNo);
  set("meta-jobNo", meta.jobNo);
  set("meta-fapNo", meta.fapNo);
  set("meta-jobName", meta.jobName);
  set("meta-routeSection", meta.routeSection);
  set("meta-county", meta.county);
  set("meta-district", meta.district);
  set("meta-lettingTime", meta.lettingTime);
  set("meta-reviewer", meta.reviewer);
  set("meta-reviewDate", meta.reviewDate);
  set("meta-stateFunded", meta.stateFunded);
  set("meta-federallyFunded", meta.federallyFunded);
  set("meta-generalComments", meta.generalComments);
}

function setTodayReviewDate() {
  const reviewDateEl = document.getElementById("meta-reviewDate");
  if (!reviewDateEl) return;
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  reviewDateEl.value = `${yyyy}-${mm}-${dd}`;
}

function clearForNewProject() {
  state.items = {};
  getAllItems().forEach((item) => {
    state.items[item.id] = { checked: false, note: "" };
  });

  [
    "meta-callNo",
    "meta-jobNo",
    "meta-fapNo",
    "meta-jobName",
    "meta-routeSection",
    "meta-county",
    "meta-district",
    "meta-lettingTime",
    "meta-reviewer",
    "meta-generalComments",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  ["meta-stateFunded", "meta-federallyFunded"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.checked = false;
  });

  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";

  setTodayReviewDate();
  localStorage.removeItem(STORAGE_KEY);

  syncBadges();
  renderChecklist();
  updateProgress();
}

// localStorage
function saveStateToStorage() {
  const data = {
    meta: collectMetaFromDom(),
    items: state.items,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error("Failed to save state", err);
  }
}

function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data.meta) applyMetaToDom(data.meta);
    if (data.items) state.items = data.items;
  } catch (err) {
    console.error("Failed to load state", err);
  }
}

// Progress chips
function updateProgress() {
  const allItems = getFundingFilteredItems();
  const total = allItems.length;
  const checked = allItems.filter(
    (it) => state.items[it.id] && state.items[it.id].checked
  ).length;
  const remaining = total - checked;
  const pct = total ? Math.round((checked / total) * 100) : 0;

  const progressText = document.getElementById("progressText");
  const totalSpan = document.getElementById("stat-total");
  const completeSpan = document.getElementById("stat-complete");
  const remainingSpan = document.getElementById("stat-remaining");

  if (progressText) progressText.textContent = `${checked}/${total} (${pct}%)`;
  if (totalSpan) totalSpan.textContent = total;
  if (completeSpan) completeSpan.textContent = checked;
  if (remainingSpan) remainingSpan.textContent = Math.max(remaining, 0);
}

// Funding badges
function syncBadges() {
  const stateFunded = document.getElementById("meta-stateFunded").checked;
  const fed = document.getElementById("meta-federallyFunded").checked;
  document.getElementById("badge-state").hidden = !stateFunded;
  document.getElementById("badge-fed").hidden = !fed;
}

// ==============================
// Go List autofill (Job No. lookup)
// ==============================
const goListState = { entries: [], byJobNo: {} };
const specListState = { entries: [], byKey: {} };

function normalizeJobNo(value) {
  return (value || "").toString().trim().toUpperCase();
}

function parseCsv(text) {
  const rows = [];
  let current = "";
  let row = [];
  let inQuotes = false;

  const pushCell = () => {
    row.push(current);
    current = "";
  };

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (ch === '"') {
      if (inQuotes && text[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      pushCell();
    } else if ((ch === "\n" || ch === "\r") && !inQuotes) {
      pushCell();
      rows.push(row);
      row = [];
      if (ch === "\r" && text[i + 1] === "\n") i += 1;
    } else {
      current += ch;
    }
  }
  pushCell();
  rows.push(row);
  return rows.filter((r) => r.length && r.some((cell) => cell && cell.trim()));
}

function hydrateGoList(rows) {
  if (!rows.length) return;
  const headers = rows[0].map((h) => h.trim());
  const headerIndex = {};
  headers.forEach((h, idx) => {
    headerIndex[h.toLowerCase()] = idx;
  });
  const getCell = (row, key) => row[headerIndex[key.toLowerCase()]] || "";
  const clean = (value) => (value || "").replace(/\s+/g, " ").trim();

  const entries = rows.slice(1).map((row) => ({
    callNo: clean(getCell(row, "Call No.")),
    jobNo: clean(getCell(row, "Job No.")),
    district: clean(getCell(row, "District")),
    county: clean(getCell(row, "County(ies)")),
    fapNo: clean(getCell(row, "FAP No.")),
    jobName: clean(getCell(row, "Job Name")),
    routeSection: clean(getCell(row, "Route / Section")),
  }));

  goListState.entries = entries.filter((e) => normalizeJobNo(e.jobNo));
  goListState.byJobNo = {};
  goListState.entries.forEach((entry) => {
    const key = normalizeJobNo(entry.jobNo);
    if (!goListState.byJobNo[key]) {
      goListState.byJobNo[key] = entry;
    }
  });
}

function populateJobNoOptions() {
  const datalist = document.getElementById("jobNoOptions");
  if (!datalist) return;
  datalist.innerHTML = "";
  goListState.entries.forEach((entry) => {
    if (!entry.jobNo) return;
    const option = document.createElement("option");
    option.value = entry.jobNo;
    option.textContent = `${entry.jobNo} - ${entry.jobName || "No job name"}`;
    option.label = option.textContent;
    datalist.appendChild(option);
  });
}

function applyGoListMatch(jobNoValue) {
  const match = goListState.byJobNo[normalizeJobNo(jobNoValue)];
  if (!match) return;
  const currentMeta = collectMetaFromDom();
  applyMetaToDom({
    ...currentMeta,
    callNo: match.callNo || currentMeta.callNo,
    jobNo: match.jobNo || currentMeta.jobNo,
    fapNo: match.fapNo || currentMeta.fapNo,
    jobName: match.jobName || currentMeta.jobName,
    routeSection: match.routeSection || currentMeta.routeSection,
    county: match.county || currentMeta.county,
    district: match.district || currentMeta.district,
  });
  saveStateToStorage();
}

async function loadGoListCsv() {
  try {
    const res = await fetch("data/Golist.csv");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    hydrateGoList(parseCsv(text));
    populateJobNoOptions();

    const jobInput = document.getElementById("meta-jobNo");
    if (jobInput && jobInput.value) {
      applyGoListMatch(jobInput.value);
    }
  } catch (err) {
    console.error("Failed to load Go List CSV", err);
  }
}

// ==============================
// SS/SP Where and When list loader
// ==============================
function hydrateSpecList(rows) {
  if (!rows.length) return;
  const headers = rows[0].map((h) => h.trim());
  const headerIndex = {};
  headers.forEach((h, idx) => {
    headerIndex[h.toLowerCase()] = idx;
  });
  const getCell = (row, key) => row[headerIndex[key.toLowerCase()]] || "";
  const clean = (value) => (value || "").replace(/\s+/g, " ").trim();

  const entries = rows.slice(1).map((row) => ({
    category: clean(getCell(row, "Category")),
    number: clean(getCell(row, "Number")),
    title: clean(getCell(row, "Title")),
    currentDate: clean(getCell(row, "Current Date")),
  }));

  specListState.entries = entries.filter((e) => e.number || e.title);
  specListState.byKey = {};
  specListState.entries.forEach((entry) => {
    const keys = [];
    if (entry.number) keys.push(entry.number.toLowerCase());
    if (entry.title) keys.push(entry.title.toLowerCase());
    keys.forEach((k) => {
      if (!specListState.byKey[k]) specListState.byKey[k] = entry;
    });
  });
}

async function loadSpecListCsv() {
  try {
    const res = await fetch("data/WhereandWhenList.csv");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    hydrateSpecList(parseCsv(text));
  } catch (err) {
    console.error("Failed to load WhereandWhenList CSV", err);
  }
}

// ==============================
// Rendering checklist
// ==============================
function renderChecklist() {
  const container = document.getElementById("checklistContainer");
  const query = (document.getElementById("searchInput").value || "")
    .toLowerCase()
    .trim();
  const isStateFunded = document.getElementById("meta-stateFunded")?.checked;

  if (!container) return;
  container.innerHTML = "";

  let anyVisible = false;

  CHECKLIST_SECTIONS.forEach((sec) => {
    const titleMatch = sec.title.toLowerCase().includes(query);
    const descMatch = (sec.description || "").toLowerCase().includes(query);

    if (isStateFunded && sec.id === "federal-reqs") return;

    const filteredItems = (sec.items || []).filter((item) => {
      if (isStateFunded && STATE_EXCLUDE_ITEM_IDS.has(item.id)) return false;
      if (!query) return true;
      const labelMatch = item.label.toLowerCase().includes(query);
      return labelMatch || titleMatch || descMatch;
    });

    if (!filteredItems.length) {
      return;
    }

    anyVisible = true;

    const sectionCard = document.createElement("div");
    sectionCard.className = "section-card";

    const header = document.createElement("div");
    header.className = "section-header";

    const title = document.createElement("div");
    title.className = "section-title";
    title.textContent = sec.title;

    const count = document.createElement("div");
    count.className = "section-count";
    count.textContent = `${filteredItems.length} item${
      filteredItems.length === 1 ? "" : "s"
    }`;

    header.appendChild(title);
    header.appendChild(count);
    sectionCard.appendChild(header);

    if (sec.description) {
      const desc = document.createElement("div");
      desc.className = "section-description";
      desc.textContent = sec.description;
      sectionCard.appendChild(desc);
    }

    filteredItems.forEach((item) => {
      const row = document.createElement("div");
      row.className = "item-row";

      const main = document.createElement("div");
      main.className = "item-main";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "item-checkbox";

      const saved = state.items[item.id] || { checked: false, note: "" };
      checkbox.checked = saved.checked;

      const label = document.createElement("div");
      label.className = "item-label";
      label.textContent = item.label;

      main.appendChild(checkbox);
      main.appendChild(label);
      row.appendChild(main);

      const noteWrap = document.createElement("div");
      noteWrap.className = "item-note";

      const noteLabel = document.createElement("span");
      noteLabel.textContent = "Notes (optional)";

      const noteInput = document.createElement("input");
      noteInput.type = "text";
      noteInput.placeholder = "Quick notes, discrepancies, follow ups";
      noteInput.value = saved.note || "";

      noteWrap.appendChild(noteLabel);
      noteWrap.appendChild(noteInput);
      row.appendChild(noteWrap);

      if (checkbox.checked) {
        row.classList.add("completed");
      }

      checkbox.addEventListener("change", () => {
        const current = state.items[item.id] || { note: noteInput.value || "" };
        current.checked = checkbox.checked;
        state.items[item.id] = current;

        if (checkbox.checked) {
          row.classList.add("completed");
        } else {
          row.classList.remove("completed");
        }
        updateProgress();
        saveStateToStorage();
      });

      noteInput.addEventListener("input", () => {
        const current = state.items[item.id] || { checked: checkbox.checked };
        current.note = noteInput.value;
        state.items[item.id] = current;
        saveStateToStorage();
      });

      sectionCard.appendChild(row);
    });

    container.appendChild(sectionCard);
  });

  if (!anyVisible) {
    const msg = document.createElement("div");
    msg.className = "empty-message";
    msg.textContent =
      "No checklist items match your search. Try a different phrase.";
    container.appendChild(msg);
  }

  updateProgress();
}

// ==============================
// JSON export / import
// ==============================
function downloadJson() {
  const data = {
    meta: collectMetaFromDom(),
    items: state.items,
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `ccd_checklist_${data.meta.jobNo || "job"}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function handleJsonFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.meta) applyMetaToDom(data.meta);
      if (data.items) state.items = data.items;
      renderChecklist();
      syncBadges();
      saveStateToStorage();
    } catch (err) {
      alert("Invalid JSON file.");
    }
  };
  reader.readAsText(file);
}

// Cache for logo data URL (for PDF)
let cachedLogoDataUrl = null;
async function loadLogoAsDataUrl() {
  if (cachedLogoDataUrl) return cachedLogoDataUrl;
  return new Promise((resolve) => {
    const tryPaths = ["assets/ardot-logo.png", "assets/ardot-logo.svg"];
    let index = 0;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const w = img.naturalWidth || 180;
      const h = img.naturalHeight || 56;
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, w, h);
      cachedLogoDataUrl = canvas.toDataURL("image/png");
      resolve(cachedLogoDataUrl);
    };
    img.onerror = () => {
      index += 1;
      if (index < tryPaths.length) {
        img.src = tryPaths[index];
      } else {
        resolve(null);
      }
    };
    img.src = tryPaths[index];
  });
}

// ==============================
// PDF export (summary style)
// ==============================
async function exportPdf() {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert("PDF library not loaded.");
    return;
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "letter" });

  const meta = collectMetaFromDom();
  const isStateFunded = !!meta.stateFunded;

  const filteredSections = CHECKLIST_SECTIONS.map((sec) => {
    if (isStateFunded && sec.id === "federal-reqs") return null;
    const items = (sec.items || []).filter((item) => {
      if (isStateFunded && STATE_EXCLUDE_ITEM_IDS.has(item.id)) return false;
      return true;
    });
    return items.length ? { ...sec, items } : null;
  }).filter(Boolean);

  const filteredItems = filteredSections.flatMap((sec) => sec.items || []);
  const totalItems = filteredItems.length;
  const completedItems = filteredItems.filter(
    (it) => state.items[it.id] && state.items[it.id].checked
  ).length;
  const remainingItems = Math.max(totalItems - completedItems, 0);

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 48;
  const contentWidth = pageWidth - margin * 2;
  const brandBlue = [0, 73, 144];
  const brandRed = [200, 16, 46];
  const lightLine = [214, 224, 236];
  const generatedDate = meta.reviewDate || new Date().toISOString().slice(0, 10);
  const logoDataUrl = await loadLogoAsDataUrl();

  let y = margin;

  const drawPdfLogo = (x, yPos) => {
    if (logoDataUrl) {
      doc.addImage(logoDataUrl, "PNG", x, yPos, 72, 22, undefined, "FAST");
    } else {
      // Fallback mark if logo fails to load
      doc.setFillColor(...brandBlue);
      doc.roundedRect(x, yPos, 64, 36, 6, 6, "F");
      doc.setFillColor(...brandRed);
      doc.rect(x + 36, yPos + 6, 12, 24, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(255, 255, 255);
      doc.text("AR", x + 10, yPos + 17);
      doc.text("DOT", x + 8, yPos + 29);
    }
  };

  const drawPageHeader = (isContinuation = false) => {
    doc.setFillColor(245, 248, 255);
    doc.setDrawColor(...brandBlue);
    doc.setLineWidth(1);
    doc.rect(margin, margin - 26, contentWidth, 44, "F");

    drawPdfLogo(margin + 6, margin - 18);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(...brandBlue);
    doc.text("Proposal Checklist - CCD", margin + 82, margin + 4);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(70, 70, 70);
    const headerSubtitle = isContinuation ? "Continuation" : "Downloadable summary";
    doc.text(headerSubtitle, margin + 84, margin + 18);
    doc.text(`Generated: ${generatedDate}`, pageWidth - margin, margin + 4, {
      align: "right",
    });

    y = margin + 32;
  };

  const ensureSpace = (needed = 60) => {
    if (y + needed > pageHeight - margin) {
      doc.addPage();
      drawPageHeader(true);
    }
  };

  const drawCheckbox = (x, yPos, checked) => {
    const size = 12;
    doc.setLineWidth(1);
    doc.setDrawColor(0);
    doc.rect(x, yPos - size + 2, size, size);
    if (checked) {
      doc.setDrawColor(50, 150, 50);
      doc.setLineWidth(2);
      doc.line(x + 2, yPos - 2, x + 5, yPos - 5);
      doc.line(x + 5, yPos - 5, x + 10, yPos - 10);
      doc.setDrawColor(0);
      doc.setLineWidth(1);
    }
  };

  drawPageHeader();

  // Progress chips
  const chipHeight = 32;
  const chipWidth = 126;
  const chipGap = 10;
  const chipY = y;
  const chipLabels = [
    { label: "Completed", value: `${completedItems}/${totalItems}`, color: [56, 142, 60] },
    { label: "Remaining", value: `${remainingItems}`, color: [220, 120, 40] },
    { label: "Progress", value: totalItems ? `${Math.round((completedItems / totalItems) * 100)}%` : "0%", color: brandBlue },
  ];
  chipLabels.forEach((chip, idx) => {
    const x = margin + idx * (chipWidth + chipGap);
    doc.setFillColor(253, 254, 255);
    doc.setDrawColor(...lightLine);
    doc.setLineWidth(0.8);
    doc.roundedRect(x, chipY, chipWidth, chipHeight, 6, 6, "FD");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(80, 80, 80);
    doc.text(chip.label, x + 10, chipY + 12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(...chip.color);
    doc.text(chip.value, x + 10, chipY + 24);
  });
  y += chipHeight + 18;

  // Meta table
  const tableRows = [
    [
      { label: "Job:", value: meta.jobNo || "" },
      { label: "Call No.:", value: meta.callNo || "" },
      { label: "FAP:", value: meta.fapNo || "" },
      { label: "District:", value: meta.district || "" },
    ],
    [
      { label: "Job Name:", value: meta.jobName || "" },
      { label: "Route/Section:", value: meta.routeSection || "" },
      { label: "County(ies):", value: meta.county || "" },
      { label: "Letting Time:", value: meta.lettingTime || "" },
    ],
    [
      { label: "Reviewer:", value: meta.reviewer || "" },
      { label: "Date:", value: meta.reviewDate || "" },
    ],
  ];

  const maxCols =
    tableRows.reduce((max, row) => Math.max(max, row.length), 0) || 1;
  const colWidth = contentWidth / maxCols;
  const rowHeight = 34;
  doc.setLineWidth(0.6);
  tableRows.forEach((row, rIndex) => {
    const cells = [...row];
    while (cells.length < maxCols) cells.push({ label: "", value: "" });
    cells.forEach((cell, cIndex) => {
      const x = margin + colWidth * cIndex;
      const yTop = y + rowHeight * rIndex;
      doc.setFillColor(rIndex % 2 === 0 ? 250 : 244, 246, 251);
      doc.setDrawColor(...lightLine);
      doc.rect(x, yTop, colWidth, rowHeight, "FD");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(90, 90, 90);
      if (cell.label) {
        doc.text(cell.label, x + 8, yTop + 12);
      }

      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      if (cell.label || cell.value) {
        doc.text(cell.value || "-", x + 8, yTop + 26, {
          maxWidth: colWidth - 16,
        });
      }
    });
  });
  y += rowHeight * tableRows.length + 14;

  // General comments box
  const generalNotes = (meta.generalComments || "").trim();
  if (generalNotes) {
    const lines = doc.splitTextToSize(generalNotes, contentWidth - 18);
    const boxHeight = lines.length * 14 + 28;
    ensureSpace(boxHeight + 12);
    doc.setFillColor(248, 250, 253);
    doc.setDrawColor(...lightLine);
    doc.rect(margin, y, contentWidth, boxHeight, "F");
    doc.rect(margin, y, contentWidth, boxHeight);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...brandBlue);
    doc.text("General comments / notes", margin + 10, y + 16);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(60);
    doc.text(lines, margin + 10, y + 32);
    doc.setTextColor(0);
    y += boxHeight + 12;
  }

  // Funding bar
  if (meta.stateFunded || meta.federallyFunded) {
    const label = meta.stateFunded ? "100% State Funded" : "Federal Aid";
    const color = meta.stateFunded ? [0, 92, 200] : [32, 127, 198];
    doc.setFillColor(...color);
    doc.rect(margin, y, contentWidth, 14, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.text(label, margin + 6, y + 10);
    doc.setTextColor(0);
    y += 24;
  }

  // Legend box
  const legendHeight = 58;
  doc.setFillColor(246, 248, 252);
  doc.rect(margin, y, contentWidth, legendHeight, "F");
  doc.setDrawColor(...lightLine);
  doc.rect(margin, y, contentWidth, legendHeight);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(0);

  drawCheckbox(margin + 10, y + 20, true);
  doc.setTextColor(0, 120, 0);
  doc.text("Verified item", margin + 28, y + 18);

  drawCheckbox(margin + 10, y + 44, false);
  doc.setTextColor(80, 80, 80);
  doc.text("Pending item", margin + 28, y + 42);

  doc.setTextColor(120, 30, 30);
  doc.setFont("helvetica", "italic");
  doc.text("Notes appear in red italic under items.", pageWidth - margin - 220, y + 18);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(80, 80, 80);
  doc.text("Unchecked items need attention.", pageWidth - margin - 220, y + 40);

  y += legendHeight + 18;

  // Section rendering
  const itemTextWidth = contentWidth - 180;
  const reviewerX = margin + itemTextWidth + 60;
  const dateX = margin + itemTextWidth + 130;

  filteredSections.forEach((sec) => {
    ensureSpace(80);
    doc.setFillColor(240, 245, 255);
    doc.setDrawColor(...brandBlue);
    doc.rect(margin, y - 12, contentWidth, 26, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...brandBlue);
    doc.text(sec.title, margin + 6, y + 4);
    y += 18;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(0);
    doc.text("Item", margin + 6, y);
    doc.text("Init", reviewerX, y);
    doc.text("Date", dateX, y);
    y += 6;
    doc.setLineWidth(0.4);
    doc.setDrawColor(...lightLine);
    doc.line(margin, y, margin + contentWidth, y);
    y += 10;

    (sec.items || []).forEach((item) => {
      const entry = state.items[item.id] || {};
      const textX = margin + 22;
      const split = doc.splitTextToSize(item.label, itemTextWidth);
      const rowHeight = Math.max(split.length * 12, 18);

      ensureSpace(rowHeight + 30);

      doc.setFillColor(entry.checked ? 243 : 255, entry.checked ? 252 : 255, entry.checked ? 244 : 255);
      doc.setDrawColor(...lightLine);
      doc.rect(margin, y - 6, contentWidth, rowHeight + 14, "F");

      drawCheckbox(margin + 4, y + 4, !!entry.checked);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(0);

      doc.text(split, textX, y);

      const reviewerText = meta.reviewer || "-";
      const dateText = meta.reviewDate || "-";
      doc.text(reviewerText, reviewerX, y);
      doc.text(dateText, dateX, y);

      y += rowHeight;

      const note = (entry.note || "").trim();
      if (note) {
        const noteLines = doc.splitTextToSize(`Notes: ${note}`, itemTextWidth);
        const noteHeight = noteLines.length * 12 + 8;
        ensureSpace(noteHeight + 10);
        doc.setFillColor(255, 249, 249);
        doc.setDrawColor(...lightLine);
        doc.rect(margin, y - 4, contentWidth, noteHeight, "F");
        doc.setFont("helvetica", "italic");
        doc.setTextColor(170, 30, 30);
        doc.text(noteLines, textX, y);
        y += noteLines.length * 12;
        doc.setTextColor(0);
        doc.setFont("helvetica", "normal");
      }

      y += 10;
    });

    y += 8;
  });

  doc.save(`CCD_Checklist_${meta.jobNo || "job"}.pdf`);
}

// ==============================
// Proposal checker (PDF OCR + markup)
// ==============================
function initProposalChecker() {
  const els = {
    pdfFile: document.getElementById("ocrFile"),
    lang: document.getElementById("ocrLang"),
    scale: document.getElementById("ocrScale"),
    startBtn: document.getElementById("ocrStart"),
    cancelBtn: document.getElementById("ocrCancel"),
    progressBar: document.getElementById("ocrProgressBar"),
    progressText: document.getElementById("ocrProgressText"),
    log: document.getElementById("ocrLog"),

    output: document.getElementById("ocrOutput"),
    copyBtn: document.getElementById("ocrCopy"),
    downloadBtn: document.getElementById("ocrDownload"),
    clearBtn: document.getElementById("ocrClear"),

    prevPage: document.getElementById("ocrPrevPage"),
    nextPage: document.getElementById("ocrNextPage"),
    pageNum: document.getElementById("ocrPageNum"),
    pageCount: document.getElementById("ocrPageCount"),
    pageInput: document.getElementById("ocrPageInput"),
    pageSlider: document.getElementById("ocrPageSlider"),
    pageSliderValue: document.getElementById("ocrPageSliderValue"),
    pdfCanvas: document.getElementById("ocrPdfCanvas"),
    markupCanvas: document.getElementById("ocrMarkupCanvas"),
    hiddenCanvas: document.getElementById("ocrHiddenCanvas"),

    toolBtns: Array.from(document.querySelectorAll(".tool-btn")),
    brushSize: document.getElementById("ocrBrushSize"),
    brushColor: document.getElementById("ocrBrushColor"),
    clearMarkup: document.getElementById("ocrClearMarkup"),
    exportPdf: document.getElementById("ocrExportPdf"),
    markAll: document.getElementById("ocrMarkAll"),
    unmarkAll: document.getElementById("ocrUnmarkAll"),
    zoomIn: document.getElementById("ocrZoomIn"),
    zoomOut: document.getElementById("ocrZoomOut"),
    zoomValue: document.getElementById("ocrZoomValue"),

    stampText: document.getElementById("ocrStampText"),
    applyStamp: document.getElementById("ocrApplyStamp"),

    specStatus: document.getElementById("ssspStatus"),
    specResults: document.getElementById("ssspResults"),
    specRun: document.getElementById("ssspRun"),
    specClear: document.getElementById("ssspClear"),
    specInput: document.getElementById("ssspInput"),

    copyPageText: document.getElementById("ocrCopyPageText"),
    pageTextBox: document.getElementById("ocrPageText"),
    textSelectToggle: document.getElementById("ocrTextSelectToggle"),
    textLayer: document.getElementById("ocrTextLayer"),
  };

  if (!els.pdfFile) return;

  let cancelOcrRequested = false;
  const viewer = {
    pdf: null,
    pdfBytes: null,
    pdfUrl: null,
    pageCount: 0,
    pageNum: 1,
    pdfCtx: null,
    markupCtx: null,
    tool: "pen",
    drawing: false,
    last: { x: 0, y: 0 },
    markupByPage: new Map(),
    zoom: 1,
    pageTexts: new Map(),
    textSelectMode: false,
  };

  function setProgress(pct, text) {
    const clamped = Math.max(0, Math.min(100, pct));
    els.progressBar.style.width = `${clamped}%`;
    els.progressText.textContent = text;
  }

  function addLog(line) {
    const ts = new Date().toLocaleTimeString();
    els.log.textContent += `[${ts}] ${line}\n`;
    els.log.scrollTop = els.log.scrollHeight;
  }

  function setOCRRunning(running) {
    els.startBtn.disabled = running || !els.pdfFile.files?.length;
    els.cancelBtn.disabled = !running;
    els.pdfFile.disabled = running;
    els.lang.disabled = running;
    els.scale.disabled = running;
  }

  function enableOutputActions(enabled) {
    els.copyBtn.disabled = !enabled;
    els.downloadBtn.disabled = !enabled;
  }

  function setViewerEnabled(enabled) {
    els.prevPage.disabled = !enabled;
    els.nextPage.disabled = !enabled;
    els.clearMarkup.disabled = !enabled;
    els.exportPdf.disabled = !enabled;
    els.markAll.disabled = !enabled;
    if (els.unmarkAll) els.unmarkAll.disabled = !enabled;
    els.zoomIn.disabled = !enabled;
    els.zoomOut.disabled = !enabled;
    els.applyStamp.disabled = !enabled;
    if (els.copyPageText) els.copyPageText.disabled = !enabled;
    if (els.textSelectToggle) els.textSelectToggle.disabled = !enabled;
    if (els.pageSlider) els.pageSlider.disabled = !enabled;
    if (els.pageInput) els.pageInput.disabled = !enabled;
  }

  function updateSpecButtonState() {
    const hasText = !!els.output.value.trim();
    const hasPdf = !!viewer.pdfBytes;
    if (els.specRun) els.specRun.disabled = !(hasText || hasPdf);
  }

  function setTextSelectMode(enabled) {
    viewer.textSelectMode = !!enabled;
    if (els.markupCanvas) {
      els.markupCanvas.style.pointerEvents = enabled ? "none" : "auto";
    }
    if (els.pdfCanvas) {
      els.pdfCanvas.style.pointerEvents = enabled ? "none" : "auto";
    }
    if (els.textLayer) {
      els.textLayer.classList.toggle("selectable", enabled);
      els.textLayer.classList.toggle("hidden", !enabled);
    }
    if (els.textSelectToggle) {
      els.textSelectToggle.classList.toggle("tool-btn", true);
      els.textSelectToggle.classList.toggle("active", enabled);
    }
  }

  function parseUserSpecList() {
    if (!els.specInput) return [];
    return (els.specInput.value || "")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const key = line.toLowerCase();
        const compact = key.replace(/[^a-z0-9]/g, "");
        return { title: line, number: line, compact };
      });
  }

  function normalizeDateVariants(dateStr) {
    const raw = (dateStr || "").trim();
    const variants = [];
    const m = raw.match(/(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})/);
    if (m) {
      let [ , mm, dd, yy ] = m;
      const month = mm.padStart(2, "0");
      const day = dd.padStart(2, "0");
      const year = yy.length === 2 ? (parseInt(yy, 10) >= 50 ? `19${yy}` : `20${yy}`) : yy;
      const compact = `${month}${day}${year}`;
      variants.push(compact, `${parseInt(month, 10)}${parseInt(day, 10)}${year}`);
    }
    const digitsOnly = raw.replace(/\D+/g, "");
    if (digitsOnly) variants.push(digitsOnly);
    return { display: raw, variants: Array.from(new Set(variants)) };
  }

  function parsePages(rawText) {
    const parts = rawText.split(/===== Page (\d+) =====/);
    const pages = [];
    for (let i = 1; i < parts.length; i += 2) {
      const num = parseInt(parts[i], 10);
      const body = (parts[i + 1] || "").trim();
      if (!Number.isNaN(num) && body) {
        const lower = body.toLowerCase();
        pages.push({
          num,
          lower,
          compact: lower.replace(/[^a-z0-9]/g, ""),
        });
      }
    }
    if (!pages.length && rawText) {
      const lower = rawText.toLowerCase();
      pages.push({ num: 1, lower, compact: lower.replace(/[^a-z0-9]/g, "") });
    }
    return pages;
  }

  function classifySpec(entry, pages) {
    const numberCompact = (entry.number || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    const titleLower = (entry.title || "").toLowerCase();
    const matches = pages.filter(
      (p) =>
        (numberCompact && p.compact.includes(numberCompact)) ||
        (titleLower && p.lower.includes(titleLower))
    );

    if (!matches.length) {
      return { entry, status: "missing", note: "Not found in recognized text." };
    }
    const foundPage = matches[0]?.num || 1;

    const dateRaw = (entry.currentDate || "").trim();
    if (!dateRaw) {
      return {
        entry,
        status: "ok",
        note: `Found in text on page ${foundPage} (no date on record).`,
      };
    }
    const { display, variants } = normalizeDateVariants(dateRaw);
    let datePage = null;
    matches.some((p) => {
      const hit = variants.some((v) => v && p.compact.includes(v));
      if (hit) {
        datePage = p.num;
        return true;
      }
      return false;
    });
    if (!datePage) {
      const anyPage = pages.find((p) => variants.some((v) => v && p.compact.includes(v)));
      if (anyPage) datePage = anyPage.num;
    }

    if (datePage) {
      return {
        entry,
        status: "ok",
        note: `Found with date (${display || dateRaw}) on page ${datePage}.`,
      };
    }
    return {
      entry,
      status: "warn",
      note: `Found on page ${foundPage}, but date (${display || dateRaw}) not detected.`,
    };
  }

  async function getNativePdfText() {
    if (!viewer.pdfBytes || !pdfjsLib) return "";
    try {
      const pdf = await pdfjsLib.getDocument({ data: viewer.pdfBytes }).promise;
      const parts = [];
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum += 1) {
        const page = await pdf.getPage(pageNum);
        const content = await page.getTextContent();
        const text = content.items.map((it) => it.str || "").join(" ");
        parts.push(`\n\n===== Page ${pageNum} =====\n\n${text}`);
      }
      return parts.join("\n");
    } catch (err) {
      console.error("Native PDF text extraction failed", err);
      return "";
    }
  }

  async function getPageText(pageNum) {
    if (viewer.pageTexts.has(pageNum)) return viewer.pageTexts.get(pageNum);
    if (!viewer.pdf) return "";
    const page = await viewer.pdf.getPage(pageNum);
    const content = await page.getTextContent();
    const text = content.items.map((it) => it.str || "").join(" ");
    viewer.pageTexts.set(pageNum, text);
    return text;
  }

  async function runSpecCheck() {
    if (!els.output || !els.specResults || !els.specStatus) return;
    if (!specListState.entries.length) {
      els.specStatus.className = "sssp-status warn";
      els.specStatus.textContent = "Spec list failed to load. Ensure data/WhereandWhenList.csv is accessible.";
      els.specResults.innerHTML = "";
      return;
    }
    let text = (els.output.value || "").trim();
    if (!text && viewer.pdfBytes) {
      els.specStatus.className = "sssp-status";
      els.specStatus.textContent = "No OCR text yet. Trying direct PDF text (no OCR)...";
      text = (await getNativePdfText()).trim();
      if (!els.output.value && text) {
        els.output.value = text;
      }
    }
    if (!text) {
      els.specStatus.className = "sssp-status";
      els.specStatus.textContent = "No text available. Run OCR or select a PDF first.";
      els.specResults.innerHTML = "";
      return;
    }
    const textLower = text.toLowerCase();
    const pages = parsePages(text);
    const userEntries = parseUserSpecList();
    const targets =
      userEntries.length > 0
        ? userEntries.map((ue) => {
            const match =
              specListState.byKey[ue.title.toLowerCase()] ||
              specListState.byKey[ue.number.toLowerCase()] ||
              specListState.entries.find(
                (e) =>
                  e.title.toLowerCase() === ue.title.toLowerCase() ||
                  e.number.toLowerCase() === ue.number.toLowerCase()
              );
            if (!match) {
              return { ...ue, currentDate: "", category: "Unknown", notInCsv: true };
            }
            return match;
          })
        : specListState.entries;

    const results = targets.map((entry) => classifySpec(entry, pages));

    const missingCount = results.filter((r) => r.status === "missing").length;
    const warnCount = results.filter((r) => r.status === "warn").length;
    const unknownCount = results.filter((r) => r.entry.notInCsv).length;

    const statusClass =
      missingCount === 0 && warnCount === 0
        ? "sssp-status ok"
        : warnCount || missingCount
        ? "sssp-status warn"
        : "sssp-status";
    const summaryParts = [];
    summaryParts.push(`Checked ${results.length} SS/SP entries.`);
    if (missingCount) summaryParts.push(`${missingCount} missing.`);
    if (warnCount) summaryParts.push(`${warnCount} need date verification.`);
    if (unknownCount) summaryParts.push(`${unknownCount} not in Where/When list.`);
    if (!missingCount && !warnCount && !unknownCount)
      summaryParts.push("All found; dates verified.");

    els.specStatus.className = statusClass;
    els.specStatus.textContent = summaryParts.join(" ");

    els.specResults.innerHTML = "";
    results.forEach((res) => {
      const wrap = document.createElement("div");
      wrap.className = "sssp-item";

      const header = document.createElement("div");
      header.className = "sssp-item-header";

      const title = document.createElement("h5");
      title.className = "sssp-title";
      title.textContent = `${res.entry.title || "Untitled"} (${res.entry.number || "No number"})`;

      const pill = document.createElement("span");
      const pillClass =
        res.status === "ok"
          ? "ok"
          : res.status === "warn"
          ? "warn"
          : res.status === "missing"
          ? "warn"
          : "info";
      const pillLabel =
        res.status === "ok"
          ? "Current"
          : res.status === "warn"
          ? "Date missing"
          : res.status === "missing"
          ? "Not found"
          : "Found";
      pill.className = `sssp-pill ${pillClass}`;
      pill.textContent = pillLabel;

      const meta = document.createElement("div");
      meta.className = "sssp-meta";
      const cat = res.entry.category ? `${res.entry.category}` : "";
      const date = res.entry.currentDate ? `Current date: ${res.entry.currentDate}` : "";
      meta.textContent = [cat, date].filter(Boolean).join(" | ");

      const note = document.createElement("div");
      note.className = "sssp-note";
      note.textContent = res.note;

      header.appendChild(title);
      header.appendChild(pill);
      wrap.appendChild(header);
      if (meta.textContent) wrap.appendChild(meta);
      wrap.appendChild(note);
      els.specResults.appendChild(wrap);
    });
  }

  function clearSpecResults() {
    if (els.specResults) els.specResults.innerHTML = "";
    if (els.specStatus) {
      els.specStatus.className = "sssp-status";
      els.specStatus.textContent = "Load a PDF and run OCR to enable the check.";
    }
  }

  function syncPageControls() {
    if (els.pageNum) els.pageNum.textContent = String(viewer.pageNum);
    if (els.pageCount) els.pageCount.textContent = String(viewer.pageCount);
    if (els.pageSlider) {
      els.pageSlider.max = String(Math.max(viewer.pageCount, 1));
      els.pageSlider.value = String(Math.max(1, viewer.pageNum));
    }
    if (els.pageSliderValue) {
      const label = viewer.pdf
        ? `Page ${viewer.pageNum} of ${viewer.pageCount}`
        : "Page 0";
      els.pageSliderValue.textContent = label;
    }
    if (els.pageInput) {
      els.pageInput.min = "1";
      els.pageInput.max = String(Math.max(viewer.pageCount, 1));
      els.pageInput.value = viewer.pdf ? String(viewer.pageNum) : "1";
      els.pageInput.placeholder = viewer.pdf ? `1 - ${viewer.pageCount}` : "1";
    }
  }

  async function goToPage(targetPage) {
    if (!viewer.pdf) return;
    const next = Math.min(Math.max(1, targetPage), viewer.pageCount);
    if (next === viewer.pageNum) {
      syncPageControls();
      return;
    }
    await saveCurrentMarkup();
    viewer.pageNum = next;
    await renderPage(viewer.pageNum);
  }

  function ensureDepsLoaded() {
    const missing = [];
    if (typeof pdfjsLib === "undefined") missing.push("PDF.js");
    if (typeof Tesseract === "undefined") missing.push("Tesseract.js");
    if (typeof PDFLib === "undefined") missing.push("pdf-lib");
    if (missing.length) {
      const msg = `Missing libraries: ${missing.join(", ")}. Check network/CDN access.`;
      addLog(msg);
      setProgress(0, msg);
      setViewerEnabled(false);
      setOCRRunning(false);
      throw new Error(msg);
    }
    if (pdfjsLib?.GlobalWorkerOptions) {
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        pdfjsLib.GlobalWorkerOptions.workerSrc ||
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    }
  }

  ensureDepsLoaded();

  // Upload handlers
  els.pdfFile.addEventListener("change", async () => {
    const file = els.pdfFile.files?.[0];
    els.log.textContent = "";
    els.output.value = "";
    enableOutputActions(false);
    clearSpecResults();
    updateSpecButtonState();
    cancelOcrRequested = false;

    if (!file) {
      setProgress(0, "No file selected.");
      viewer.pdf = null;
      viewer.pageCount = 0;
      viewer.pageNum = 0;
      viewer.markupByPage.clear();
      syncPageControls();
      setViewerEnabled(false);
      return;
    }

    setProgress(0, `Selected: ${file.name}`);
    els.startBtn.disabled = false;

    try {
      const bytes = await file.arrayBuffer();
      await loadPdfIntoViewer(bytes);
      addLog("PDF loaded for viewing and markup.");
    } catch (err) {
      addLog(`Failed to load PDF: ${err?.message || String(err)}`);
      setViewerEnabled(false);
    }
  });

  // Output actions
  els.clearBtn.addEventListener("click", () => {
    els.output.value = "";
    els.log.textContent = "";
    const file = els.pdfFile.files?.[0];
    setProgress(0, file ? `Selected: ${file.name}` : "No file selected.");
    enableOutputActions(false);
    clearSpecResults();
    updateSpecButtonState();
  });

  els.copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(els.output.value);
      addLog("Copied OCR text to clipboard.");
    } catch {
      addLog("Copy failed. Your browser may block clipboard access.");
    }
  });

  els.downloadBtn.addEventListener("click", () => {
    const text = els.output.value || "";
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ocr-output.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    addLog("Downloaded ocr-output.txt");
  });

  if (els.copyPageText) {
    els.copyPageText.addEventListener("click", async () => {
      if (!viewer.pdf) return;
      try {
        const text = await getPageText(viewer.pageNum);
        await navigator.clipboard.writeText(text || "");
        addLog(`Copied text for page ${viewer.pageNum}.`);
      } catch (err) {
        addLog("Copy failed. Your browser may block clipboard access.");
      }
    });
  }

  if (els.textSelectToggle) {
    els.textSelectToggle.addEventListener("click", async () => {
      setTextSelectMode(!viewer.textSelectMode);
      await renderPage(viewer.pageNum);
    });
  }

  if (els.output) {
    els.output.addEventListener("input", updateSpecButtonState);
  }

  if (els.specRun) {
    els.specRun.addEventListener("click", async () => {
      await runSpecCheck();
      updateSpecButtonState();
    });
  }

  if (els.specClear) {
    els.specClear.addEventListener("click", () => {
      clearSpecResults();
      updateSpecButtonState();
    });
  }

  if (els.specInput) {
    els.specInput.addEventListener("input", updateSpecButtonState);
  }

  // OCR controls
  els.cancelBtn.addEventListener("click", () => {
    cancelOcrRequested = true;
    addLog("Cancel requested. Stopping after the current page finishes.");
  });

  els.startBtn.addEventListener("click", async () => {
    const file = els.pdfFile.files?.[0];
    if (!file) return;

    cancelOcrRequested = false;
    els.output.value = "";
    enableOutputActions(false);
    setOCRRunning(true);

    try {
      if (viewer.pdf) await saveCurrentMarkup();
      const bytes = viewer.pdfBytes || (await file.arrayBuffer());
      await runOcrOnPdfBytes(bytes);
      if (!cancelOcrRequested && els.output.value.trim()) enableOutputActions(true);
    } catch (err) {
      addLog(`OCR error: ${err?.message || String(err)}`);
    } finally {
      setOCRRunning(false);
    }
  });

  // Tool selection
  function setActiveTool(tool) {
    viewer.tool = tool;
    els.toolBtns.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tool === tool);
    });
    els.applyStamp.disabled = !viewer.pdf;
    els.markupCanvas.style.cursor = tool === "stamp" ? "copy" : "crosshair";
  }

  els.toolBtns.forEach((btn) => {
    btn.addEventListener("click", () => setActiveTool(btn.dataset.tool));
  });

  els.applyStamp.addEventListener("click", () => {
    setActiveTool("stamp");
    addLog("Stamp tool active. Click on the page to place the stamp.");
  });

  els.prevPage.addEventListener("click", async () => {
    if (!viewer.pdf || viewer.pageNum <= 1) return;
    await goToPage(viewer.pageNum - 1);
  });

  els.nextPage.addEventListener("click", async () => {
    if (!viewer.pdf || viewer.pageNum >= viewer.pageCount) return;
    await goToPage(viewer.pageNum + 1);
  });

  if (els.pageSlider) {
    els.pageSlider.addEventListener("input", () => {
      const val = Number(els.pageSlider.value || viewer.pageNum);
      if (els.pageSliderValue) {
        els.pageSliderValue.textContent = viewer.pdf
          ? `Page ${val} of ${viewer.pageCount}`
          : "Page 0";
      }
    });
    els.pageSlider.addEventListener("change", async () => {
      const val = Number(els.pageSlider.value || viewer.pageNum);
      await goToPage(val);
    });
  }

  if (els.pageInput) {
    const commitInput = async () => {
      const val = Number(els.pageInput.value);
      if (Number.isNaN(val)) {
        syncPageControls();
        return;
      }
      await goToPage(val);
      syncPageControls();
    };
    els.pageInput.addEventListener("keydown", async (evt) => {
      if (evt.key === "Enter") {
        evt.preventDefault();
        await commitInput();
      }
    });
    els.pageInput.addEventListener("change", commitInput);
    els.pageInput.addEventListener("blur", commitInput);
  }

  els.clearMarkup.addEventListener("click", async () => {
    if (!viewer.pdf) return;
    viewer.markupCtx.clearRect(0, 0, els.markupCanvas.width, els.markupCanvas.height);
    viewer.markupByPage.delete(viewer.pageNum);
    addLog(`Cleared markup on page ${viewer.pageNum}.`);
  });

  els.exportPdf.addEventListener("click", async () => {
    if (!viewer.pdfBytes || !viewer.pdf) return;
    await saveCurrentMarkup();
    await exportMarkedPdf();
  });

  els.markAll.addEventListener("click", async () => {
    if (!viewer.pdf) return;
    await saveCurrentMarkup();
    await markAllPages();
  });

  if (els.unmarkAll) {
    els.unmarkAll.addEventListener("click", async () => {
      if (!viewer.pdf) return;
      viewer.markupByPage.clear();
      viewer.markupCtx.clearRect(0, 0, els.markupCanvas.width, els.markupCanvas.height);
      await renderPage(viewer.pageNum);
      addLog("Removed markup from all pages.");
    });
  }

  els.zoomIn.addEventListener("click", async () => {
    if (!viewer.pdf) return;
    await saveCurrentMarkup();
    setZoom(viewer.zoom + 0.25);
  });

  els.zoomOut.addEventListener("click", async () => {
    if (!viewer.pdf) return;
    await saveCurrentMarkup();
    setZoom(viewer.zoom - 0.25);
  });

  // Viewer helpers
  async function loadPdfIntoViewer(pdfBytes) {
    viewer.pdfBytes = pdfBytes;
    if (viewer.pdfUrl) URL.revokeObjectURL(viewer.pdfUrl);
    viewer.pdfUrl = URL.createObjectURL(new Blob([pdfBytes], { type: "application/pdf" }));

    viewer.pdf = await pdfjsLib.getDocument({ url: viewer.pdfUrl }).promise;
    viewer.pageCount = viewer.pdf.numPages;
    viewer.pageNum = 1;
    viewer.pageTexts.clear();

    viewer.pdfCtx = els.pdfCanvas.getContext("2d");
    viewer.markupCtx = els.markupCanvas.getContext("2d");

    syncPageControls();
    setViewerEnabled(true);
    setActiveTool("pen");
    updateSpecButtonState();
    await renderPage(viewer.pageNum);
  }

  async function renderPage(pageNum) {
    const page = await viewer.pdf.getPage(pageNum);
    const scale = Number(els.scale.value || 2) * viewer.zoom;
    const viewport = page.getViewport({ scale });

    els.pdfCanvas.width = Math.floor(viewport.width);
    els.pdfCanvas.height = Math.floor(viewport.height);
    els.markupCanvas.width = els.pdfCanvas.width;
    els.markupCanvas.height = els.pdfCanvas.height;
    viewer.pageNum = pageNum;
    syncPageControls();

    await page.render({ canvasContext: viewer.pdfCtx, viewport }).promise;

    viewer.markupCtx.clearRect(0, 0, els.markupCanvas.width, els.markupCanvas.height);
    const saved = viewer.markupByPage.get(pageNum);
    if (saved) await drawMarkupDataUrl(saved);

    // Populate page text box for selection/copy
    if (els.pageTextBox) {
      try {
        const text = await getPageText(pageNum);
        els.pageTextBox.value = text || "";
        els.pageTextBox.placeholder = text ? "" : "No text found for this page.";
      } catch (err) {
        els.pageTextBox.value = "";
        els.pageTextBox.placeholder = "Unable to extract text for this page.";
      }
    }

    // Render text layer for on-canvas selection
    if (els.textLayer) {
      els.textLayer.innerHTML = "";
      els.textLayer.style.width = `${Math.floor(viewport.width)}px`;
      els.textLayer.style.height = `${Math.floor(viewport.height)}px`;
      if (viewer.textSelectMode) {
        try {
          const textContent = await page.getTextContent();
          pdfjsLib.renderTextLayer({
            textContent,
            container: els.textLayer,
            viewport,
            textDivs: [],
          });
        } catch (err) {
          console.error("Render text layer failed", err);
        }
      }
    }
  }

  async function saveCurrentMarkup() {
    if (!viewer.pdf) return;
    const hasInk = canvasHasInk(els.markupCanvas);
    if (!hasInk) {
      viewer.markupByPage.delete(viewer.pageNum);
      return;
    }
    const dataUrl = els.markupCanvas.toDataURL("image/png");
    viewer.markupByPage.set(viewer.pageNum, dataUrl);
  }

  function canvasHasInk(canvas) {
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 3; i < data.length; i += 4) {
      if (data[i] !== 0) return true;
    }
    return false;
  }

  function getCanvasPos(evt) {
    const rect = els.markupCanvas.getBoundingClientRect();
    const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
    const clientY = evt.touches ? evt.touches[0].clientY : evt.clientY;
    const x = (clientX - rect.left) * (els.markupCanvas.width / rect.width);
    const y = (clientY - rect.top) * (els.markupCanvas.height / rect.height);
    return { x, y };
  }

  function applyBrushStyle() {
    const ctx = viewer.markupCtx;
    const size = Number(els.brushSize.value || 6);
    const color = els.brushColor.value || "#ffcc00";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalCompositeOperation = "source-over";

    if (viewer.tool === "highlighter") {
      ctx.globalAlpha = 0.18;
      ctx.strokeStyle = color;
      ctx.lineWidth = Math.max(10, size * 2.5);
    } else if (viewer.tool === "eraser") {
      ctx.globalAlpha = 1;
      ctx.strokeStyle = "rgba(0,0,0,1)";
      ctx.lineWidth = Math.max(12, size * 2);
      ctx.globalCompositeOperation = "destination-out";
    } else {
      ctx.globalAlpha = 1;
      ctx.strokeStyle = color;
      ctx.lineWidth = size;
    }
  }

  function setZoom(next) {
    const clamped = Math.max(0.5, Math.min(3, next));
    viewer.zoom = clamped;
    els.zoomValue.textContent = `${Math.round(clamped * 100)}%`;
    if (viewer.pdf) renderPage(viewer.pageNum);
  }

  function startDraw(evt) {
    if (!viewer.pdf) return;
    if (viewer.tool === "stamp") {
      placeStamp(evt);
      return;
    }
    evt.preventDefault();
    viewer.drawing = true;
    applyBrushStyle();
    const pos = getCanvasPos(evt);
    viewer.last = pos;
    viewer.markupCtx.beginPath();
    viewer.markupCtx.moveTo(pos.x, pos.y);
  }

  function moveDraw(evt) {
    if (!viewer.drawing) return;
    evt.preventDefault();
    const pos = getCanvasPos(evt);
    viewer.markupCtx.lineTo(pos.x, pos.y);
    viewer.markupCtx.stroke();
    viewer.last = pos;
  }

  async function endDraw(evt) {
    if (!viewer.drawing) return;
    evt.preventDefault();
    viewer.drawing = false;
    viewer.markupCtx.closePath();
    await saveCurrentMarkup();
  }

  els.markupCanvas.addEventListener("mousedown", startDraw);
  els.markupCanvas.addEventListener("mousemove", moveDraw);
  window.addEventListener("mouseup", endDraw);
  els.markupCanvas.addEventListener("touchstart", startDraw, { passive: false });
  els.markupCanvas.addEventListener("touchmove", moveDraw, { passive: false });
  els.markupCanvas.addEventListener("touchend", endDraw, { passive: false });

  function placeStamp(evt) {
    const text = (els.stampText.value || "").trim();
    if (!text) {
      addLog("Type stamp text first, then click on the page.");
      return;
    }
    const ctx = viewer.markupCtx;
    const pos = getCanvasPos(evt);
    ctx.save();
    ctx.globalAlpha = 0.95;
    ctx.globalCompositeOperation = "source-over";
    const fontSize = 22;
    const padding = 10;
    ctx.font = `700 ${fontSize}px system-ui, -apple-system, Segoe UI, Roboto, Arial`;
    ctx.textBaseline = "top";
    const metrics = ctx.measureText(text);
    const w = Math.ceil(metrics.width + padding * 2);
    const h = fontSize + padding * 2;
    const x = Math.max(0, Math.min(pos.x, els.markupCanvas.width - w - 2));
    const y = Math.max(0, Math.min(pos.y, els.markupCanvas.height - h - 2));
    ctx.fillStyle = "rgba(0,0,0,0.35)";
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = "rgba(255,255,255,0.7)";
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, w, h);
    ctx.fillStyle = "#ffffff";
    ctx.fillText(text, x + padding, y + padding);
    ctx.restore();
    saveCurrentMarkup();
  }

  function drawMarkupDataUrl(dataUrl) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        viewer.markupCtx.drawImage(img, 0, 0, els.markupCanvas.width, els.markupCanvas.height);
        resolve();
      };
      img.onerror = reject;
      img.src = dataUrl;
    });
  }

  function drawImageOnCtx(ctx, dataUrl) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
        resolve();
      };
      img.onerror = reject;
      img.src = dataUrl;
    });
  }

  // Export marked PDF
  async function exportMarkedPdf() {
    try {
      addLog("Exporting marked PDF...");
      const pdfDoc = await PDFLib.PDFDocument.load(viewer.pdfBytes);
      const pages = pdfDoc.getPages();
      for (let i = 0; i < pages.length; i++) {
        const overlay = viewer.markupByPage.get(i + 1);
        if (!overlay) continue;
        const pngBytes = await fetch(overlay).then((r) => r.arrayBuffer());
        const pngImage = await pdfDoc.embedPng(pngBytes);
        const page = pages[i];
        const { width, height } = page.getSize();
        page.drawImage(pngImage, { x: 0, y: 0, width, height });
      }
      const outBytes = await pdfDoc.save();
      const blob = new Blob([outBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "marked-output.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      addLog("Export complete: marked-output.pdf");
    } catch (err) {
      addLog(`Export failed: ${err?.message || String(err)}`);
    }
  }

  // Mark all pages with strike
  async function markAllPages() {
    try {
      addLog("Marking all pages with a strike...");
      const scale = Number(els.scale.value || 2) * viewer.zoom;
      const { pageCount } = viewer;
      for (let pageNum = 1; pageNum <= pageCount; pageNum++) {
        const page = await viewer.pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        const ctx = canvas.getContext("2d");
        const existing = viewer.markupByPage.get(pageNum);
        if (existing) await drawImageOnCtx(ctx, existing);

        const strokeLength = Math.max(canvas.width * 0.5, 220);
        const angle = Math.PI / 4;
        const halfLen = strokeLength / 2;
        const centerX = canvas.width / 2;
        const centerY = canvas.height * 0.32;
        const dx = Math.cos(angle) * halfLen;
        const dy = Math.sin(angle) * halfLen;
        const startX = centerX - dx;
        const startY = centerY - dy;
        const endX = centerX + dx;
        const endY = centerY + dy;
        ctx.strokeStyle = "#c8102e";
        ctx.lineWidth = Math.max(6, Math.floor(canvas.width * 0.007));
        ctx.lineCap = "round";
        ctx.globalAlpha = 0.9;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        viewer.markupByPage.set(pageNum, canvas.toDataURL("image/png"));
      }
      await renderPage(viewer.pageNum);
      addLog("All pages marked.");
    } catch (err) {
      addLog(`Mark-all failed: ${err?.message || String(err)}`);
    }
  }

  // OCR runner
  async function runOcrOnPdfBytes(pdfBytes) {
    const lang = els.lang.value || "eng";
    const scale = Number(els.scale.value || 2);
    addLog("Starting OCR...");
    setProgress(1, "Loading PDF for OCR...");
    const pdf = await pdfjsLib.getDocument({ data: pdfBytes }).promise;
    const totalPages = pdf.numPages;
    addLog(`Pages detected: ${totalPages}`);
    addLog(`OCR language: ${lang}`);
    addLog(`Render scale: ${scale}x`);

    const worker = await Tesseract.createWorker(lang, 1, {
      logger: (m) => {
        if (typeof m.progress === "number") {
          const pct = Math.round(m.progress * 100);
          addLog(`${m.status}: ${pct}%`);
        }
      },
    });

    try {
      for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        if (cancelOcrRequested) break;
        const basePct = Math.round(((pageNum - 1) / totalPages) * 100);
        setProgress(basePct, `Rendering page ${pageNum} of ${totalPages}...`);
        addLog(`Rendering OCR page ${pageNum}/${totalPages}`);

        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale });
        const canvas = els.hiddenCanvas;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        await page.render({ canvasContext: ctx, viewport }).promise;

        if (cancelOcrRequested) break;
        setProgress(basePct, `OCR page ${pageNum} of ${totalPages}...`);
        addLog(`Running OCR on page ${pageNum}/${totalPages}`);

        const result = await worker.recognize(canvas);
        const text = (result?.data?.text || "").trim();
        const pageHeader = `\n\n===== Page ${pageNum} =====\n\n`;
        els.output.value += pageHeader + (text.length ? text : "[No text detected]");
        const pct = Math.round((pageNum / totalPages) * 100);
        setProgress(pct, `Done page ${pageNum} of ${totalPages}. (${pct}%)`);
      }

      if (cancelOcrRequested) {
        setProgress(0, "Cancelled.");
        addLog("OCR cancelled by user.");
      } else {
        setProgress(100, "OCR complete.");
        addLog("OCR completed.");
        await runSpecCheck();
        updateSpecButtonState();
      }
    } finally {
      await worker.terminate();
    }
  }

  // Initial state
  setProgress(0, "No file selected.");
  setOCRRunning(false);
  setViewerEnabled(false);
  setActiveTool("pen");
  setZoom(1);
  updateSpecButtonState();
  setTextSelectMode(false);
}
document.addEventListener("DOMContentLoaded", () => {
  // Default review date to today if empty
  const reviewDateEl = document.getElementById("meta-reviewDate");
  if (reviewDateEl && !reviewDateEl.value) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    reviewDateEl.value = `${yyyy}-${mm}-${dd}`;
  }

  // Load previous session (if any)
  loadStateFromStorage();

  // Search
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", renderChecklist);
  }

  // Meta field autosave
  const metaIds = [
    "meta-callNo",
    "meta-jobNo",
    "meta-fapNo",
    "meta-jobName",
    "meta-routeSection",
    "meta-county",
    "meta-district",
    "meta-lettingTime",
    "meta-reviewer",
    "meta-reviewDate",
    "meta-stateFunded",
    "meta-federallyFunded",
    "meta-generalComments",
  ];
  metaIds.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const evt = el.type === "checkbox" ? "change" : "input";
    el.addEventListener(evt, () => {
      if (el.type === "checkbox") syncBadges();
      saveStateToStorage();
      if (el.id === "meta-stateFunded" || el.id === "meta-federallyFunded") {
        renderChecklist();
      }
      if (el.type === "checkbox") updateProgress();
    });
  });

  const jobNoInput = document.getElementById("meta-jobNo");
  if (jobNoInput) {
    const triggerLookup = () => applyGoListMatch(jobNoInput.value);
    jobNoInput.addEventListener("input", triggerLookup);
    jobNoInput.addEventListener("change", triggerLookup);
    jobNoInput.addEventListener("blur", triggerLookup);
  }

  loadGoListCsv();

  // Buttons
  const btnSave = document.getElementById("btn-save-json");
  const btnLoad = document.getElementById("btn-load-json");
  const fileInput = document.getElementById("file-load-json");
  const btnPdf = document.getElementById("btn-export-pdf");
  const btnClear = document.getElementById("btn-clear-all");

  if (btnSave) btnSave.addEventListener("click", downloadJson);
  if (btnLoad && fileInput) {
    btnLoad.addEventListener("click", () => fileInput.click());
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) handleJsonFile(file);
      fileInput.value = "";
    });
  }
  if (btnPdf) btnPdf.addEventListener("click", exportPdf);
  if (btnClear) btnClear.addEventListener("click", clearForNewProject);

  // Initial badges & checklist render
  syncBadges();
  renderChecklist();

  // Smooth scroll for sidebar anchors
  document.querySelectorAll("[data-scroll-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-scroll-target");
      if (!target) return;
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Toggle between checklist and checker views
  const sectionButtons = Array.from(document.querySelectorAll("[data-section-target]"));
  const sections = Array.from(document.querySelectorAll("[data-section]"));
  function setActiveSection(name) {
    sectionButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-section-target") === name);
    });
    sections.forEach((sec) => {
      sec.classList.toggle("section-hidden", sec.getAttribute("data-section") !== name);
    });
    const target = document.querySelector(`[data-section='${name}']`);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  sectionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.getAttribute("data-section-target");
      if (name) setActiveSection(name);
    });
  });
  setActiveSection("checklist");

  // Start proposal checker module
  initProposalChecker();
  loadSpecListCsv();
});
