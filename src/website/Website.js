import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';

import './colors.css';

export default class Website extends React.Component {
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
        <section>
          <Header />
          <Content />
          <Footer />
        </section>
      </MuiThemeProvider>
    );
  }
};
