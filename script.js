
const landing = document.getElementById("landing");
const menu = document.getElementById("menu");
const content = document.getElementById("content");

const avatar = document.getElementById("landing-avatar");
const intro = document.querySelector(".intro");
const exploreButton = document.getElementById("explore-button");
const backButton = document.getElementById("back-button");

const sectionTitle = document.getElementById("section-title");
const sectionBody = document.getElementById("section-body");

// ===================================
// AVATAR IMAGES
// ===================================

const defaultAvatar = "images/avatar-default.png";
const hoverAvatar = "images/avatar-hover.png";

// Show greeting when hovering over avatar
avatar.addEventListener("mouseenter", () => {
  avatar.src = hoverAvatar;
  intro.classList.add("visible");
});

// Return to default when leaving landing
landing.addEventListener("mouseleave", () => {
  avatar.src = defaultAvatar;
  intro.classList.remove("visible");
});

// ===================================
// MAIN MENU
// ===================================

exploreButton.addEventListener("click", () => {
  landing.hidden = true;
  menu.hidden = false;
});

// ===================================
// SECTION CONTENT
// ===================================

const sections = {
  about: {
    title: "About",
    body: `Hi, I'm Despoina, a 27-year-old aspiring game developer trying to find my place in the gaming industry.

I hold a BSc in Mathematics and am currently completing my MSc in Game and Multimedia Application Development.

For my master's thesis, I developed an immersive analytics framework that uses a tree metaphor to visualize stock market data. I then conducted a user evaluation study to explore whether an immersive VR environment enhances data analysis compared to a traditional 3D desktop setup.

I mainly work with Unity and C#, and I also have experience with Python. I'm particularly interested in being part of creative game development and interactive application projects.

In 2026, I moved to Amsterdam in search of new opportunities. I'm currently part of the team at Birungi Studio, where I work part-time on a VR project.`
  },

  projects: {
    title: "Projects",
    body: "My projects will appear here."
  },

  tmi: {
    title: "TMI",
    body: `
      <div class="tmi-container">

        <div class="tmi-heading">
          <h3>Too Much Information.</h3>
          <p>You didn't ask, but here are a bunch of random facts about me.</p>
        </div>

        <div class="tmi-slideshow">
          <p id="tmi-fact"></p>

          <div class="tmi-navigation">
            <button
              id="tmi-prev"
              aria-label="Previous fact"
              type="button"
            >←</button>

            <span id="tmi-counter"></span>

            <button
              id="tmi-next"
              aria-label="Next fact"
              type="button"
            >→</button>
          </div>
        </div>

      </div>
    `
  },

  contact: {
    title: "Contact",
    body: "Contact information coming soon."
  }
};

// ===================================
// OPEN SELECTED SECTION
// ===================================

document.querySelectorAll("[data-section]").forEach(button => {
  button.addEventListener("click", () => {

    const selected = button.dataset.section;
    const section = sections[selected];

    if (!section) return;

    sectionTitle.textContent = section.title;

    // TMI contains HTML and interactive buttons
    if (selected === "tmi") {
      sectionBody.innerHTML = section.body;

      initializeTmi();
      resetTmi();
    } else {
      sectionBody.textContent = section.body;
    }

    // Keep the selected circle in the same position
    const circlePosition = button.getBoundingClientRect();
    const contentPosition = content.getBoundingClientRect();

    sectionTitle.style.position = "absolute";
    sectionTitle.style.top =
      (circlePosition.top - contentPosition.top) + "px";

    sectionTitle.style.left =
      circlePosition.left + "px";

    sectionTitle.style.transform = "none";

    // Show content
    menu.hidden = true;
    content.hidden = false;
  });
});

// ===================================
// BACK TO MENU
// ===================================

backButton.addEventListener("click", () => {
  content.hidden = true;
  menu.hidden = false;
});
