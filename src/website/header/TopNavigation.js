import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';

class TopNavigation extends React.Component {
  render() {
    return (
        <div className="primaryColor">
                <Container>
                    <Row>
                        <Col lg={4}></Col>
                        <Col lg={4}>
                            <Link to="/">
                                <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'}
                                alt="Conta Comigo!" height="150" width="350" />
                            </Link>
                        </Col>
                        <Col lg={4}></Col>
                    </Row>
                </Container>
            </div>
    );
  }

}

export default TopNavigation;
