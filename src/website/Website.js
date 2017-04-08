import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header/Header';
import Content from './content/Content';

import colors from './colors.css';

export default class Website extends React.Component {
  constructor({ match }) {
    super();
    this.match = match;
    this.theme = getMuiTheme({
      palette: {
        primary1Color: colors.primaryColor,
      },
    });

  }

  render() {
    return (
      <MuiThemeProvider muiTheme={this.theme}>
        <section>
          <Header />
          <Content match={this.match}/>
        </section>
      </MuiThemeProvider>
    );
  }
};
