import React from 'react';
import ReactDOM from 'react-dom';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Page from './page/Page';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Site} />
      <Route path="/admin" component={Admin} />
      <Route path="/register" component={Register} />
    </div>
  </Router>
);


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#89bcb8',
  }
});



const Site = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Page />
  </MuiThemeProvider>
);


const Admin = () => (
  <MuiThemeProvider></MuiThemeProvider>
)

const Register = () => <h1>Register</h1>

ReactDOM.render(
  <App />,
  document.getElementById("root")
);