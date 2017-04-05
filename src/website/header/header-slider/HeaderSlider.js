import React from 'react';
import Slider from 'react-slick';
import { Container, Col } from 'react-grid-system';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

import './slick.min.css';
import './slider.css';

class HeaderSlider extends React.Component {
  constructor() {
    super();

    this.settings = {
      dots: true,
      infinite: true,
      speed: 800,
      autoplay: false,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      arrows: false,
    };
    this.headingStyle = {
      padding: '40px 30px',
    };

    this.iciLink = {
      position: 'absolute',
      bottom: 0,
      marginLeft: '350px',
      marginBottom: '30px',
    };

    this.containerStyle = {
      width: '40%',
    };

  }

  render() {
    return (
      <div>
        <Slider {...this.settings}>
          <div className="estudo">
            <Container style={this.containerStyle} className="text-center header-slider-text">
                <h2 style={this.headingStyle}>
                  Você já usou suas forças nessa batalha, agora conta comigo!
                </h2>
                <Link to="/register">
                  <RaisedButton label="Cadastre-se" primary={true} />
                </Link>
            </Container>
          </div>

          <div className="ici">
            <Col md={2} />
            <Col md={8}>
              <RaisedButton style={this.iciLink}
                label="Acessar" primary={true} href="https://www.ici-rs.org.br/" />
            </Col>
            <Col md={2} />
          </div>
          <div className="selo-engajamento"></div>
        </Slider>
      </div>
    );
  }
}

export default HeaderSlider;
