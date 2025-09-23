// WARNING: IF IT WORKS, DON'T TOUCH IT
const fixedNav = document.querySelector('#fixedsecondarynav');
const hero = document.querySelector('.hero');
let isFixedVisible = false;

function handleFixedNavScroll() {
  const scrollY = window.scrollY || window.pageYOffset;
  const heroHeight = hero.offsetHeight;

  if (scrollY > heroHeight * 0.2) {
    if (!isFixedVisible) {
      fixedNav.style.display = 'flex';
      fixedNav.classList.remove('hide');
      isFixedVisible = true;
    }
  } else {
    if (isFixedVisible) {
      fixedNav.classList.add('hide');
      setTimeout(() => {
        fixedNav.style.display = 'none';
        fixedNav.classList.remove('hide');
        isFixedVisible = false;
      }, 300);
    }
  }
}

function updateParallax() {
  const scrollY = window.scrollY || window.pageYOffset;
  const heroBottom = hero.getBoundingClientRect().bottom;
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.transform = heroBottom > 0 ? `translateY(${scrollY * 0.3}px)` : `translateY(0)`;
  }
}

function updateLogobottParallax() {
  const logobott = document.querySelector('.logobott');
  const video = document.querySelector('.logobott-video');
  if (logobott && video) {
    const rect = logobott.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const offset = window.scrollY - logobott.offsetTop;
      video.style.transform = `translateY(${offset * 0.6}px) scale(1.05)`;
    } else {
      video.style.transform = 'translateY(0) scale(1.05)';
    }
  }
}

function toggleSortingMenu() {
  const toggleBtn = document.querySelector('.toggle-sorting-btn');
  const sortingMenu = document.querySelector('.collapsible-sorting');
  if (toggleBtn && sortingMenu) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
      sortingMenu.classList.toggle('collapsed', isExpanded);
    });
  }
}

function toggleSortingSection() {
  const toggleSortingSectionBtn = document.getElementById('toggle-sorting-section-btn');
  const productsListContainer = document.querySelector('.productslist-container');
  const sortingPanel = document.querySelector('.sorting');
  const toggleArrow = toggleSortingSectionBtn?.querySelector('.toggle-arrow');

  if (!toggleSortingSectionBtn || !productsListContainer || !toggleArrow || !sortingPanel) return;

  toggleSortingSectionBtn.addEventListener('click', () => {
    const isCollapsed = productsListContainer.classList.contains('sorting-collapsed');

    if (!isCollapsed) {
      sortingPanel.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
      sortingPanel.style.transform = 'translateX(-100%)';
      sortingPanel.style.opacity = '0';
      productsListContainer.classList.add('sorting-collapsed');
      toggleArrow.textContent = '>';
    } else {
      sortingPanel.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
      sortingPanel.style.transform = 'translateX(0)';
      sortingPanel.style.opacity = '1';
      productsListContainer.classList.remove('sorting-collapsed');
      toggleArrow.textContent = '<';
    }
  });
}



window.addEventListener('scroll', () => {
  handleFixedNavScroll();
  updateParallax();
  updateLogobottParallax();
});

const parentElement = document.querySelector('.parent');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

if (parentElement) {
  observer.observe(parentElement);
}

document.addEventListener('DOMContentLoaded', () => {
  toggleSortingMenu();
  toggleSortingSection();
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('visible');
    }, index * 100);
  });
});