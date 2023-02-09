import Header from '../../scripts/components/Header';
import Carousel from '../../scripts/components/Carousel';
import Form from '../../scripts/components/Form';

import './index.scss';

const header = document.querySelector('.header');
const commentsCarousel = document.querySelector('.comments__carousel');
const footerForm = document.querySelector('.footer__form');
const buttons = document.querySelectorAll('button[type="button"]');

new Header(header).init();
new Carousel(commentsCarousel).init();
new Form(footerForm).init();

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(
      'You clicked button "Get started". if this was a real site something good would happen'
    );
  });
});
