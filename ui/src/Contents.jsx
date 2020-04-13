import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductList from './ProductList.jsx';
import ProductView from './ProductView.jsx';

const NotFound = () => <h1>Page Not Found</h1>;
export default function Contents() {
    return (
    <Switch>
        <Redirect exact from="/" to="/products" />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/image/:url" component={ProductView} />
        <Route component={NotFound} />
    </Switch>
    );
}