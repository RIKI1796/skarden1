const button = document.querySelectorAll("#category-filter-menu");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const kategori = btn.dataset.jenis;

    localStorage.setItem("kategori", kategori);

    window.location.href =
      "/skarden_main/app/UI/html/marketpage.html?kategori=" +
      encodeURIComponent(kategori);
  });
});
