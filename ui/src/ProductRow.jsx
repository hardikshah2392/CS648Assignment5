import React from 'react';
import { Link } from 'react-router-dom';

export default class ProductRow extends React.Component{
    render() {
      const prod = this.props.prod;
      return(
        <tr>
          <td>{prod.name}</td>
          <td>${prod.price}</td>
          <td>{prod.category}</td>
          <td><Link to={`/image/${prod.url}`} target="_blank"> View </ Link></td>        
        </tr>
      )
    }
}