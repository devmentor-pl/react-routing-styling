// ./src/components/Routes.js
import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Home from './../views/Home';
import Contact from './../views/Contact';
import Category from './../views/Category'
import NotFound from './../views/NotFound';
import Article from './../views/Article';

import PrivateRoute from './../PrivateRoute';
import Admin from './../views/Admin';
import Login from './../views/Login';

const Routes = ({location}) => {
    return (
        <Switch location={location}>
            <PrivateRoute path='/admin' redirect='/login'>
                <Admin/>
            </PrivateRoute> 
            <Route path='/login'>
                <Login/>
            </Route>
            <Redirect from='/beta' to='/'/>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/contact'>
                <Contact/>
            </Route>
            <Route path='/category'>
                <Category/>
            </Route>
            <Route path='/article/:id-:alias'>
                <Article/>
            </Route>
            <Route path='/404.html'>
                <NotFound/>
            </Route>
            <Redirect to='/404.html'/>
        </Switch>
    );
}

export default Routes;