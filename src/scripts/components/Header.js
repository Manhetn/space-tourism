export default class Header {
  constructor(elem) {
    this.elem = elem;
    this.navigation = this.elem.querySelector('.navigation');
    this.toggleNavigationButton = this.elem.querySelector(
      '.navigation__toggle-button'
    );
  }

  init() {
    this.addListeners();
  }

  addListeners() {
    this.toggleNavigationButton.addEventListener('click', () => {
      this.navigation.classList.toggle('navigation--mobile');
    });
  }
}
