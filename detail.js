const params = new URLSearchParams(window.location.search);

const id = params.get("id");
const detailProduk = JSON.parse(localStorage.getItem("detailProduk")) || [];
const produk = detailProduk.find((item) => item.id == id);

const image = document.getElementById("main-product-image");
const title = document.getElementById("title");
const price = document.getElementById("price");
const diskon = document.getElementById("diskon");
const detailTitle = document.getElementById("detail-title");
const jenis = document.getElementById("jenis");
const deskripsi = document.getElementById("description");
const gambarBawah = document.getElementById("gambar-bawah");
const gambarBawah2 = document.getElementById("gambar-bawah2");
const gambarBawah3 = document.getElementById("gambar-bawah3");
const gambarBawah4 = document.getElementById("gambar-bawah4");
const nama1 = document.getElementById("name1");
const nama2 = document.getElementById("name2");
const nama3 = document.getElementById("name3");
const isi1 = document.getElementById("review1");
const isi2 = document.getElementById("review2");
const isi3 = document.getElementById("review3");
const manfaat = document.getElementById("manfaat");
const quest1 = document.getElementById("quest1");
const quest2 = document.getElementById("quest2");
const quest3 = document.getElementById("quest3");
const quest4 = document.getElementById("quest4");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const kondisi = document.getElementById("kondisi");
const penyimpanan = document.getElementById("penyimpanan");
const berat = document.getElementById("berat");

if (produk) {
  image.src = produk.gambar;
  image.alt = produk.nama;
  title.textContent = produk.nama;
  price.textContent = Number(produk.harga).toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  diskon.textContent = Number(produk.diskon).toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  detailTitle.textContent = produk.nama;
  jenis.textContent = produk.jenis;
  kondisi.textContent = produk.kondisi;
  penyimpanan.textContent = produk.penyimpanan;
  berat.textContent = produk.berat;
  deskripsi.textContent = produk.deskripsi;
  gambarBawah.src = produk.gambarBawah[0];
  gambarBawah2.src = produk.gambarBawah[1];
  gambarBawah3.src = produk.gambarBawah[2];
  gambarBawah4.src = produk.gambarBawah[3];
  manfaat.textContent = produk.manfaat;
  nama1.textContent = produk.namaKomen[0];
  nama2.textContent = produk.namaKomen[1];
  nama3.textContent = produk.namaKomen[2];
  isi1.textContent = produk.isiKomen[0];
  isi2.textContent = produk.isiKomen[1];
  isi3.textContent = produk.isiKomen[2];
  quest1.textContent = produk.tanya[0];
  quest2.textContent = produk.tanya[1];
  quest3.textContent = produk.tanya[2];
  quest4.textContent = produk.tanya[3];
  answer1.textContent = produk.jawab[0];
  answer2.textContent = produk.jawab[1];
  answer3.textContent = produk.jawab[2];
  answer4.textContent = produk.jawab[3];
}

console.log(produk);
