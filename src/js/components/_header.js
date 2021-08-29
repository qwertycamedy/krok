if (document.querySelector('.header')) {


  var header = document.querySelector('.header');



  //появление хедера при определенном скролле
  window.addEventListener('scroll', () => {
    if (pageYOffset > 1000) {
      header.classList.add('fixed');
      header.classList.remove('unfixed');
    } else {
      header.classList.remove('fixed');
      header.classList.add('unfixed');
    }
  });





  //скролл до нужного элемента при клике на ссылку
  const headerScrollLinks = document.querySelectorAll('.header__list-link[data-link-path]');

  headerScrollLinks.forEach(link => {
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



      if (headerListButton.classList.add('active') || headerListOuter.classList.contains('active')) {
        headerListButton.classList.remove('active');
        headerListOuter.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });




  //меню на мобилках
  const headerListButton = document.querySelector('.header__list-button'),
    headerListOuter = document.querySelector('.header__list-outer');

  headerListButton.addEventListener('click', () => {
    if (!headerListButton.classList.contains('active') || !headerListOuter.classList.contains('active')) {
      headerListButton.classList.add('active');
      headerListOuter.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      headerListButton.classList.remove('active');
      headerListOuter.classList.remove('active');
      document.body.style.overflow = '';
    }
  });


}
