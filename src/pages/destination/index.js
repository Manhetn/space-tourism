import Header from '../../scripts/components/Header';
import Tabs from '../../scripts/components/Tabs';

import './index.scss';

const header = document.querySelector('.header');
const tabs = document.querySelector('.destination__tabs');

new Header(header).init();
new Tabs(tabs).init();
