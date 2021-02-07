import React, {  createContext } from 'react';
import ReactDOM from 'react-dom';

import Main from './Main';
import ThemeContext, { defaultTheme } from './Shared/theme.style';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value={defaultTheme}>
      <Main />
    </ThemeContext.Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);
