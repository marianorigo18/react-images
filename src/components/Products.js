import { Component } from "react";
import Product from './Product';

class Products extends Component {
  render() {
    const { products } = this.props;
    console.log(this.props)
    return (
      <div>
        {products.map(product =>
            <Product
            key={product.id}
            product={product}
            />
            )}
      </div>
    );
  }
}

export default Products;
