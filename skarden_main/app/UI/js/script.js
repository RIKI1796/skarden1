
const navbar = document.querySelectorAll(".tombol");
const menu = document.querySelectorAll(".menu");

navbar.forEach((tombol, index) => {
  tombol.onclick = () => {
    navbar.forEach((btn) => btn.classList.remove("active"));
    tombol.classList.add("active");

    menu.forEach((m) => {
      m.classList.remove("d-flex", "d-grid");
      m.classList.add("d-none"); 
    });

    const target = menu[index];
    target.classList.remove("d-none");

    if (target.classList.contains("dashboard")) {
      target.classList.add("d-grid");
    } else {
      target.classList.add("d-flex");
    }
  };
});
