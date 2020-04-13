import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import Contents from './Contents.jsx';



var contentNode = document.getElementById('contents');


const element = (
  <Router>
    <Contents />
  </Router>
);



ReactDOM.render(element, contentNode);

if (module.hot) {
  module.hot.accept();
}