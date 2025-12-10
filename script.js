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
          "Starting on Page 1 of the schedule of items, compare the schedule to the summary of quantities in the plans. Check item code, description, unit, and quantities all match for all pay items.",
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
          "Equal Employment Opportunity â€“ Notice to Contractors (7/26/1996, 1 page).",
      },
      {
        id: "fed-eeo-resp",
        label: "Specific EEO Responsibilities (23 U.S.C. 140, 3 pages).",
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

const state = {
  items: {}, // itemId -> {checked, note}
};

function getAllItems() {
  return CHECKLIST_SECTIONS.flatMap((sec) => sec.items || []);
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
    lettingTime: get("meta-lettingTime"),
    reviewer: get("meta-reviewer"),
    reviewDate: get("meta-reviewDate"),
    stateFunded: get("meta-stateFunded"),
    federallyFunded: get("meta-federallyFunded"),
    notUsed: get("meta-notUsed"),
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
  set("meta-lettingTime", meta.lettingTime);
  set("meta-reviewer", meta.reviewer);
  set("meta-reviewDate", meta.reviewDate);
  set("meta-stateFunded", meta.stateFunded);
  set("meta-federallyFunded", meta.federallyFunded);
  set("meta-notUsed", meta.notUsed);
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
    "meta-lettingTime",
    "meta-reviewer",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  ["meta-stateFunded", "meta-federallyFunded", "meta-notUsed"].forEach((id) => {
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
  const allItems = getAllItems();
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
  const notUsed = document.getElementById("meta-notUsed").checked;

  document.getElementById("badge-state").hidden = !stateFunded;
  document.getElementById("badge-fed").hidden = !fed;
  document.getElementById("badge-notUsed").hidden = !notUsed;
}

// ==============================
// Rendering checklist
// ==============================
function renderChecklist() {
  const container = document.getElementById("checklistContainer");
  const query = (document.getElementById("searchInput").value || "")
    .toLowerCase()
    .trim();

  if (!container) return;
  container.innerHTML = "";

  let anyVisible = false;

  CHECKLIST_SECTIONS.forEach((sec) => {
    const titleMatch = sec.title.toLowerCase().includes(query);
    const descMatch = (sec.description || "").toLowerCase().includes(query);

    const filteredItems = (sec.items || []).filter((item) => {
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
  const totalItems = getAllItems().length;
  const completedItems = getAllItems().filter(
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
      { label: "FAP:", value: meta.fapNo || "" },
      { label: "Letting Time:", value: meta.lettingTime || "" },
    ],
    [
      { label: "Job Name:", value: meta.jobName || "" },
      { label: "Route/Section:", value: meta.routeSection || "" },
      { label: "County(ies):", value: meta.county || "" },
    ],
    [
      { label: "Reviewer:", value: meta.reviewer || "" },
      { label: "Date:", value: meta.reviewDate || "" },
      { label: "Call No.:", value: meta.callNo || "" },
    ],
  ];

  const colWidth = contentWidth / 3;
  const rowHeight = 34;
  doc.setLineWidth(0.6);
  tableRows.forEach((row, rIndex) => {
    row.forEach((cell, cIndex) => {
      const x = margin + colWidth * cIndex;
      const yTop = y + rowHeight * rIndex;
      doc.setFillColor(rIndex % 2 === 0 ? 250 : 244, 246, 251);
      doc.setDrawColor(...lightLine);
      doc.rect(x, yTop, colWidth, rowHeight, "FD");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(90, 90, 90);
      doc.text(cell.label, x + 8, yTop + 12);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      doc.text(cell.value || "—", x + 8, yTop + 26, {
        maxWidth: colWidth - 16,
      });
    });
  });
  y += rowHeight * tableRows.length + 14;

  // Funding bar
  if (meta.stateFunded || meta.federallyFunded || meta.notUsed) {
    const label = meta.stateFunded
      ? "100% State Funded"
      : meta.federallyFunded
      ? "Federal Aid"
      : "Checklist Not Used";
    const color = meta.stateFunded
      ? [0, 92, 200]
      : meta.federallyFunded
      ? [32, 127, 198]
      : [220, 120, 40];
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

  CHECKLIST_SECTIONS.forEach((sec) => {
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
    "meta-lettingTime",
    "meta-reviewer",
    "meta-reviewDate",
    "meta-stateFunded",
    "meta-federallyFunded",
    "meta-notUsed",
  ];
  metaIds.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const evt = el.type === "checkbox" ? "change" : "input";
    el.addEventListener(evt, () => {
      if (el.type === "checkbox") syncBadges();
      saveStateToStorage();
    });
  });

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
});






