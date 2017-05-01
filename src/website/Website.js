import React from 'react';
import Header from './header/Header';
import Content from './content/Content';
import Footer from './footer/Footer';


export default class Website extends React.Component {
  constructor({ match }) {
    super();
    this.match = match;
  }

  render() {
    return (
        <main>
          <Header />
          <Content match={this.match}/>
          <Footer />
        </main>
    );
  }
};
