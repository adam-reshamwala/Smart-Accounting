document.getElementById("problemForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Problem submitted successfully! (This is just a demo)");
});
// Handle separate Post Problem Page form
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
// FAQ toggle
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    item.classList.toggle("active");
  });
});
function openVideo(url) {
  const modal = document.getElementById("modalOverlay");
  const iframe = document.getElementById("tutorialVideo");
  iframe.src = url + "?autoplay=1";
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("modalOverlay");
  const iframe = document.getElementById("tutorialVideo");
  iframe.src = "";
  modal.style.display = "none";
}
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}