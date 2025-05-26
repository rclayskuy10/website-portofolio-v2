// Toggle mobile menu visibility
document.getElementById("menu-toggle").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden"); // Menambahkan / menghapus kelas 'hidden' untuk toggle visibilitas
});

// Handle active state for navbar links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80; // Adjust the value to match your navbar height
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: "smooth",
    });
  });
});

// Typed.js effect for text typing animation
var typed = new Typed("#text", {
  strings: ["Bachelor of Computer Science"],
  typeSpeed: 50,        // Kecepatan mengetik yang lebih halus
  backSpeed: 50,        // Kecepatan menghapus yang lebih lambat
  backDelay: 1200,      // Jeda lebih lama setelah selesai mengetik sebelum mulai menghapus
  startDelay: 300,      // Jeda sebelum mulai mengetik pertama kali
  loop: true,           // Aktifkan loop jika ingin teks diulang
  showCursor: false,    // Sembunyikan kursor untuk efek lebih smooth
});
