
// ===== YOUTH IN-VEST v2 — script.js =====

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.style.boxShadow = window.scrollY > 50
    ? '0 4px 30px rgba(0,0,0,0.5)'
    : 'none';
});

// ===== MOBILE MENU =====
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// ===== SCROLL REVEAL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current ? 'var(--gold)' : '';
  });
});

// ===== DONATE AMOUNT BUTTONS =====
function setAmount(value, el) {
  document.getElementById('donorAmount').value = value;
  document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// ===== DONATE TABS =====
function setTab(type, el) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// ===== MAILING LIST =====
function subscribeMailingList() {
  const email = document.getElementById('mailingEmail').value.trim();
  if (!email || !email.includes('@')) { alert('Please enter a valid email address.'); return; }
  // Hook to Mailchimp / EmailJS / backend here
  document.getElementById('mailingMsg').style.display = 'block';
  document.getElementById('mailingEmail').value = '';
  console.log('Mailing list subscribe:', email);
}

// ===== CONTACT FORM =====
function sendContact() {
  const first   = document.getElementById('cfFirst').value.trim();
  const last    = document.getElementById('cfLast').value.trim();
  const email   = document.getElementById('cfEmail').value.trim();
  const message = document.getElementById('cfMessage').value.trim();
  if (!email || !email.includes('@')) { alert('Please enter a valid email.'); return; }
  if (!message) { alert('Please write a message.'); return; }
  // Hook to EmailJS, Formspree, or Netlify Forms here
  // emailjs.send("SERVICE_ID","TEMPLATE_ID",{from_name:first+" "+last,from_email:email,message});
  document.getElementById('contactMsg').style.display = 'block';
  document.getElementById('cfFirst').value = '';
  document.getElementById('cfLast').value = '';
  document.getElementById('cfEmail').value = '';
  document.getElementById('cfMessage').value = '';
  console.log('Contact:', { first, last, email, message });
}

// ===== APPLICATION FORM =====
function submitApplication() {
  const name   = document.getElementById('appName').value.trim();
  const grade  = document.getElementById('appGrade').value;
  const state  = document.getElementById('appState').value.trim();
  const school = document.getElementById('appSchool').value.trim();
  const role   = document.getElementById('appRole').value;
  const email  = document.getElementById('appEmail').value.trim();
  const teams  = [...document.querySelectorAll('.checkbox-group input:checked')].map(c => c.value);
  if (!name || !grade || !state || !school || !role || !email) { alert('Please fill all required fields.'); return; }
  if (!email.includes('@')) { alert('Please enter a valid email.'); return; }
  if (!teams.length) { alert('Please select at least one team.'); return; }
  // Hook to Google Forms or backend here
  document.getElementById('appMsg').style.display = 'block';
  console.log('Application:', { name, grade, state, school, role, email, teams });
}

// ===== DONATION FORM =====
function processDonation() {
  const name   = document.getElementById('donorName').value.trim();
  const email  = document.getElementById('donorEmail').value.trim();
  const amount = document.getElementById('donorAmount').value;
  if (!name || !email || !amount) { alert('Please fill out name, email, and amount.'); return; }
  if (!email.includes('@')) { alert('Please enter a valid email.'); return; }
  if (parseFloat(amount) <= 0) { alert('Please enter a valid amount.'); return; }
  // Redirect to Stripe / PayPal / Hack Club Bank:
  // window.location.href = 'https://buy.stripe.com/YOUR_LINK';
  const msg = document.getElementById('donateMsg');
  msg.textContent = `✅ Thank you ${name}! Redirecting to payment for $${parseFloat(amount).toFixed(2)}... 🦦`;
  msg.style.display = 'block';
  console.log('Donation:', { name, email, amount });
}
