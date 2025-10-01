const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Agust",
  "Sept",
  "Okt",
  "Nov",
  "Des",
];
const dataPemasukan = [
  60000, 70000, 80000, 50000, 100000, 110000, 120000, 90000, 140000, 150000, 160000,
  170000,
];
const dataPenjualan = [10, 20, 30, 25, 50, 60, 70, 60, 90, 100, 110, 120];
const labelakun = ["Luar negeri", "Indonesia"];
const dataAkun = [200, 800];

function generateColors(data) {
  return data.map((val, i) => {
    if (val < 0) return "red";
    if (i === 0) return "green";
    return val >= data[i - 1] ? "green" : "red";
  });
}

new Chart(document.getElementById("pemasukan"), {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Pemasukan",
        data: dataPemasukan,
        borderColor: "blue",
        backgroundColor: generateColors(dataPemasukan),
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Pemasukan",
        },
      },
      x: {
        title: {
          display: true,
          text: "2025",
        },
      },
    },
  },
});

new Chart(document.getElementById("pembelian"), {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Terjual",
        data: dataPenjualan,
        borderColor: "blue",
        backgroundColor: generateColors(dataPenjualan),
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Penjualan",
        },
      },
      x: {
        title: {
          display: true,
          text: "2025",
        },
      },
    },
  },
});

new Chart(document.getElementById("akun"), {
  type: "pie",
  data: {
    labels: labelakun,
    datasets: [
      {
        label: "Akun Yang terdaftar",
        data: dataAkun,
        backgroundColor: ["rgb(0, 206, 0)", "green"],
        borderColor: "green",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "account",
        },
      },
      x: {
        title: {
          display: true,
          text: "daftar account",
        },
      },
    },
    maintainAspectRatio: true,
    responsive: true,
  },
});
