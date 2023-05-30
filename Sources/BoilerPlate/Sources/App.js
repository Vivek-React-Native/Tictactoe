import React from 'react';
import { Provider } from 'react-redux';
import Routes from './Sources/Navigation';
import Store from './Sources/Redux';
const App = () => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
};
export default App;
