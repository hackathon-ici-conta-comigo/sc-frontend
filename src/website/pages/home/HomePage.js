import React from 'react';
import { Container, Row } from 'react-grid-system';

import './Home.css';

export default class HomePage extends React.Component {
  render() {
    return (
        <Container>
            <Row>
                <h1 className="text-center">Home Page! (With Travis =) )</h1>
            </Row>
        </Container>
    );
  }
};
