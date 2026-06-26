const photos = [
  "Gallery/457392691_10161291868152296_6688430751165262929_n.jpg",
  "Gallery/468397053_10161724227067296_6389543932984762167_n.jpg",
  "Gallery/483513206_3862641227285980_7195903386302566493_n.jpg",
  "Gallery/506055211_10162408992132296_6163365023990798646_n.jpg",
  "Gallery/Hero slider/515503810_10232002757706173_3243939598743829868_n.jpg",
  "Gallery/515717005_10233635497843167_8775591942746525886_n.jpg",
  "Gallery/Hero slider/515733858_10162526609072296_664540732766483954_n.jpg",
  "Gallery/Hero slider/515935448_10162526360887296_8663058091710262468_n.jpg",
  "Gallery/516444766_10162526360952296_8996214436923751095_n.jpg",
  "Gallery/Hero slider/516779722_10162526359712296_3342126654708734186_n.jpg",
  "Gallery/516812515_10162529463277296_2782708723426224728_n.jpg",
  "Gallery/Hero slider/516859216_10162526609592296_491945289108939416_n.jpg",
  "Gallery/549289106_10162846425997296_3640500600429319716_n.jpg",
  "Gallery/551406365_18354808348093787_3014984174549029488_n.jpg",
  "Gallery/555759847_10162893632557296_1107548409648553542_n.jpg",
  "Gallery/Hero slider/555963961_10162893632642296_1545083860713825479_n (1).jpg"
];

const testimonials = [
  "What an incredible two day Poonam celebration it has been! Heartfelt thanks to the tireless volunteers whose efforts made this large scale event so beautiful. The rocking finale with Agam was the cherry on top, ending the event with a bang!",
  "It was vibrant, enriching and beautiful — stand up comedy, Theyyam, kalari, Agam, Pookkalam, Sadya... the cultural programs by talented performers from Thattakam and PSN were so enjoyable.",
  "Thanks a zillion to the tireless effort of the Thattakam committee members — the last two days were stupendo fantabulously phantasmagorically magical. Will last long in our memory!",
  "What a lovely mesmerizing concert. Literally enjoyed the cultural programmes by the residents, Singari melam, kalaripayattu and the grand Onam sadya. This is an unforgettable Onam 2025.",
  "Thank you everyone for bringing such a legendary band 'Agam'. It was nothing short of a divine performance.",
  "I have been here for 3 onams, from 2023 onwards — hands down this year was the best. Congrats to you and all the volunteers!",
  "Had soo much fun watching all cultural events — Abish Mathew and Sai Kiran were a laugh riot, theyyam was a new experience.",
  "Superb sound system, the enclosure is great — auditorium like feel.",
  "AGAM indeed is a wonderful performing troupe. Excellent songs with thrilling music and amazing sound and light system.",
  "Kudos to Team Onam! Amazing programs, perfect lights & sound, and the pandal-style décor made the auditorium look stunning.",
  "Your pandal was grand and the music and sound was exceptionally good. Everything was so grand yet so grounded.",
  "Onam Sadya was too good. Anything that's served with love always wins heart. You all are instrumental in keeping our culture and traditions alive."
];

