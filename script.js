// 🌟 ScrollReveal Animations
ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 1000,
  delay: 100
});

ScrollReveal().reveal('.home-elements, .home-img, .about-info, .quote, .skills-content, .card-container, .project-card, .timeline-item, .contact-container, .contact-form', {
  origin: 'bottom'
});

// 💡 Project Card Flip
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

// 🔄 Progress Bars Reload on Scroll
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelector(".html-bar").classList.add("html-animate");
      document.querySelector(".python-bar").classList.add("python-animate");
      document.querySelector(".mysql-bar").classList.add("mysql-animate");
      document.querySelector(".english-bar").classList.add("english-animate");
    } else {
      document.querySelector(".html-bar").classList.remove("html-animate");
      document.querySelector(".python-bar").classList.remove("python-animate");
      document.querySelector(".mysql-bar").classList.remove("mysql-animate");
      document.querySelector(".english-bar").classList.remove("english-animate");
    }
  });
}, { threshold: 0.5 });

const skillsSection = document.querySelector("#skills");
if (skillsSection) {
  skillObserver.observe(skillsSection);
}

// ✅ Alert Messages with SweetAlert2
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

    // ✅ Valid input — show success
    Swal.fire({
      icon: "success",
      title: "Message sent!",
      toast: true,
      position: "top",
      timer: 2000,
      showConfirmButton: false
    });

    // Delay submission to let alert show
    setTimeout(() => {
      form.submit(); // submits to Formspree or your endpoint
    }, 2000);
  });
});
