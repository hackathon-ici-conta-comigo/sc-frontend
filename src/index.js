import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './common/css/common.css';
import Website from './website/Website';

const Admin = () => <h1>Admin</h1>;

const App = () => (
    <Router>
        <section>
            <Switch>
                <Route exact path="/admin" component={Admin}/>
                <Route path="/" component={Website}/>
            </Switch>
        </section>
    </Router>
);

ReactDOM.render(
    <App/>, document.getElementById('root'));
