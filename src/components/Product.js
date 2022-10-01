import {Component} from "react";

class Product extends Component{
    render(){
        const { product} = this.props
        return(
            <img src={product.img} alt={product.name}></img>
        )
    }
}
export default Product