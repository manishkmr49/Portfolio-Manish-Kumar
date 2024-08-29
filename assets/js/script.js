'use strict';

/**
 * Navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * Toggle the navbar when clicking any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

/**
 * Back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



document.querySelector('.contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevents the default form submission behavior
  
  const form = event.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData
  })
  .then(response => {
    if (response.ok) { // Check if the HTTP response status is 200-299
      alert("Your message has been sent successfully. We'll respond shortly!");
      form.reset(); // Reset form fields
    } else {
      return response.text().then(text => {
        throw new Error(text); // Throw an error with response text
      });
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert("Your message has been sent successfully. We'll respond shortly!");
    form.reset(); // Reset form fields
  });
});
