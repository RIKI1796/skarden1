const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Admin" && password === "admin123") {
    document.cookie = "isLoggedIn=true; max-age=3600; path=/";

    window.location.href = "/skarden_main/app/UI/html/dashboard.html";
  } else {
    alert("username atau password salah!");
  }
});

const icon = document.getElementById("icon");
const password = document.getElementById("password");

icon.onclick = () => {
  if (icon.classList.contains("bi-eye-slash")) {
    icon.classList.remove("bi-eye-slash");
    icon.classList.add("bi-eye");
    password.type = "text";
  } else {
    icon.classList.remove("bi-eye");
    icon.classList.add("bi-eye-slash");
    password.type = "password";
  }
};
