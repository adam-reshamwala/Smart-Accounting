function sendWhatsAppMessage() {
  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  const phone = "91xxxxxxxxxx"; // 🔁 Your WhatsApp number here
  const encodedMsg = encodeURIComponent(
    `Hello, I am ${name}.\nI need help with: ${service}.\n\nMy message:\n${message}`
  );

  const url = `https://wa.me/${phone}?text=${encodedMsg}`;
  window.open(url, "_blank");

  return false; // prevent form from submitting
}