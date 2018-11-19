import React from 'react';
import ReactDOM from 'react-dom';
import Script from './Script';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Script />, div);
  ReactDOM.unmountComponentAtNode(div);
});