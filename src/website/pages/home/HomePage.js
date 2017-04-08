import React from 'react';
import { Container, Row } from 'react-grid-system';
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
        <Container style={this.style}>
            <Row className="text-center">
                <p>
                  O Instituto do Câncer Infantil trabalha com jovens de até
                  19 anos, que passam muito tempo em tratamento,
                   acabam parando de estudar e, devido a isso,
                   possuem dificuldades para encontrar oportunidades de trabalho.
                   Essa plataforma busca auxiliar essas pessoas a retomar o rumo
                   da sua vida para atingir seus objetivos,
                   sem deixar que a doença abale o seu futuro.</p>
            </Row>
            <Row className="text-center" style={this.padding}>
                  <h4><strong>Saiba como participar</strong></h4><br/>
                  <p>Empresas, profissionais liberais e voluntários
                     podem entrar na plataforma seguindo esses passos:
                   </p>
            </Row>
            <Row>
                <Card image={cardCadastrar} col={4}
                    alt="Crir um perfil" width="140"
                    description="Crie um perfil informando como você pode contribuir." />
                  <Card image={cardAcompanhar} col={4}
                    alt="Acompanhe a trajetório do jovem" width="140"
                    description="O instituto seleciona os jovens que combinam com o seu perfil." />
                <Card image={cardContratar} col={4}
                    alt="Contrate"
                    width="140"
                    description="O contato é então estabelecido entre as partes interessadas." />
            </Row>
            <Row>
              <p className="text-center">
                Se interessou pela nossa causa e está disposto a ajudar?
                <Link to="/register">Inscreva-se aqui.</Link>
              </p>
            </Row>
        </Container>
    );
  }
};
