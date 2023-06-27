const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".sections-navbar");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
});

const projects = {
  speaker1: {
    id: 1,
    name: "Pigbin",
    image: "img/Pigbin.jpg",
    intro: "ATP-Interim Party Leader.",
    info: "Have more than 4 yeasrs of experience in politics",
  },

  speaker2: {
    id: 2,
    name: "Eng. Kalomba",
    image: "img/Kalomba.jpg",
    intro: "ATP-Interim Secretary General.",
    info: "Have more than 4 yeasrs of experience in politics",
  },

  speaker3: {
    id: 3,
    name: "Benson",
    image: "img/Benson.png",
    intro: "ATP-Interim Deputy Party Leader.",
    info: "Have more than 4 yeasrs of experience in politics",
  },

  speaker4: {
    id: 4,
    name: "Virginia",
    image: "img/Victoria.jpg",
    intro: "ATP-Interim National Chairperson.",
    info: "Have more than 4 yeasrs of experience in politics",
  },

  speaker5: {
    id: 5,
    name: "Soviet",
    image: "img/Soviet.jpg",
    intro: "ATP-Interim Treasurer.",
    info: "Have more than 4 yeasrs of experience in politics",
  },

  speaker6: {
    id: 6,
    name: "Salad",
    image: "img/Salad.jpg",
    intro: "ATP-Interim National Coordinator.",
    info: "Have more than 4 yeasrs of experience in politics",
  },
};

// speaker section code

const speakerSection = document.querySelector(".featured-speakers");

const speakerTitle = document.createElement("h1");
speakerTitle.className = "speaker-title";
speakerTitle.textContent = "Featured Speakers";
speakerSection.appendChild(speakerTitle);

const redLine = document.createElement("span");
redLine.className = "span-red";
speakerSection.appendChild(redLine);

const speakersMainBox = document.createElement("div");
speakersMainBox.className = "speakers-main-box";
speakerSection.appendChild(speakersMainBox);

Object.values(projects).forEach((values) => {
  const speakerBox = document.createElement("div");
  speakerBox.className = `speaker-box ${values.name
    .toLowerCase()
    .replace(" ", "-")}`;
  speakerBox.innerHTML = `
  <img class="speaker-img" src=${values.image} alt="speaker image">
  <div class="speaker-info-box">
    <h1 class="speaker-subtitle">${values.name}</h1>
    <h2 class="speaker-intro">${values.intro}</h2>
    <p class="speaker-info">${values.info}</p>
  </div>
  `;
  speakersMainBox.appendChild(speakerBox);
});

const moreBtn = document.createElement("button");
moreBtn.className = "more-btn";
moreBtn.innerHTML = `
MORE<img class="expand-icon" src="img/expand-btn.png">
`;
speakerSection.appendChild(moreBtn);

const lessBtn = document.createElement("button");
lessBtn.className = "less-btn";
lessBtn.innerHTML = `
LESS<img class="expand-icon" src="img/contract-btn.png">
`;
lessBtn.style.display = "none";
speakerSection.appendChild(lessBtn);

const future = document.querySelector(".benson");
const lilUzi = document.querySelector(".virginia");
const kodakBlack = document.querySelector(".soviet");
const lilWayne = document.querySelector(".salad");

moreBtn.addEventListener("click", () => {
  future.style.display = "flex";
  lilUzi.style.display = "flex";
  kodakBlack.style.display = "flex";
  lilWayne.style.display = "flex";
  lessBtn.style.display = "flex";
  moreBtn.style.display = "none";
});

lessBtn.addEventListener("click", () => {
  future.style.display = "none";
  lilUzi.style.display = "none";
  kodakBlack.style.display = "none";
  lilWayne.style.display = "none";
  lessBtn.style.display = "none";
  moreBtn.style.display = "flex";
});
