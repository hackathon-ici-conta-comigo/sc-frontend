import React from 'react';
import {Link} from 'react-router-dom';
import './HeaderSlider.css';

export default class HeaderSlider extends React.Component {

  componentDidMount() {
    
  }
  
  render() {
    return (
      <section className="carousel carousel-slider center" data-indicators="true">
        <section className="carousel-item slide estudo">
          <h4 className="sliderTitle">Você já usou suas forças nessa batalha, agora conta comigo!</h4>
          <section className="carousel-fixed-item center">
            <Link to="/register" className="waves-effect waves-light btn">
              Cadastre-se
            </Link>
          </section>
        </section>
        <section className="carousel-item slide ici">
          <section className="carousel-fixed-item center">
            <a className="waves-effect waves-light btn" href="https://www.ici-rs.org.br/">
              Acessar
            </a>
          </section>
        </section>
        <section className="carousel-item slide selo-engajamento"></section>
      </section>
    );
  }
};
