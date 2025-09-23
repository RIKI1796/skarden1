window.addEventListener('DOMContentLoaded', function () {
  const fade = document.getElementById('page-fade');
  if (fade) {
    fade.style.opacity = '0';
    setTimeout(() => {
      fade.style.display = 'none';
    }, 3000);
  }
});