import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home } from './components'
import { SignIn } from './components';
import { Dashboard } from './components';
import './styles.css'
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './components/Redux/store';

const temp_props = "Terrific and Tasty Twisted Treats and Drinks"

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home title={temp_props} />
            </Route>
            <Route path='/Dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route path='/signIn'>
              <SignIn></SignIn>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);