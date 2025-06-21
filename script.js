// (Tuỳ chọn) Nếu bạn muốn highlight menu đang active:
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 70;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
};
