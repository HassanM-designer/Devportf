// Show Live Clock
function showTime() {
  const now = new Date();
  const time = now.toLocaleTimeString();
  const timeBox = document.getElementById('time');
  if (timeBox) timeBox.textContent = "Time Now: " + time;
}
setInterval(showTime, 1000);
showTime();

// Contact Form Alert
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      alert(`Thanks ${name}, I’ll get back to you soon!`);
      this.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
}