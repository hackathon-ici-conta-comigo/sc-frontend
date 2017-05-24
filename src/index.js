import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './common/css/common.css';
import Website from './website/Website';

import 'material-design-icons/iconfont/material-icons.css';
import 'react-select/dist/react-select.css';

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
