import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Clients from './Clients';
import Register from './Register';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/login" component={ Login } />
            <Route path="/clients" component={ Clients } />
            <Route path="/register" component={ Register } />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
