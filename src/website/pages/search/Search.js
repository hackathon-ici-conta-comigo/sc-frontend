import React from 'react';
import './Search.css';
import { Row, Col, Input } from 'react-materialize';
//import _ from "lodash";
//import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';

//const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SearchForm extends React.Component {
  constructor() {
    super();
    this.defaultProps = {
      center: [59.938043, 30.337157],
      zoom: 9,
      greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    };
  }

  render() {
    return (
      <Row>                
        <form s={12}>
          <Row>
            <Col s={12}>
              <h5>Pesquisa de pacientes</h5>
            </Col>
          </Row>
          
          <Row>
              <Col s={12}>
                <Row><Input s={12} placeholder="Pesquisa por endereço, cidade ou país"/></Row>
                <Row>
                  <div style={{height: '450px'}}>
                    <GoogleMap
                      center={this.defaultProps.center}
                      zoom={this.defaultProps.zoom}>
                    </GoogleMap>
                  </div>
                </Row>
              </Col>
          </Row>
        </form>
      </Row>
    );
  }
}

export default class Search extends React.Component {
  render() {
    return (
        <div className="container">
          <SearchForm />
        </div>
    );
  }
};
