document.querySelectorAll(".navbar-home").forEach(el => {
  el.addEventListener("click", () => {
    window.location.href = "UH1Steven.html";
  });
});

document.querySelectorAll(".navbar-article").forEach(el => {
  el.addEventListener("click", () => {
    window.location.href = "article.html";
  });
});
document.querySelectorAll(".navbar-maps").forEach(el => {
  el.addEventListener("click", () => {
    window.location.href = "maps.html";
  });
})
document.querySelectorAll(".navbar-support").forEach(el => {
  el.addEventListener("click", () => {
    window.location.href = "support.html";
  });
});
// handle redirects ended //
const mobileNav = document.getElementById("mobile-nav")
const dropdownContent = document.querySelector(".dropdownContent")

// ketika hamburger menu diklik
document.querySelectorAll(".hamburger-menu").forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    mobileNav.classList.toggle('active');
  });
});
document.querySelectorAll(".dropdownBtn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const content = btn.parentElement.querySelector(".dropdownContent")
    content.classList.toggle('hidden');
  });
});
document.querySelectorAll(".dropdownbtn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const content = btn.parentElement.querySelector(".dropdowncontent");
    content.classList.toggle("hidden");
  });
});


