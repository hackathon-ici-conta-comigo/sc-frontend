import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainTheme from './MainTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();




const App = () => (
  <MuiThemeProvider>
    <MainTheme />
  </MuiThemeProvider>
);

ReactDOM.render(
	<App />,
	document.getElementById("root")
);