// Hero slider
const heroPhotos = [
  "Gallery/Hero slider/515503810_10232002757706173_3243939598743829868_n.jpg",
  "Gallery/Hero slider/515733858_10162526609072296_664540732766483954_n.jpg",
  "Gallery/Hero slider/515935448_10162526360887296_8663058091710262468_n.jpg",
  "Gallery/Hero slider/516779722_10162526359712296_3342126654708734186_n.jpg",
  "Gallery/Hero slider/516859216_10162526609592296_491945289108939416_n.jpg",
  "Gallery/Hero slider/555963961_10162893632642296_1545083860713825479_n (1).jpg"
];
const heroSlider = document.getElementById("heroSlider");
heroPhotos.forEach((src, i) => {
  const div = document.createElement("div");
  div.className = "slide" + (i === 0 ? " active" : "");
  div.style.backgroundImage = `url('${encodeURI(src)}')`;
  heroSlider.appendChild(div);
});
let heroIndex = 0;
setInterval(() => {
  const slides = heroSlider.querySelectorAll(".slide");
  slides[heroIndex].classList.remove("active");
  heroIndex = (heroIndex + 1) % slides.length;
  slides[heroIndex].classList.add("active");
}, 3800);

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// Pookkalam-inspired color theme cycling across navbar, highlights & footer
const pookkalamColors = ["#7a1d2c", "#c23b22", "#d99c2b", "#e6557a", "#8e2f8f", "#2f5d3a", "#b5651d"];
function shadeColor(hex, percent) {
  const num = parseInt(hex.slice(1), 16);
  let r = (num >> 16) + Math.round(255 * (percent / 100));
  let g = ((num >> 8) & 0x00ff) + Math.round(255 * (percent / 100));
  let b = (num & 0x0000ff) + Math.round(255 * (percent / 100));
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function randomPookkalamColor() {
  const color = pookkalamColors[Math.floor(Math.random() * pookkalamColors.length)];
  const root = document.documentElement.style;
  root.setProperty("--theme-color", color);
  root.setProperty("--theme-dark", shadeColor(color, -22));
  root.setProperty("--theme-darker", shadeColor(color, -42));
}
setInterval(randomPookkalamColor, 4000);

// Gallery
const galleryGrid = document.getElementById("galleryGrid");
photos.forEach((src, i) => {
  const img = document.createElement("img");
  img.src = encodeURI(src);
  img.alt = "Onam celebration at Prestige Shantiniketan";
  img.loading = "lazy";
  if (i % 5 === 0) img.classList.add("tall");
  img.addEventListener("click", () => openLightbox(src));
  galleryGrid.appendChild(img);
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
function openLightbox(src) {
  lightboxImg.src = encodeURI(src);
  lightbox.classList.add("active");
}
document.getElementById("lightboxClose").addEventListener("click", () => {
  lightbox.classList.remove("active");
});
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("active");
});

// Voices marquee (duplicate list for seamless loop)
const voicesTrack = document.getElementById("voicesTrack");
function renderVoices() {
  testimonials.forEach((t) => {
    const card = document.createElement("div");
    card.className = "voice-card";
    card.innerHTML = `<div class="voice-quote">&ldquo;</div><p>${t}</p>`;
    voicesTrack.appendChild(card);
  });
}
renderVoices();
renderVoices();

// Background chenda melam audio toggle
const bgAudio = document.getElementById("bgAudio");
const audioToggle = document.getElementById("audioToggle");
const audioIcon = document.getElementById("audioIcon");
const audioLabel = document.getElementById("audioLabel");
let isPlaying = false;
audioToggle.addEventListener("click", () => {
  if (isPlaying) {
    bgAudio.pause();
    audioIcon.textContent = "🥁";
    audioLabel.textContent = "Play Chenda Melam";
    audioToggle.classList.remove("playing");
  } else {
    bgAudio.volume = 0.5;
    bgAudio.play();
    audioIcon.textContent = "🔇";
    audioLabel.textContent = "Pause Music";
    audioToggle.classList.add("playing");
  }
  isPlaying = !isPlaying;
});

// Try to play by default; browsers may block autoplay-with-sound until a user gesture
function startBgAudio() {
  bgAudio.volume = 0.5;
  bgAudio.play().then(() => {
    isPlaying = true;
    audioIcon.textContent = "🔇";
    audioLabel.textContent = "Pause Music";
    audioToggle.classList.add("playing");
  }).catch(() => {
    // Blocked — start on the first user interaction instead
    const resume = () => {
      if (!isPlaying) {
        bgAudio.volume = 0.5;
        bgAudio.play();
        isPlaying = true;
        audioIcon.textContent = "🔇";
        audioLabel.textContent = "Pause Music";
        audioToggle.classList.add("playing");
      }
      document.removeEventListener("click", resume);
      document.removeEventListener("keydown", resume);
      document.removeEventListener("scroll", resume);
    };
    document.addEventListener("click", resume, { once: true });
    document.addEventListener("keydown", resume, { once: true });
    document.addEventListener("scroll", resume, { once: true });
  });
}
startBgAudio();
