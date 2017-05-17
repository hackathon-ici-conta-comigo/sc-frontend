import React from 'react';
import './Search.css';
import { Row, Col, Input } from 'react-materialize';
import _ from "lodash";
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
              <Col s={3}>
                <Row><Input placeholder="Nome do paciente"/></Row>
                <Row>
                  <Input type="select" placeholder="Cidade" defaultValue="0">
                    <option value="0">Cidade</option>
                    <option value="1">Porto Alegre</option>
                    <option value="2">Santo Ângelo</option>
                  </Input>
                </Row>
              </Col>
              <Col s={9}>
                <div style={{height: '300px'}}>
                  <GoogleMap
                    center={this.defaultProps.center}
                    zoom={this.defaultProps.zoom}>
                  </GoogleMap>
                </div>
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
