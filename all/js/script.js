const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');

// Toggle menu visibility
navBtn.addEventListener('click', () => {
  navDiv.classList.toggle('showNav');
  navBtn.setAttribute('aria-expanded', navDiv.classList.contains('showNav'));
});

// Close menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navDiv.classList.remove('showNav');
    navBtn.setAttribute('aria-expanded', 'false');
  });
});

// Close menu when clicking outside
document.addEventListener('click', e => {
  const isClickInside = navDiv.contains(e.target) || navBtn.contains(e.target);
  
  if (!isClickInside && navDiv.classList.contains('showNav')) {
    navDiv.classList.remove('showNav');
    navBtn.setAttribute('aria-expanded', 'false');
  }
});

// Close menu with Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navDiv.classList.contains('showNav')) {
    navDiv.classList.remove('showNav');
    navBtn.setAttribute('aria-expanded', 'false');
  }
});
// const navBtn = document.querySelector('#navbar-toggler');
// const navDiv = document.querySelector('.navbar-collapse');

// navBtn.addEventListener('click', () => {
//     navDiv.classList.toggle('showNav');
// });

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

function downloadCV() {
    // Create a new anchor element
    const link = document.createElement('a');
  
    // Set the href attribute to the URL of your PDF file
    link.href = './assets/cv.pdf';
  
    // Set the download attribute with the desired file name
    link.download = 'achraf-elabouye-cv.pdf';
  
    // Simulate a click on the anchor element to start the download
    link.click();
  }

  function showSection(sectionId) {
    var sections = ["home", "about", "resume","services","skills","contact","projects"];
    sections.forEach(function (item) {
      document.getElementById(item).style.display = (item === sectionId) ? "block" : "none";
    });
  }

  // Import the SMTPJS library
const smtpjs = require("smtpjs");

// Create a new SMTPJS client
const client = smtpjs.createClient({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "user.user2@gmail.com",
    password: "password",
  },
});

// Define a function to send an email
const sendEmail = ( subject, body) => {
  // Create a new SMTPJS message
  const message = smtpjs.createMessage({
    to : "user@gmail.com",
    from :"user.user@gmail.com",
    subject,
    body,
  });

  // Send the message
  client.send(message, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent!");
    }
  });
};

// Add an event listener to the submit button
document.querySelector(".btn").addEventListener("click", () => {
  // Get the values from the form
  const subject = document.querySelector("input[name=subject]").value;
  const body = document.querySelector("textarea").value;

  // Send the email
  sendEmail( subject, body);
});


