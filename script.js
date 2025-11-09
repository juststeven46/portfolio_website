// ==========================================================
// 🧭 HANDLE NAVBAR REDIRECTS
// ==========================================================
document.querySelectorAll(".navbar-home").forEach(el => {
  el.addEventListener("click", () => window.location.href = "index.html");
});
document.querySelectorAll(".navbar-article").forEach(el => {
  el.addEventListener("click", () => window.location.href = "article.html");
});
document.querySelectorAll(".navbar-maps").forEach(el => {
  el.addEventListener("click", () => window.location.href = "maps.html");
});
document.querySelectorAll(".navbar-support").forEach(el => {
  el.addEventListener("click", () => window.location.href = "support.html");
});

// ==========================================================
// 🍔 HAMBURGER MENU (MOBILE)
// ==========================================================
const mobileNav = document.getElementById("mobile-nav");
document.querySelectorAll(".hamburger-menu").forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    mobileNav.classList.toggle("active");
    mobileNav.style.right = mobileNav.classList.contains("active") ? "0" : "-100%";
  });
});

// ==========================================================
// 🔽 DROPDOWN (DESKTOP & MOBILE)
// ==========================================================
document.querySelectorAll(".dropdownBtn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.parentElement.querySelector(".dropdownContent").classList.toggle("hidden");
  });
});
document.querySelectorAll(".dropdownbtn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.parentElement.querySelector(".dropdowncontent").classList.toggle("hidden");
  });
});

// ==========================================================
// 🎮 TOMBOL "MAINKAN SEKARANG"
// ==========================================================
document.querySelectorAll(".link-btn-desktop, .link-btn-mobile").forEach(btn => {
  btn.addEventListener("click", () => {
    window.open("https://www.roblox.com/games/131669935920484/Point-Zero", "_blank");
  });
});

// ==========================================================
// 💬 FORM FEEDBACK & RATING  (fetch ke GAS)
// ==========================================================
const form   = document.getElementById("form");
const stars  = document.querySelectorAll(".star");
let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener("click", () => {
    selectedRating = Number(star.dataset.value);
    stars.forEach(s => {
      s.classList.toggle("text-yellow-400", s.dataset.value <= selectedRating);
      s.classList.toggle("text-gray-500",  s.dataset.value >  selectedRating);
    });
  });
});
