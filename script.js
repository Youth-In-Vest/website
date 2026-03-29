// ===== YOUTH IN-VEST — script.js =====

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
function closeMobile() {
  mobileMenu.classList.remove('open');
}

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

// ===== DONATE: AMOUNT BUTTONS =====
function setAmount(value) {
  document.getElementById('donorAmount').value = value;
  document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

// ===== DONATE: TABS =====
function setTab(type, el) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  el.classList.add('active');
}

// ===== MAILING LIST SUBSCRIBE =====
function subscribeMailingList() {
  const email = document.getElementById('mailingEmail').value.trim();
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  // In production: hook this up to Mailchimp, EmailJS, or your backend
  document.getElementById('mailingMsg').style.display = 'block';
  document.getElementById('mailingEmail').value = '';
  console.log('Mailing list subscription:', email);
}

// ===== CONTACT FORM =====
function sendContact() {
  const first = document.getElementById('cfFirst').value.trim();
  const last = document.getElementById('cfLast').value.trim();
  const email = document.getElementById('cfEmail').value.trim();
  const message = document.getElementById('cfMessage').value.trim();

  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  if (!message) {
    alert('Please write a message.');
    return;
  }

  // In production: use EmailJS or a backend endpoint to send this to your email
  // Example EmailJS call (replace with your keys):
  // emailjs.send("SERVICE_ID", "TEMPLATE_ID", { from_name: first+" "+last, from_email: email, message });

  document.getElementById('contactMsg').style.display = 'block';
  document.getElementById('cfFirst').value = '';
  document.getElementById('cfLast').value = '';
  document.getElementById('cfEmail').value = '';
  document.getElementById('cfMessage').value = '';

  console.log('Contact form submitted:', { first, last, email, message });
}

// ===== APPLICATION FORM =====
function submitApplication() {
  const name = document.getElementById('appName').value.trim();
  const grade = document.getElementById('appGrade').value;
  const state = document.getElementById('appState').value.trim();
  const school = document.getElementById('appSchool').value.trim();
  const role = document.getElementById('appRole').value;
  const email = document.getElementById('appEmail').value.trim();

  const checkedTeams = [...document.querySelectorAll('.checkbox-group input:checked')]
    .map(cb => cb.value);

  if (!name || !grade || !state || !school || !role || !email) {
    alert('Please fill out all required fields.');
    return;
  }
  if (!email.includes('@')) {
    alert('Please enter a valid email.');
    return;
  }
  if (checkedTeams.length === 0) {
    alert('Please select at least one team.');
    return;
  }

  // In production: send this to a Google Form or your backend
  document.getElementById('appMsg').style.display = 'block';
  console.log('Application submitted:', { name, grade, state, school, role, email, teams: checkedTeams });
}

// ===== DONATION FORM =====
function processDonation() {
  const name = document.getElementById('donorName').value.trim();
  const email = document.getElementById('donorEmail').value.trim();
  const amount = document.getElementById('donorAmount').value;

  if (!name || !email || !amount) {
    alert('Please fill out your name, email, and donation amount.');
    return;
  }
  if (!email.includes('@')) {
    alert('Please enter a valid email.');
    return;
  }
  if (parseFloat(amount) <= 0) {
    alert('Please enter a valid donation amount.');
    return;
  }

  // In production: redirect to Stripe, PayPal, or your payment provider
  // And send confirmation email via EmailJS or your backend
  const msg = document.getElementById('donateMsg');
  msg.textContent = `✅ Thank you ${name}! Redirecting to payment for $${parseFloat(amount).toFixed(2)}...`;
  msg.style.display = 'block';

  console.log('Donation initiated:', { name, email, amount });

  // Example: window.location.href = 'https://buy.stripe.com/YOUR_LINK?amount=' + amount;
}

// ===== SMOOTH ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.getAttribute('id');
    }
  });
  navLinkEls.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current
      ? 'var(--blue)' : '';
  });
});
