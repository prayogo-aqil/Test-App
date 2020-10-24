import 'mobx-react-lite/batchingForReactDom';

import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppNavigator from './routes';
import stores from './stores';

import { HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import * as serviceWorker from './serviceWorker';

const App = () => (
  <Provider {...stores}>
    <AppNavigator />
  </Provider>
);

ReactDOM.render(<React.StrictMode><HashRouter><App /></HashRouter></React.StrictMode>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
