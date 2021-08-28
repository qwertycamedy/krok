if(document.querySelector('.header')) {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', () => {
    if(pageYOffset > 1000) {
      header.classList.add('fixed');
      header.classList.remove('unfixed');
    } else {
      header.classList.remove('fixed');
      header.classList.add('unfixed');
    }
  });

  

}