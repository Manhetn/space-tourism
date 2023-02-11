export default class Tabs {
  constructor(elem) {
    this.elem = elem;
    this.tabsList = this.elem.querySelectorAll('.tabs__list-tab');
    this.tabsContentList = this.elem.querySelectorAll('.tabs__content-item');
  }

  init() {
    this._addListeners();
  }

  _addListeners() {
    this.tabsList.forEach((tab) => {
      tab.addEventListener('click', () => {
        this._selectTab(tab);
      });
    });
  }

  _selectTab(tab) {
    this.tabsList.forEach((tabItem) => {
      tabItem.setAttribute('aria-pressed', tab === tabItem);
    });
    this.tabsContentList.forEach((item) => {
      item.classList.toggle(
        'tabs__content-item--active',
        item.id === tab.dataset.forTabId
      );
    });
  }
}
