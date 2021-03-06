import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductList from './ProductList.jsx';
import ProductView from './ProductView.jsx';
import ProductEdit from './ProductEdit.jsx'



const NotFound = () => <h1>Page Not Found</h1>;
export default function Contents() {    
    return (
    <Switch>
        <Redirect exact from="/" to="/products" />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/view/:url" component= {ProductView} />
        <Route exact path="/edit/:id" component = {ProductEdit} />
        <Route component={NotFound} />
    </Switch>
    );
}