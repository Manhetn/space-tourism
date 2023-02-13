import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(elem) {
    this.elem = elem;
  }

  init() {
    this.initializeSwiper();
  }

  initializeSwiper() {
    new Swiper(this.elem, {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletElement: 'li',
        clickable: true,
      },
      initialSlide: 0,
    });
  }
}
