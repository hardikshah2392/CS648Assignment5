import React from 'react';
import ProductRow from './ProductRow.jsx';
  
export default class ProductTable extends React.Component {
    render () {
        const prodrows = this.props.prods.map(prod => <ProductRow key={prod.id} prod={prod}/>);
        return (
        <table style={{borderCollapse: "collapse"}}>
            <thead>
            <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            </tr>
            </thead>
            <tbody>
            {prodrows}
            </tbody>
        </table>
        )
    }
}