import Header from '../../scripts/components/Header';

import './index.scss';

const header = document.querySelector('.header');
const exploreButton = document.querySelector('.intro__main-button');

new Header(header).init();

exploreButton.addEventListener('click', () => {
  alert(
    'You clicked on button "explore", but nothing happened! But something good will happen in your life in the future:)'
  );
});
