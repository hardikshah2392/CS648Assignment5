import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prefer-stateless-function
export default function ProductRow(props) {
  const { prod } = props;
  const { deleteProd } = props;
  { console.log(deleteProd) };
  return(
    <tr>
      <td>{prod.name}</td>
      <td>${prod.price}</td>
      <td>{prod.category}</td>
      <td><Link to={`/view/${prod.image}`} target="_blank"> View </Link></td>
      <td>
        <Link to={{ pathname: `/edit/${prod.id}`}}> Edit </Link>{' | '}
        <button id="btn1" onClick={()=> { deleteProd(prod.id); }}> Delete </button>
      </td> 
    </tr>
  )
}