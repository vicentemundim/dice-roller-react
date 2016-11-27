import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';

render(
  <AppContainer>
    <App/>
  </AppContainer>,
  document.getElementById("app")
);

if (module && module.hot) {
  module.hot.accept('./app.jsx', () => {
    const ReloadedApp = require('./app.jsx').default;
    render(
      <AppContainer>
        <ReloadedApp/>
      </AppContainer>,
      document.getElementById("app")
    );
  });
}
