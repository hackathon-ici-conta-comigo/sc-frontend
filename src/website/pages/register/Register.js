import React from 'react';
import './Register.css';
import { Row, Col, Input, Icon } from 'react-materialize';

class RegisterForm extends React.Component {
  render() {
    return (
      <Row>                
        <form s={12}>
          <Row>
            <Col s={12}>
              <h5>Dados Principais</h5>
              <p>Infome seus dados principais.</p>
            </Col>
          </Row>
          
          <Row>
              <Input s={12} placeholder="Digite seu nome completo" label="Nome Completo">
                <Icon>account_circle</Icon>
              </Input>
          </Row>
          <Row>
              <Input className="datepicker" s={12} placeholder="Clique aqui para informar sua data de nascimento" label="Data de Nascimento" />
          </Row>

          <Row>
              <Col s={12}>
                  <Row>
                    <Col s={12}>
                        <h6>Endereço</h6>
                        <br />
                    </Col>
                    <Input s={6} type="select" label="Estado" defaultValue="0">
                        <option value="0">Escolha seu estado</option>
                        <option value="1">Rio Grande do Sul</option>
                        <option value="2">Santa Catarina</option>
                    </Input>
                    <Input s={6} type="select" label="Cidade" defaultValue="0">
                        <option value="0">Escolha sua cidade</option>
                        <option value="1">Porto Alegre</option>
                        <option value="2">Santo Ângelo</option>
                    </Input>
                </Row>
              </Col>
          </Row>

          <Row>
            <Col s={12}>
              <Row>
                  <Col s={12}>
                      <h5>Dados do seu perfil</h5>
                      <p>Informe seus principais interesses, o que gosta de fazer e o que você quer aprender</p>
                      <br />
                  </Col>
                  <Input placeholder="Digite seu email" label="Email" s={12} />
                  <Input type="password" placeholder="Digite sua senha" label="Senha" s={12} />
                  <Input type="password" placeholder="Confirme sua senha" label="Confirmação de Senha" s={12} />

                  <Input s={5} placeholder="Digite um interesse" label="Interesses"> 
                    <Icon>people_outline</Icon>
                  </Input>
                  <Col s={1}>
                    <a href="#" style={{verticalAlign: "middle"}}><Icon>add</Icon></a>
                  </Col>


                  <Input s={6} placeholder="Informe uma habilidade" label="Habilidades"> 
                    <Icon>create</Icon>
                  </Input>
                  
                  <Input s={6} placeholder="Informe uma dificuldade" label="Dificuldades"> 
                    <Icon>priority_high</Icon>
                  </Input>
                  <Input s={6} placeholder="Informe uma experiência" label="Experiências"> 
                    <Icon>star_border</Icon>
                  </Input>

                  <Input type="textarea" s={12} placeholder="Diga quais são seus anseios, suas dificuldades e o que você sonha como carreira profissional" label="Resumo"/>
              </Row> 
            </Col>
          </Row>
        </form>
      </Row>
    );
  }
}

export default class Register extends React.Component {
  render() {
    return (
        <div className="container">
          <RegisterForm />
        </div>
    );
  }
};
