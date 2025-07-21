document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMsg");

  if (!name || !email || !message) {
    formMsg.textContent = "All fields are required.";
    formMsg.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    formMsg.textContent = "Please enter a valid email.";
    formMsg.style.color = "red";
    return;
  }

  formMsg.textContent = "Message sent successfully!";
  formMsg.style.color = "green";

  document.getElementById("contactForm").reset();
});