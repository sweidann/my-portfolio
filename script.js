let html = "";
let projects_html = "";

function makeLang(lang) {
  html = document.querySelector(".languages");
  html.innerHTML += `
  <div class="language-box">
  <div class = "img-box">
  <img
  src="media/checkmark_dark.png"
  alt=""
  class="checkmark"
/>
  </div>
  <div class = lang-text-box>
  ${lang}
  </div>
 
  </div>`;
}

function makeProjectBox(img, name, langUsed, gitLink, demoLink) {
  projects_html = document.querySelector(".projects-bottom");
  projects_html.innerHTML += `
    <div class="project-box">
          <div class="project-img-div">
            <img src="${img}" alt="" class="project-img" />
          </div>
          <div class="project-name">${name}</div>
          <div class="language-used">${langUsed}</div>
          <div class="project-buttons">
            <a href="${gitLink}" target="_blank"><button class="git-project-button">GitHub</button></a>
            <a href="${demoLink}" target="_blank"
              ><button class="live-project-button">Live Sim</button></a
            >
          </div>
        </div>
        `;
}

makeLang("Java");
makeLang("JavaScript");
makeLang("HTML5");
makeLang("CSS3");

makeProjectBox(
  "media/youtube-dark.jpg",
  "Youtube Clone",
  "HTML & CSS",
  "https://github.com/sweidann/Youtube-Clone",
  "./VS Code HTML/youtube.html"
);

makeProjectBox(
  "media/amazon-dark.jpg",
  "Amazon Clone",
  "HTML,CSS & JavaScript",
  "https://github.com/sweidann/Amazon-Clonee",
  "./Amazon-Clonee/index.html"
);

makeProjectBox("media/naruto-pic-modified.PNG", "Naruto Game", "Java", "", "");

function changeHam() {
  let ham = document.querySelector(".ham-icon");
  let menu = document.querySelector(".menu-icons");
  menu.classList.toggle("open");
  ham.classList.toggle("open");
}

document
  .querySelector(".ham-icon")
  .addEventListener("click", () => changeHam());

document
  .querySelector(".menu-icons")
  .addEventListener("click", () => changeHam());
