import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';
import './App.css';

const store = configureStore();
class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Route path="/:filter?" render={props => <App {...props} />} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default Root;
