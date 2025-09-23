const button = document.querySelectorAll(".category-section a");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const kategori = btn.dataset.jenis;

    localStorage.setItem("kategori", kategori);

    window.location.href = "/marketpage.html?kategori=" + encodeURIComponent(kategori);
  });
});

