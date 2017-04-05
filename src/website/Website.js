import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';

class Website extends React.Component {
  constructor() {
    super();
    this.theme = getMuiTheme({
      palette: {
        primary1Color: '#89bcb8',
      },
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={this.theme}>
        <div>
          <Header />
          <Content />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default Website;
