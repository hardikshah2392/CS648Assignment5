import React from 'react';
import PropTypes from 'prop-types';

export default class ProductAdd extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.prodAdd;
    this.props.createProd({
      name: form.name.value,
      price: form.price.value.replace("$",""),
      category:form.category.value,
      image:form.image.value
    });
    form.name.value = '',form.price.value = "$", form.category.value = "Shirts", form.image.value= ""
  }
  render() {
    return (
      <div>
        <br/>
        <h2>Add a Product</h2>
        <form name="prodAdd" onSubmit={this.handleSubmit}>
        <label>Category</label>
        <label>Name</label>
        <select name="category" defaultValue="Shirts">
              <option value="Shirts">Shirts</option>
              <option value="Jeans">Jeans</option>
              <option value="Jackets">Jackets</option>
              <option value="Sweaters">Sweaters</option>
              <option value="Accessories">Accessories</option>
        </select>
        <input type="text" name="name"/>
        <label>Price</label>
        <label>Image</label>
        <input type="text" name="price"/>
        <input type="text" name="image"/>
        <button>Add</button>
        </form>
      </div>
    )
  }
}
  