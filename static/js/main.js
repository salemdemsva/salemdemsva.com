// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggler = document.querySelector('.navbar-toggler');
  const collapse = document.querySelector('#navbarToggleContent');
  
  if (toggler && collapse) {
    toggler.addEventListener('click', function() {
      collapse.classList.toggle('show');
      const expanded = toggler.getAttribute('aria-expanded') === 'true';
      toggler.setAttribute('aria-expanded', !expanded);
    });
  }
});
