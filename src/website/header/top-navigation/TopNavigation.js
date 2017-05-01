import React from 'react';
import {Link} from 'react-router-dom';

import './TopNavigation.css'

export default class TopNavigation extends React.Component {
  render() {
    return (
      <section className="teal lighten-3">
        <section className="container">
          <section className="valign-wrapper">
            <Link to="/" className="logoLink">
              <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
                alt="Conta Comigo!" height="150" width="350"/>
            </Link>
          </section>
        </section>
      </section>
    );
  }

};
