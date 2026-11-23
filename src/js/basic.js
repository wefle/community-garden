const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');

function setMenu(open) {
  if (!mobileMenu || !menuToggle) return;
  mobileMenu.hidden = !open;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute(
    'aria-label',
    open ? 'Menü schließen' : 'Menü öffnen',
  );

  if (open) {
    menuClose?.focus();
  } else {
    menuToggle.focus();
  }
}

function handleCloseMenu() {
  setMenu(false);
}

function handleMenu() {
  menuToggle?.addEventListener('click', (e) => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenu(!isOpen);
  });

  menuClose?.addEventListener('click', handleCloseMenu);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileMenu && !mobileMenu.hidden) {
      setMenu(false);
    }
  });

  mobileMenu?.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', handleCloseMenu);
  });
}

handleMenu();