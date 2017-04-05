import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Website from './website/Website';

const Admin = () => <h1>Admin</h1>;

const App = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/admin" component={Admin}/>
                <Route path="/" component={Website}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(
    <App/>, document.getElementById('root'));
