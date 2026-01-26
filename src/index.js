// index.js
import './reset.css';
import './styles.css';

import { bindEvents } from './modules/controller';

function initializeApp() {
  bindEvents();
}

initializeApp();
