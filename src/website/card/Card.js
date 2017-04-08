import React from 'react';
import { Col } from 'react-grid-system';

import style from './Card.css';

export default class Card extends React.Component {

  render() {
    return (
      <Col lg={this.props.col} className="text-center">
          <img src={this.props.image} alt={this.props.alt}
              className="img-circle" width={this.props.width}/>
             <p className="text-justify" className="cardTextPadding">
                  {this.props.description}
              </p>
      </Col>
    );
  }
}
