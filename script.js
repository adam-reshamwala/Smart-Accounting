
// Inline Post Problem Form (Homepage)
document.getElementById("problemForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Problem submitted successfully! (This is just a demo)");
});

// Post Problem Page Form (with EmailJS)
document.getElementById("problemFormPage")?.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_kkio9qo", "template_hk3i09h", this)
    .then(() => {
      alert("✅ Problem submitted successfully! We'll get back to you shortly.");
      this.reset();
    }, (error) => {
      console.error("❌ EmailJS Error:", error);
      alert("Something went wrong. Please try again later.");
    });
});

// FAQ Toggle
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    item.classList.toggle("active");
  });
});

// Open tutorial video
function openVideo(url) {
  const modal = document.getElementById("modalOverlay");
  const iframe = document.getElementById("tutorialVideo");
  iframe.src = url + "?autoplay=1";
  modal.style.display = "flex";
}

// Close video modal
function closeModal() {
  const modal = document.getElementById("modalOverlay");
  const iframe = document.getElementById("tutorialVideo");
  iframe.src = "";
  modal.style.display = "none";
}
// Toggle mobile nav visibility
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// Close menu when a nav link is clicked
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const navMenu = document.getElementById("navLinks");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
});

// ✅ Close menu on scroll (new)
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navLinks");
  nav.classList.remove("show");
});