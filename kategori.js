const button = document.querySelectorAll(".category-section a");

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const kategori = btn.dataset.jenis;
    console.log("Kategori dari link:", kategori, kategori.length);


    localStorage.setItem("kategori", kategori);

    window.location.href = "/marketpage.html?kategori=" + encodeURIComponent(kategori);
  });
});


