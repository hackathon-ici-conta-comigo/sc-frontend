import React from 'react';
import { Container, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';

import './TopNavigation.css';

export default class TopNavigation extends React.Component {
  render() {
    return (
        <nav className="backgroundColor">
            <Container>
                <Col lg={4}></Col>
                <Col lg={4}>
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
                        alt="Conta Comigo!" height="150" width="350" />
                    </Link>
                </Col>
                <Col lg={4}></Col>
            </Container>
        </nav>
    );
  }

};
