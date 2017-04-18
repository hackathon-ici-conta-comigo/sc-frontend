import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextField, DatePicker } from 'redux-form-material-ui';
import { Container } from 'react-grid-system';

import './Register.css';

class RegisterForm extends React.Component {
  render() {
    return (
      <form>
          <Field name="name" component={TextField} hintText="Informe seu nome completo" />
          <Field name="birthday"
              component={DatePicker} format={null}
              hintText="Informe sua data de nascimento"/>
      </form>
    );
  }
}
RegisterForm = reduxForm({
  form: 'RegisterForm',
  initialValues: { birthday: new Date(), },
})(RegisterForm);

export default class Register extends React.Component {
  render() {
    return (
        <Container>
          <RegisterForm />
        </Container>
    );
  }
};
