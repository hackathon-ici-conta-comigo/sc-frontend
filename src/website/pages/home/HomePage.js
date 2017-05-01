import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import cardCadastrar from '../../../../public/assets/images/card-cadastrar.png';
import cardAcompanhar from '../../../../public/assets/images/card-acompanhar.png';
import cardContratar from '../../../../public/assets/images/card-contratar.png';

import Card from '../../card/Card';

export default class HomePage extends React.Component {

  constructor() {
    super();
    this.style = {
      paddingTop: '50px',
      marginBottom: '100px',
    };

    this.padding = {
      padding: '20px',
    };
  }

  render() {
    return (
        <div className="container" style={this.style}>
            <div className="row center">
                <p>
                  O Instituto do Câncer Infantil trabalha com jovens de até
                  19 anos, que passam muito tempo em tratamento,
                   acabam parando de estudar e, devido a isso,
                   possuem dificuldades para encontrar oportunidades de trabalho.
                   Essa plataforma busca auxiliar essas pessoas a retomar o rumo
                   da sua vida para atingir seus objetivos,
                   sem deixar que a doença abale o seu futuro.</p>
            </div>
            <div className="row center" style={this.padding}>
                  <h5><strong>Saiba como participar</strong></h5>
                  <p>Empresas, profissionais liberais e voluntários
                     podem entrar na plataforma seguindo esses passos:
                   </p>
            </div>
            <div className="row">
                <Card image={cardCadastrar}
                    alt="Crir um perfil" width="140"
                    description="Crie um perfil informando como você pode contribuir." />
                <Card image={cardAcompanhar}
                    alt="Acompanhe a trajetório do jovem" width="140"
                    description="O instituto seleciona os jovens que combinam com o seu perfil." />
                <Card image={cardContratar}
                    alt="Contrate"
                    width="140"
                    description="O contato é então estabelecido entre as partes interessadas." />
            </div>
            <div className="row">
              <p className="center">
                Se interessou pela nossa causa e está disposto a ajudar? <Link to="/register">Inscreva-se aqui.</Link>
              </p>
            </div>
        </div>
    );
  }
};
