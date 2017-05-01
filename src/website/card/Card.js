import React from 'react';

import './Card.css';

export default class Card extends React.Component {
  render() {
    return (
      <div className="col s12 m4 center">
          <img src={this.props.image} alt={this.props.alt}
              className="circle responsive-img" width={this.props.width}/>
            <p className="cardText">{this.props.description}</p>
      </div>
    );
  }
}
