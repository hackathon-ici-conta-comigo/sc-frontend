import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Page from './Page';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const App = () => (
  <MuiThemeProvider>
    <Page />
  </MuiThemeProvider>
);

ReactDOM.render(
	<App />,
	document.getElementById("root")
);