import Header from '../../scripts/components/Header';
import Carousel from '../../scripts/components/Carousel';

import './index.scss';

const header = document.querySelector('.header');
const crew = document.querySelector('.crew__carousel');

new Header(header).init();
new Carousel(crew).init();
