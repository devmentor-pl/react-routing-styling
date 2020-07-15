// ./src/PrivateRoute.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';

const PrivateRoute = ({children, redirect='/login', ...props}) => {
    return (
        <Route {...props}>
            { 
                isAuthenticated 
                ? children 
                : <Redirect to={ redirect }/> 
            }
        </Route>
    );
}

export default PrivateRoute;