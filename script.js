function sendWhatsAppMessage() {
  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value;

  const phone = "918839824832"; // Replace with your WhatsApp number
  const text = `Hello, I am ${name}.\nI need help with: ${service}.\n\nMy message:\n${message}`;
  const encoded = encodeURIComponent(text);

  const url = `https://wa.me/${phone}?text=${encoded}`;
  window.open(url, "_blank");

  return false;
}