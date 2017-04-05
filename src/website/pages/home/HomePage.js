import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import './Home.css';

class HomePage extends React.Component {
  render() {
    return (
        <Container>
                <Row>
                    <h1 className="text-center">Home Page!</h1>
                </Row>
            </Container>
    );
  }
}

export default HomePage;
