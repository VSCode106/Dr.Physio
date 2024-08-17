


const nav = document.querySelector('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // scrolling down, hide nav
    nav.classList.add('hide');
  } else {
    // scrolling up, show nav
    nav.classList.remove('hide');
  }
  lastScrollTop = scrollTop;
});