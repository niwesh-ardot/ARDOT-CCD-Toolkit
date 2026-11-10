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
        label: "Notice of Nondiscrimination (Rev. 09/24/2026).",
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
        id: "cl-fed-Foreign-Aircraft",
        label:
          'Use of Foreign Unmanned Aircraft Systems (3/12/2026).',
      },
      {
        id: "cl-bidders-list",
        label: "Bidders List (Job no., name, letting date 10/1/2025).",
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
          "NPDES Certification: If the Storm Water Pollution Prevention Plan SP was included, check the Job Number on Contractor's Certification Statement.",
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
        label: "FHWA-1273 (12 pages, 06/25/2026).",
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
  "cl-fed-Foreign-Aircraft",
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

// Embedded logo works when the application is opened directly from disk.
async function loadLogoAsDataUrl() {
  return window.CCD_PDF_LOGO || null;
}

// ==============================
// PDF export (summary style)
// ==============================
async function exportPdf() {
  if (!window.jspdf?.jsPDF) {
    alert("PDF library not loaded. Please check your internet connection and reload.");
    return;
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  // Embed fonts to preserve spacing across PDF viewers and printers.
  const pdfFonts = window.CCD_PDF_FONTS || [];
  pdfFonts.forEach(({ style, data }) => {
    const name = `LiberationSans-${style}.ttf`;
    doc.addFileToVFS(name, data);
    doc.addFont(name, "CCD", style);
  });
  const pdfFont = pdfFonts.length ? "CCD" : "helvetica";
  const meta = collectMetaFromDom();
  const sections = CHECKLIST_SECTIONS.map((section) => ({
    ...section,
    items: section.items.filter((item) => !meta.stateFunded ||
      (section.id !== "federal-reqs" && !STATE_EXCLUDE_ITEM_IDS.has(item.id))),
  })).filter((section) => section.items.length);
  const items = sections.flatMap((section) => section.items);
  const completed = items.filter((item) => state.items[item.id]?.checked).length;
  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();
  const margin = 40, bottom = height - 48, bodyWidth = width - margin * 2;
  const blue = [0, 65, 117], ink = [28, 40, 54], muted = [84, 99, 115];
  const line = [211, 221, 230];
  const lineHeight = 13;
  const logoDataUrl = await loadLogoAsDataUrl();
  let y;
  const clean = (value) => String(value ?? "").replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"').replace(/[–—]/g, "-").replace(/\t/g, "    ");
  const font = (size = 10, style = "normal", color = ink) => {
    doc.setFont(pdfFont, style);
    doc.setFontSize(size);
    doc.setTextColor(...color);
    doc.setLineHeightFactor(1.3);
  };
  const wrap = (text, available, size = 10, style = "normal") => {
    font(size, style);
    return doc.splitTextToSize(clean(text) || "-", available);
  };
  const rule = (top) => {
    doc.setDrawColor(...line);
    doc.setLineWidth(0.5);
    doc.line(margin, top, width - margin, top);
  };
  const pageHeader = () => {
    if (logoDataUrl) {
      const logoWidth = 94;
      const image = doc.getImageProperties(logoDataUrl);
      const logoHeight = logoWidth * image.height / image.width;
      doc.addImage(logoDataUrl, "PNG", width - margin - logoWidth, 28,
        logoWidth, logoHeight, "ardot-logo", "FAST");
    }
    font(9, "bold", blue);
    doc.text("ARDOT  /  CONSTRUCTION CONTRACT DEVELOPMENT", margin, 34);
    font(19, "bold", blue);
    doc.text("Proposal Review Checklist", margin, 58);
    font(9, "normal", muted);
    // Separate lines keep the title, project identifier and dates from colliding.
    doc.text(wrap(`Job: ${meta.jobNo || "-"}   |   Call: ${meta.callNo || "-"}`, bodyWidth - 155, 9).slice(0, 2), margin, 76);
    doc.text(clean(meta.reviewDate || new Date().toISOString().slice(0, 10)), width - margin, 76, { align: "right" });
    rule(96);
    y = 110;
  };
  const newPage = () => { doc.addPage(); pageHeader(); };
  const ensure = (needed) => { if (y + needed > bottom) newPage(); };
  const checkbox = (top, checked) => {
    doc.setDrawColor(...(checked ? blue : muted));
    doc.setLineWidth(0.8);
    doc.rect(margin + 9, top, 10, 10);
    if (checked) {
      doc.setLineWidth(1.4);
      doc.line(margin + 11, top + 5, margin + 14, top + 8);
      doc.line(margin + 14, top + 8, margin + 17, top + 2);
    }
  };
  pageHeader();

  // Compact summary: all values remain legible in grayscale.
  const stats = [
    ["VERIFIED", `${completed} / ${items.length}`],
    ["PENDING", String(items.length - completed)],
    ["COMPLETE", `${items.length ? Math.round(completed / items.length * 100) : 0}%`],
  ];
  stats.forEach(([label, value], i) => {
    const x = margin + i * (bodyWidth / 3);
    font(8, "bold", muted); doc.text(label, x + 10, y + 13);
    font(17, "bold", blue); doc.text(value, x + 10, y + 34);
  });
  y += 50;
  rule(y); y += 10;

  // Size each metadata row from its actual wrapped contents. Exceptionally long
  // imported values continue on another page instead of overflowing the box.
  const metadata = [
    [["JOB NUMBER", meta.jobNo], ["CALL NUMBER", meta.callNo], ["FAP", meta.fapNo], ["DISTRICT", meta.district]],
    [["PROJECT NAME", meta.jobName], ["COUNTY(IES)", meta.county]],
    [["ROUTE / SECTION", meta.routeSection], ["LETTING TIME", meta.lettingTime]],
    [["REVIEWER", meta.reviewer], ["REVIEW DATE", meta.reviewDate]],
  ];
  metadata.forEach((cells) => {
    const cellWidth = bodyWidth / cells.length;
    const values = cells.map((cell) => wrap(cell[1], cellWidth - 20));
    let offset = 0, maxLines = Math.max(...values.map((value) => value.length));
    while (offset < maxLines) {
      ensure(49);
      const count = Math.min(maxLines - offset, Math.floor((bottom - y - 30) / lineHeight));
      const rowHeight = count * lineHeight + 26;
      doc.setFillColor(245, 248, 251); doc.rect(margin, y, bodyWidth, rowHeight, "F");
      cells.forEach(([label], i) => {
        const x = margin + cellWidth * i + 10;
        font(7.5, "bold", muted); doc.text(label + (offset ? " (CONT.)" : ""), x, y + 12);
        font();
        const slice = values[i].slice(offset, offset + count);
        if (slice.length) doc.text(slice, x, y + 27);
      });
      y += rowHeight + 3;
      offset += count;
      if (offset < maxLines) newPage();
    }
  });
  y += 5;
  ensure(38);
  font(9, "bold", blue);
  doc.text(meta.stateFunded ? "100% STATE FUNDED" : meta.federallyFunded ? "FEDERAL AID" : "FUNDING: NOT SPECIFIED", margin + 10, y + 10);
  font(8.5, "normal", muted);
  doc.text("Checked = verified   |   Empty = pending   |   Notes follow their item", margin + 10, y + 26);
  y += 40;

  const general = clean(meta.generalComments).trim();
  if (general) {
    const lines = wrap(general, bodyWidth - 20);
    let offset = 0;
    while (offset < lines.length) {
      ensure(64);
      const count = Math.min(lines.length - offset, Math.floor((bottom - y - 34) / lineHeight));
      font(10, "bold", blue);
      doc.text(offset ? "General comments (continued)" : "General comments", margin + 10, y + 12);
      font(); doc.text(lines.slice(offset, offset + count), margin + 10, y + 30);
      y += count * lineHeight + 34;
      offset += count;
      if (offset < lines.length) newPage();
    }
    y += 8;
  }

  // Each row is measured before placing its section heading. Notes are part of
  // the same row; rows larger than a full page receive explicit continuations.
  const textX = margin + 29;
  const reviewerX = width - margin - 125, dateX = width - margin - 60;
  const labelWidth = reviewerX - textX - 12;
  const sectionHeader = (section, continued = false) => {
    const titleLines = wrap(section.title + (continued ? " (continued)" : ""), bodyWidth - 20, 11, "bold");
    const titleHeight = titleLines.length * 14 + 12;
    doc.setFillColor(232, 239, 246);
    doc.rect(margin, y, bodyWidth, titleHeight, "F");
    font(11, "bold", blue); doc.text(titleLines, margin + 9, y + 16);
    y += titleHeight;
    font(8, "bold", muted);
    doc.text("CHECK ITEM", textX, y + 13);
    doc.text("REVIEWER", reviewerX, y + 13);
    doc.text("DATE", dateX, y + 13);
    y += 21; rule(y);
  };
  sections.forEach((section) => {
    const rows = section.items.map((item) => {
      const entry = state.items[item.id] || {};
      const label = wrap(item.label, labelWidth);
      const note = clean(entry.note).trim();
      const notes = note ? wrap(`Notes: ${note}`, labelWidth, 9, "italic") : [];
      const reviewer = wrap(meta.reviewer, 56, 9);
      const date = wrap(meta.reviewDate, 60, 9);
      const mainLines = Math.max(label.length, reviewer.length, date.length);
      return { entry, label, notes, reviewer, date, mainLines, height: 18 + (mainLines + notes.length) * lineHeight + (notes.length ? 5 : 0) };
    });
    const headingHeight = wrap(section.title, bodyWidth - 20, 11, "bold").length * 14 + 33;
    ensure(headingHeight + Math.min(rows[0].height, 100));
    sectionHeader(section);
    rows.forEach((row) => {
      // Keep ordinary item + note rows intact across page boundaries.
      if (y + row.height > bottom && row.height <= bottom - 110 - headingHeight) {
        newPage(); sectionHeader(section, true);
      }
      const label = [...row.label];
      const reviewer = [...row.reviewer], date = [...row.date];
      // Pad so notes always appear below all three columns.
      while (label.length < row.mainLines) label.push("");
      const content = label.map((text, i) => ({text, reviewer: reviewer[i], date: date[i], note: false}));
      content.push(...row.notes.map((text) => ({text, note: true})));
      let offset = 0;
      while (offset < content.length) {
        if (bottom - y < 45) { newPage(); sectionHeader(section, true); }
        const count = Math.min(content.length - offset, Math.floor((bottom - y - 18) / lineHeight));
        const rowHeight = count * lineHeight + 18;
        doc.setFillColor(...(row.entry.checked ? [246, 249, 251] : [255, 255, 255]));
        doc.rect(margin, y, bodyWidth, rowHeight, "F");
        if (!offset) checkbox(y + 9, !!row.entry.checked);
        else { font(7, "bold", muted); doc.text("cont.", margin + 3, y + 16); }
        content.slice(offset, offset + count).forEach((part, i) => {
          const baseline = y + 17 + i * lineHeight;
          font(part.note ? 9 : 10, part.note ? "italic" : "normal", part.note ? [136, 35, 48] : ink);
          if (part.text) doc.text(part.text, textX, baseline);
          font(9);
          if (part.reviewer) doc.text(part.reviewer, reviewerX, baseline);
          if (part.date) doc.text(part.date, dateX, baseline);
        });
        y += rowHeight; rule(y);
        offset += count;
        if (offset < content.length) { newPage(); sectionHeader(section, true); }
      }
    });
    y += 12;
  });

  const pages = doc.getNumberOfPages();
  for (let page = 1; page <= pages; page++) {
    doc.setPage(page);
    rule(height - 35);
    font(8, "normal", muted);
    doc.text("CCD  /  Proposal review record", margin, height - 21);
    doc.text(`Page ${page} of ${pages}`, width - margin, height - 21, { align: "right" });
  }
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
