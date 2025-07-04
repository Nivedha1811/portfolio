// ========== ScrollReveal Animations ==========
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 1000,
  delay: 100
});

ScrollReveal().reveal('.home-elements, .home-img, .about-info, .quote, .skills-content, .card-container, .project-card, .timeline-item, .contact-container, .contact-form', {
  origin: 'bottom'
});

//togglebar

const navLinks = document.getElementById("navLinks");
const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("closeIcon");

function openMenu() {
  navLinks.classList.add("active");
  hamburger.style.display = "none";
  closeIcon.style.display = "block";
}

function closeMenu() {
  navLinks.classList.remove("active");
  hamburger.style.display = "block";
  closeIcon.style.display = "none";
}

// Optional: Auto close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});


// ========== Progress Bars Reload on Scroll ==========
document.addEventListener("DOMContentLoaded", () => {
  const htmlBar = document.querySelector('.html-bar');
  const pythonBar = document.querySelector('.python-bar');
  const mysqlBar = document.querySelector('.mysql-bar');
  const englishBar = document.querySelector('.english-bar');

  if (!htmlBar || !pythonBar || !mysqlBar || !englishBar) {
    console.warn("Progress bars not found!");
    return;
  }

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function resetBars() {
    htmlBar.style.width = '0';
    pythonBar.style.width = '0';
    mysqlBar.style.width = '0';
    englishBar.style.width = '0';

    htmlBar.classList.remove('html-animate');
    pythonBar.classList.remove('python-animate');
    mysqlBar.classList.remove('mysql-animate');
    englishBar.classList.remove('english-animate');
  }

  function animateSkills() {
    if (isInViewport(htmlBar)) {
      htmlBar.classList.add('html-animate');
      pythonBar.classList.add('python-animate');
      mysqlBar.classList.add('mysql-animate');
      englishBar.classList.add('english-animate');
    } else {
      resetBars();
    }
  }

  window.addEventListener('scroll', animateSkills);
  animateSkills(); // trigger once on load
});

// ========== SweetAlert2 Form Validation ==========
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".main-form");

  if (!form) {
    console.error("Form not found.");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[name='name']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const message = form.querySelector("textarea[name='message']").value.trim();

    if (name.length < 5) {
      Swal.fire({
        icon: "warning",
        title: "Name must be at least 5 characters",
        toast: true,
        position: "top",
        timer: 2000,
        showConfirmButton: false
      });
      return;
    }

    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid email address",
        toast: true,
        position: "top",
        timer: 2000,
        showConfirmButton: false
      });
      return;
    }

    if (message === "") {
      Swal.fire({
        icon: "warning",
        title: "Message cannot be empty",
        toast: true,
        position: "top",
        timer: 2000,
        showConfirmButton: false
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Message sent!",
      toast: true,
      position: "top",
      timer: 2000,
      showConfirmButton: false
    });

    // Optional delay before actual form submission (simulate)
    setTimeout(() => {
      form.submit(); // or you can clear/reset instead
    }, 2000);
  });
});
