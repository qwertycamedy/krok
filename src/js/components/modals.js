if (document.querySelector('.cons')) {
  const consOpen = document.querySelector('.banner__btn'),
    cons = document.querySelector('.cons'),
    pageWrapper = document.querySelector('.wrapper');


  consOpen.addEventListener('click', () => {
    cons.classList.add('active');
    pageWrapper.classList.add('blur');
    document.body.style.overflow = 'hidden';
  });

  cons.addEventListener('click', (e) => {
    let t = e.target;

    if(t.classList.contains('cons')) {
      cons.classList.remove('active');
      pageWrapper.classList.remove('blur');
      document.body.style.overflow = '';
    }
  });

}
