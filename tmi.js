
// ===================================
// TMI - RANDOM FACTS
// ===================================

// Add your random facts here
const tmiFacts = [
  "I don't know how to swim.",
  "I listen to rap music.",
  "Another random fact about me!"
];

// Current fact
let currentTmiIndex = 0;

// ===================================
// DISPLAY CURRENT FACT
// ===================================

function showTmiFact() {
  const fact = document.getElementById("tmi-fact");
  const counter = document.getElementById("tmi-counter");
  const previous = document.getElementById("tmi-prev");
  const next = document.getElementById("tmi-next");

  if (!fact || !counter || !previous || !next) {
    return;
  }

  // Display fact
  fact.textContent = tmiFacts[currentTmiIndex];

  // Display counter
  counter.textContent =
    `${currentTmiIndex + 1} / ${tmiFacts.length}`;

  // Disable arrows at beginning and end
  previous.disabled = currentTmiIndex === 0;
  next.disabled =
    currentTmiIndex === tmiFacts.length - 1;
}

// ===================================
// INITIALIZE ARROW BUTTONS
// ===================================

function initializeTmi() {
  const previous = document.getElementById("tmi-prev");
  const next = document.getElementById("tmi-next");

  if (!previous || !next) {
    return;
  }

  // Previous fact
  previous.addEventListener("click", () => {
    if (currentTmiIndex > 0) {
      currentTmiIndex--;
      showTmiFact();
    }
  });

  // Next fact
  next.addEventListener("click", () => {
    if (currentTmiIndex < tmiFacts.length - 1) {
      currentTmiIndex++;
      showTmiFact();
    }
  });
}

// ===================================
// RESET WHEN OPENING TMI
// ===================================

function resetTmi() {
  currentTmiIndex = 0;
  showTmiFact();
}
