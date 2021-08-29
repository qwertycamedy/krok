if (document.querySelector('.footer')) {


  //скролл до нужного элемента при клике на ссылку
  const footerScrollLinks = document.querySelectorAll('.footer__list-link[data-link-path]');

  footerScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      let t = e.target,
        linkPath = t.getAttribute('data-link-path'),
        scrollTarget = document.querySelector(linkPath),
        headerHeight = header.offsetHeight,
        pathLength = scrollTarget.getBoundingClientRect().top,
        offsetPosition = pathLength - headerHeight - 20;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });



}
