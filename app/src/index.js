import './assets/scss/index.scss';
import ReactDom from 'react-dom';
import React from 'react';

import App from './pages/App';

const el = document.getElementById('root');
ReactDom.render(<App></App>, el);