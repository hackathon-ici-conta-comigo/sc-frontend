import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../pages/register/Register';
import HomePage from '../pages/home/HomePage';

export default class Content extends React.Component {
  render() {
    return (
        <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/register" component={Register} />
                    <Route render={() =>
                        <h1>Page not found</h1>
                    } />
                </Switch>
        </div>
    );
  }
};
