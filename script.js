const projects = [
  {
    title: "Neural Vision Lab",
    description: "A visual playground for understanding image classification, VGG16 architecture, and the ideas behind backpropagation.",
    tags: ["Python", "Deep Learning", "VGG16"],
    github: "https://github.com/shaksham-mehra",
    live: "https://github.com/shaksham-mehra"
  },
  {
    title: "Signal / 01",
    description: "A hackathon-born experiment that turns messy inputs into a focused, explainable decision-making flow.",
    tags: ["NLP", "Python", "Hackathon"],
    github: "https://github.com/shaksham-mehra",
    live: "https://github.com/shaksham-mehra"
  },
  {
    title: "Market Lens",
    description: "A personal toolkit for tracking Indian market movements, testing hypotheses, and learning from the data.",
    tags: ["Data", "Analysis", "Jupyter"],
    github: "https://github.com/shaksham-mehra",
    live: "https://github.com/shaksham-mehra"
  }
];

const projectList = document.querySelector("#project-list");

projectList.innerHTML = projects.map((project, index) => `
  <article class="project-card">
    <span class="project-number">0${index + 1}</span>
    <div><h2>${project.title}</h2><p>${project.description}</p></div>
    <div class="tags">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
    <div class="project-links">
      <a class="project-link" href="${project.github}" target="_blank" rel="noreferrer">GitHub ↗</a>
      <a class="project-link" href="${project.live}" target="_blank" rel="noreferrer">Live ↗</a>
    </div>
  </article>
`).join("");

const views = document.querySelectorAll("[data-view]");
const viewLinks = document.querySelectorAll("[data-view-link]");

function showView(viewName) {
  views.forEach((view) => {
    const isActive = view.dataset.view === viewName;
    view.hidden = !isActive;
    view.classList.toggle("active", isActive);
  });

  viewLinks.forEach((link) => link.classList.toggle("active", link.dataset.viewLink === viewName));
  window.history.replaceState(null, "", `#${viewName}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

viewLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showView(link.dataset.viewLink);
  });
});

const initialView = window.location.hash === "#projects" ? "projects" : "about";
showView(initialView);