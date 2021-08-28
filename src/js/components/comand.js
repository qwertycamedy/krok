if(document.querySelector('.comand__slider')) {
    new Swiper('.comand__slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
          nextEl: '.comand__slider-arrow-next',
          prevEl: '.comand__slider-arrow-prev'
        },
    });
}