import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../pages/register/Register';
import HomePage from '../pages/home/HomePage';

export default class Content extends React.Component {

  constructor({ match }) {
    super();
    this.match = match;
  }

  render() {
    return (
        <Switch>
            <Route exact path={this.match.url} component={HomePage} />
            <Route path="/register" component={Register} />
            <Route render={() => <h1>Page not found</h1>} />
        </Switch>
    );
  }
};
