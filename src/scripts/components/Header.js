export default class Header {
  constructor(elem) {
    this.header = elem;
    this.navigation = this.header.querySelector(
      '.navigation'
    );
    this.toggleNavigationButton = this.header.querySelector(
      '.navigation__toggle-button'
    );
  }

  init() {
    console.log(this.navigation);
    this.addListeners();
  }

  addListeners() {
    this.toggleNavigationButton.addEventListener('click', () => {
      this.navigation.classList.toggle('navigation--mobile');
    });
  }
}
