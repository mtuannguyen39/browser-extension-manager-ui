const extensionsData = [
  {
    logo: "./assets/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

const iconClassMap = {
  DevLens: "icon-devlens",
  StyleSpy: "icon-stylespy",
  SpeedBoost: "icon-speedboost",
  JSONWizard: "icon-jsonwizard",
  "TabMaster Pro": "icon-tabmaster",
  ViewportBuddy: "icon-viewportbuddy",
  "Markup Notes": "icon-markupnotes",
  GridGuides: "icon-gridguides",
  "Palette Picker": "icon-palettepieker",
  LinkChecker: "icon-linkchecker",
  "DOM Snapshot": "icon-domsnapshot",
  ConsolePlus: "icon-consoleplus",
};

const iconMap = {
  DevLens: `<img src="./assets/images/icon-devlens.svg" alt="DevLens" />`,
  StyleSpy: `<img src="./assets/images/icon-stylespy.svg" alt="StyleSpy" />`,
  SpeedBoost: `<img src="./assets/images/icon-speedboost.svg" alt="SpeedBoost" />`,
  JSONWizard: `<img src="./assets/images/icon-jsonwizard.svg" alt="JSONWizard" />`,
  "TabMaster Pro": `<img src="./assets/images/icon-tabmaster.svg" alt="TabMaster Pro" />`,
  ViewportBuddy: `<img src="./assets/images/icon-viewportbuddy.svg" alt="ViewportBuddy" />`,
  "Markup Notes": `<img src="./assets/images/icon-markupnotes.svg" alt="Markup Notes" />`,
  GridGuides: `<img src="./assets/images/icon-gridguides.svg" alt="GridGuides" />`,
  "Palette Picker": `<img src="./assets/images/icon-palettepieker.svg" alt="Palette Picker" />`,
  LinkChecker: `<img src="./assets/images/icon-linkchecker.svg" alt="LinkChecker" />`,
  "DOM Snapshot": `<img src="./assets/images/icon-domsnapshot.svg" alt="DOM Snapshot" />`,
  ConsolePlus: `<img src="./assets/images/icon-consoleplus.svg" alt="ConsolePlus" />`,
};

let extensions = [...extensionsData];
let currentFilter = "all";

// Function to filter extensions based on the selected filter
function renderExtensions() {
  const grid = document.getElementById("extensionsGrid");
  const noExtensions = document.getElementById("noExtensions");

  let filteredExtensions = extensions;

  if (currentFilter === "active") {
    filteredExtensions = extensions.filter((ext) => ext.isActive);
  } else if (currentFilter === "inactive") {
    filteredExtensions = extensions.filter((ext) => !ext.isActive);
  }

  if (filteredExtensions.length === 0) {
    grid.style.display = "none";
    noExtensions.style.display = "block";
    return;
  }

  grid.style.display = "grid";
  noExtensions.style.display = "none";

  grid.innerHTML = filteredExtensions
    .map(
      (extension, index) => `
      <div class="extension-card" style="animation-delay: ${index * 0.1}s">
          <div class="extension-header">
              <div class="extension-icon ${iconClassMap[extension.name]}">
                  <img src="${extension.logo}" alt="${extension.name}"/>
              </div>
              <div>
                  <div class="extension-name">${extension.name}</div>
              </div>
          </div>
          <div class="extension-description">${extension.description}</div>
          <div class="extension-controls">
              <button class="remove-btn" onclick="removeExtension('${
                extension.name
              }')">Remove</button>
              <div class="toggle-switch ${
                extension.isActive ? "active" : ""
              }" onclick="toggleExtension('${extension.name}')">
                  <div class="toggle-slider"></div>
              </div>
          </div>
      </div>
  `
    )
    .join("");
}

//Function to active/deactive extension
function toggleExtension(name) {
  const extension = extensions.find((ext) => ext.name === name);
  if (extension) {
    extension.isActive = !extension.isActive;
    renderExtensions();
  }
}

//Function remove extension
function removeExtension(name) {
  if (confirm(`Are you sure you want to remove ${name}?`)) {
    extensions = extension.filter((ext) => ext.name !== name);
    renderExtensions();
  }
}

//Function Dark/Light Mode
function toggleTheme() {
  const body = document.body;
  const themeToggle = document.querySelector(".theme-toggle");

  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    themeToggle.innerHTML =
      '<img src="./assets/images/icon-sun.svg" alt="Dark theme" width="24" height="24"/>';
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    themeToggle.innerHTML =
      '<img src="./assets/images/icon-moon.svg" alt="Light theme" width="24" height="24"/>';
  }
}

//Filter functionality
document.querySelectorAll(".filter-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-tab")
      .forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    currentFilter = tab.dataset.filter;
    renderExtensions();
  });
});

// Initial render
renderExtensions();
