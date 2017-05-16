import React from 'react';
import './Register.css';
import { Row, Col, Input, Icon, Button } from 'react-materialize';
import DatePicker from '../../../common/datepicker/DatePicker'

class RegisterForm extends React.Component {

  constructor() {
    super();
    this.state =  {
      name: '',
      birthday: null
    }
  }

  send (event) {
    event.preventDefault();
  }

  handleInput(event) {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  render() {
    return (
      <Row>                
        <form onSubmit={(event) => this.send(event)}>
          <Row>
            <Col s={12}>
              <h5>Dados Principais</h5>
              <p>Infome seus dados principais.</p>
            </Col>
          </Row>
          
          <Row>
              <Input s={12} label="Digite seu nome completo" onChange={(event) => this.setState({name: event.target.value})}>
                <Icon>account_circle</Icon>
              </Input>
          </Row>
          <Row>
              <DatePicker />
          </Row>

          <Row>
              <Col s={12}>
                  <Row>
                    <Col s={12}>
                        <h6>Endereço</h6>
                        <br />
                    </Col>
                    <Input s={6} name="state" type="select" label="Estado" defaultValue="0" onSelect={ event => this.handleInput(event) }>
                        <option value="0">Escolha seu estado</option>
                        <option value="1">Rio Grande do Sul</option>
                        <option value="2">Santa Catarina</option>
                    </Input>
                    <Input s={6} name="state" type="select" label="Cidade" defaultValue="0">
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
                  <Input name="email" placeholder="Digite seu email" label="Email" s={12} onChange={event => this.handleInput(event)} />
                  <Input type="password" name="password" label="Digite sua senha" s={12} onChange={event => this.handleInput(event)} />
                  <Input type="password" name="confirmPassword" label="Confirme sua senha" s={12} onChange={event => this.handleInput(event)} />

                  <Input s={5} name="interests" label="Digite um interesse"> 
                    <Icon>people_outline</Icon>
                  </Input>
                  <Col s={1}>
                    <a href="#" style={{verticalAlign: "middle"}}><Icon>add</Icon></a>
                  </Col>


                  <Input s={6} label="Informe uma habilidade"> 
                    <Icon>create</Icon>
                  </Input>
                  
                  <Input s={6} label="Informe uma dificuldade"> 
                    <Icon>priority_high</Icon>
                  </Input> 
                  <Input s={6} label="Informe uma experiência"> 
                    <Icon>star_border</Icon>
                  </Input>

                  <Input type="textarea" s={12} label="Diga quais são seus anseios, suas dificuldades e o que você sonha como carreira profissional"/>
              </Row> 
            </Col>
          </Row>
          <Row>
              <Col s={12}>
                <Button type='submit' waves='light'>Cadastrar<Icon right>send</Icon></Button>
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
