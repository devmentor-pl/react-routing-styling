// ./src/components/Pagination.js
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import PaginationRoute from './PaginationRoute';

const Pagination = props => {
    const {children, path, limit = 1} = props;

    return (
        <Switch>
            <Route path={`${path}/:page`}>
                <PaginationRoute path={path} limit={limit}>
                    {children}
                </PaginationRoute>                  
            </Route>
            <Redirect to={`${path}/1`}/>
        </Switch>
    );
}

export default Pagination;